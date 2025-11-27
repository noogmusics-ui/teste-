/**
 * Automatic Smooth Scroll System
 *
 * Features:
 * - Smooth, continuous scrolling animation
 * - Automatic detection of user interaction (stops on user scroll/click)
 * - Performance optimized with requestAnimationFrame
 * - Respects reduced motion preferences for accessibility
 * - Configurable speed and behavior
 */

interface AutoScrollConfig {
  pixelsPerFrame: number;
  initialDelay: number;
  targetSelector: string;
  stopOnUserInteraction: boolean;
  respectReducedMotion: boolean;
}

const DEFAULT_CONFIG: AutoScrollConfig = {
  pixelsPerFrame: 420,
  initialDelay: 2000,
  targetSelector: '#scroll-target-section',
  stopOnUserInteraction: true,
  respectReducedMotion: true,
};

export function initAutoScroll(customConfig?: Partial<AutoScrollConfig>): void {
  const config: AutoScrollConfig = { ...DEFAULT_CONFIG, ...customConfig };

  console.log('[AutoScroll] Initializing with config:', config);

  // Check for reduced motion preference
  if (config.respectReducedMotion) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      console.log('[AutoScroll] User prefers reduced motion - skipping auto-scroll');
      return;
    }
  }

  let isScrolling = false;
  let shouldStop = false;
  let animationFrameId: number | null = null;
  let userInteracted = false;

  // User interaction detection
  const stopScrolling = (): void => {
    if (!config.stopOnUserInteraction || !isScrolling) return;

    console.log('[AutoScroll] User interaction detected - stopping scroll');
    shouldStop = true;
    userInteracted = true;

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };

  // Event listeners for user interaction
  const interactionEvents = ['wheel', 'touchstart', 'mousedown', 'keydown'];

  const setupInteractionListeners = (): void => {
    interactionEvents.forEach(event => {
      document.addEventListener(event, stopScrolling, { passive: true, once: true });
    });
  };

  const removeInteractionListeners = (): void => {
    interactionEvents.forEach(event => {
      document.removeEventListener(event, stopScrolling);
    });
  };

  // Smooth continuous scroll animation
  const smoothScrollTo = (targetY: number): Promise<void> => {
    return new Promise((resolve) => {
      if (userInteracted) {
        resolve();
        return;
      }

      isScrolling = true;
      shouldStop = false;
      const startY = window.pageYOffset;
      const distance = targetY - startY;

      console.log(`[AutoScroll] Starting smooth scroll from ${startY} to ${targetY} (${distance}px)`);

      let currentY = startY;

      const animate = (): void => {
        if (shouldStop || userInteracted) {
          console.log('[AutoScroll] Scroll stopped by user');
          isScrolling = false;
          removeInteractionListeners();
          resolve();
          return;
        }

        const remainingDistance = targetY - currentY;

        // Stop when we're close enough
        if (Math.abs(remainingDistance) < 1) {
          window.scrollTo(0, targetY);
          console.log('[AutoScroll] Scroll complete!');
          isScrolling = false;
          removeInteractionListeners();
          resolve();
          return;
        }

        // Calculate next position with easing
        const step = Math.sign(remainingDistance) * Math.min(
          Math.abs(remainingDistance),
          config.pixelsPerFrame
        );

        currentY += step;
        window.scrollTo(0, currentY);

        animationFrameId = requestAnimationFrame(animate);
      };

      // Setup listeners and start animation
      setupInteractionListeners();
      animationFrameId = requestAnimationFrame(animate);
    });
  };

  // Find target and calculate position
  const findTargetAndScroll = async (): Promise<void> => {
    const target = document.querySelector(config.targetSelector);

    if (!target) {
      console.log('[AutoScroll] Target element not found:', config.targetSelector);
      return;
    }

    const rect = target.getBoundingClientRect();
    if (rect.height === 0) {
      console.log('[AutoScroll] Target element not visible yet');
      return;
    }

    console.log('[AutoScroll] Target found and visible');

    // Calculate target position (150px offset from top)
    const targetPosition = rect.top + window.pageYOffset - 150;

    // Only scroll if we need to
    if (targetPosition <= window.pageYOffset) {
      console.log('[AutoScroll] Already at or past target position');
      return;
    }

    await smoothScrollTo(targetPosition);
  };

  // Wait for page to be ready, then scroll
  const attemptScroll = (attempts = 0, maxAttempts = 40): void => {
    if (userInteracted) return;

    if (attempts >= maxAttempts) {
      console.log('[AutoScroll] Maximum attempts reached');
      return;
    }

    const target = document.querySelector(config.targetSelector);

    if (target) {
      const rect = target.getBoundingClientRect();
      if (rect.height > 0) {
        console.log(`[AutoScroll] Target ready after ${attempts + 1} attempts`);
        setTimeout(() => findTargetAndScroll(), 500);
        return;
      }
    }

    setTimeout(() => attemptScroll(attempts + 1, maxAttempts), 200);
  };

  // Check for gate element or start immediately
  const checkForGate = (): void => {
    const gate = document.getElementById('gate');

    if (gate) {
      console.log('[AutoScroll] Gate detected - waiting for release event');
      document.addEventListener('gate:released', () => {
        console.log('[AutoScroll] Gate released!');
        setTimeout(() => attemptScroll(), 1000);
      }, { once: true });
    } else {
      console.log('[AutoScroll] No gate detected - starting scroll sequence');
      attemptScroll();
    }
  };

  // Initialize after page content loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(checkForGate, config.initialDelay);
    });
  } else {
    setTimeout(checkForGate, config.initialDelay);
  }
}

// Export configuration type for external use
export type { AutoScrollConfig };
