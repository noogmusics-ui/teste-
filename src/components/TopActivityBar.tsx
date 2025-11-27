/**
 * TopActivityBar Component
 *
 * Real-time activity bar showing purchase events, cart activity, and viewer counts.
 *
 * PRODUCTION SETUP:
 * 1. Connect Kiwify webhook to your serverless function
 * 2. Process webhook data and store in Supabase (optional)
 * 3. Implement /api/purchases-feed endpoint to return real events
 * 4. NEVER activate DEMO mode in production
 *
 * DEMO MODE:
 * - Activate with ?demo=1 in URL or localStorage.setItem('demo_activity_bar', 'true')
 * - Shows [DEMO] prefix on all messages
 * - Uses generated Brazilian names and cities
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Check, ShoppingCart, Eye, Info, X } from 'lucide-react';

interface PurchaseEvent {
  type: 'purchase';
  name: string;
  item: string;
  city?: string;
  ts: string;
}

interface CartActivityEvent {
  type: 'cart_activity';
  count: number;
  window: string;
}

interface ViewersEvent {
  type: 'viewers';
  count: number;
}

type ActivityEvent = PurchaseEvent | CartActivityEvent | ViewersEvent;

interface Message {
  id: string;
  text: string;
  icon: 'check' | 'cart' | 'eye';
  isDemo: boolean;
}

const DEMO_NAMES = [
  'João Santos',
  'Ana Souza',
  'Pedro Lima',
  'Rafaela Silva',
  'Lucas Almeida',
  'Camila Rocha',
  'Bruno Costa',
  'Juliana Ferreira',
  'Maria Oliveira',
  'Felipe Martins',
  'Gabriela Pereira',
  'Rodrigo Carvalho',
  'Beatriz Rodrigues',
  'Thiago Nascimento',
  'Larissa Mendes'
];

const DEMO_CITIES = [
  'São Paulo - SP',
  'Rio de Janeiro - RJ',
  'Belo Horizonte - MG',
  'Salvador - BA',
  'Curitiba - PR',
  'Brasília - DF',
  'Fortaleza - CE',
  'Porto Alegre - RS',
  'Recife - PE',
  'Campinas - SP'
];

const DEMO_ITEMS = [
  'Kit Completo',
  'Kit',
  'Plano Anual',
  'Plano Mensal',
  'Pacote Premium'
];

function generateDemoMessages(): Message[] {
  const messages: Message[] = [];

  for (let i = 0; i < 15; i++) {
    const eventType = i % 3;

    if (eventType === 0) {
      const name = DEMO_NAMES[Math.floor(Math.random() * DEMO_NAMES.length)];
      const city = DEMO_CITIES[Math.floor(Math.random() * DEMO_CITIES.length)];
      const item = DEMO_ITEMS[Math.floor(Math.random() * DEMO_ITEMS.length)];
      messages.push({
        id: `demo-${i}`,
        text: `[DEMO] ${name} finalizou a compra do ${item} (${city})`,
        icon: 'check',
        isDemo: true
      });
    } else if (eventType === 1) {
      const count = Math.floor(Math.random() * 8) + 2;
      const window = ['3 min', '5 min', '10 min'][Math.floor(Math.random() * 3)];
      messages.push({
        id: `demo-${i}`,
        text: `[DEMO] ${count} pessoas adicionaram ao carrinho nos últimos ${window}`,
        icon: 'cart',
        isDemo: true
      });
    } else {
      const count = Math.floor(Math.random() * 20) + 10;
      messages.push({
        id: `demo-${i}`,
        text: `[DEMO] ${count} pessoas estão vendo esta página agora`,
        icon: 'eye',
        isDemo: true
      });
    }
  }

  return messages;
}

function convertEventToMessage(event: ActivityEvent, isDemo: boolean): Message {
  const prefix = isDemo ? '[DEMO] ' : '';

  switch (event.type) {
    case 'purchase':
      return {
        id: `${event.type}-${event.ts}`,
        text: `${prefix}${event.name} finalizou a compra do ${event.item}${event.city ? ` (${event.city})` : ''}`,
        icon: 'check',
        isDemo
      };
    case 'cart_activity':
      return {
        id: `${event.type}-${Date.now()}`,
        text: `${prefix}${event.count} pessoas adicionaram ao carrinho nos últimos ${event.window}`,
        icon: 'cart',
        isDemo
      };
    case 'viewers':
      return {
        id: `${event.type}-${Date.now()}`,
        text: `${prefix}${event.count} pessoas estão vendo esta página agora`,
        icon: 'eye',
        isDemo
      };
  }
}

export default function TopActivityBar() {
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();
  const fetchIntervalRef = useRef<NodeJS.Timeout>();

  // Check for DEMO mode
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const demoParam = urlParams.get('demo') === '1';
    const demoStorage = localStorage.getItem('demo_activity_bar') === 'true';

    if (demoParam) {
      localStorage.setItem('demo_activity_bar', 'true');
      setIsDemoMode(true);
    } else if (demoStorage) {
      setIsDemoMode(true);
    }
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Fetch real data or use demo data
  const fetchData = useCallback(async () => {
    if (isDemoMode) {
      setMessages(generateDemoMessages());
      return;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      const response = await fetch('/api/purchases-feed', {
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data: ActivityEvent[] = await response.json();
        if (data.length > 0) {
          const convertedMessages = data.map(event => convertEventToMessage(event, false));
          setMessages(convertedMessages);
        } else {
          setMessages([]);
        }
      } else {
        setMessages([]);
      }
    } catch (error) {
      // Silent fail - no fake messages
      setMessages([]);
    }
  }, [isDemoMode]);

  // Initial fetch
  useEffect(() => {
    fetchData();

    // Fetch real data every 20s (only if not in demo mode)
    if (!isDemoMode) {
      fetchIntervalRef.current = setInterval(fetchData, 20000);
    }

    return () => {
      if (fetchIntervalRef.current) {
        clearInterval(fetchIntervalRef.current);
      }
    };
  }, [fetchData, isDemoMode]);

  // Carousel rotation
  useEffect(() => {
    if (messages.length === 0) return;

    const isMobile = window.innerWidth < 640;
    const interval = prefersReducedMotion ? 7000 : (isMobile ? 4500 : 3500);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [messages.length, prefersReducedMotion]);

  // Page Visibility API - pause when tab not active
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      } else {
        // Resume rotation
        if (messages.length > 0) {
          const isMobile = window.innerWidth < 640;
          const interval = prefersReducedMotion ? 7000 : (isMobile ? 4500 : 3500);
          intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % messages.length);
          }, interval);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [messages.length, prefersReducedMotion]);

  const handleClose = () => {
    setIsVisible(false);
    // Move to next message
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
      setIsVisible(true);
    }, 300);
  };

  const handleNextMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const handleDisableDemo = () => {
    localStorage.removeItem('demo_activity_bar');
    window.location.href = window.location.pathname;
  };

  if (messages.length === 0) {
    return null;
  }

  const currentMessage = messages[currentIndex];

  const IconComponent = currentMessage.icon === 'check' ? Check :
                       currentMessage.icon === 'cart' ? ShoppingCart : Eye;

  return (
    <div
      className="fixed top-0 inset-x-0 z-50 bg-[#0B0B0F] text-[#F5F5F7] border-b border-white/10"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="max-w-screen-xl mx-auto px-3 sm:px-4 h-11 sm:h-[52px] flex items-center justify-between gap-3">
        {/* Left side - Admin controls (only in demo mode) */}
        {isDemoMode && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleDisableDemo}
              className="text-xs px-2 py-1 bg-white/10 hover:bg-white/20 rounded transition-colors"
              aria-label="Desativar modo demonstração"
            >
              Desativar DEMO
            </button>
            <button
              onClick={handleNextMessage}
              className="text-xs px-2 py-1 bg-white/10 hover:bg-white/20 rounded transition-colors"
              aria-label="Próxima mensagem"
            >
              Próxima
            </button>
          </div>
        )}

        {/* Center - Message */}
        <div className="flex-1 flex items-center justify-center gap-2 min-w-0">
          <div className={`flex items-center gap-2 transition-all duration-300 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : prefersReducedMotion
                ? 'opacity-0'
                : 'opacity-0 -translate-y-2'
          }`}>
            <IconComponent className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm font-medium truncate">
              {currentMessage.text}
            </span>
            {currentMessage.isDemo && (
              <div className="relative">
                <button
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onFocus={() => setShowTooltip(true)}
                  onBlur={() => setShowTooltip(false)}
                  className="flex-shrink-0"
                  aria-label="Informação sobre demonstração"
                >
                  <Info className="w-4 h-4 text-white/60 hover:text-white/90 transition-colors" />
                </button>
                {showTooltip && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-[#111]/90 text-[#EEE] text-xs rounded-xl shadow-lg whitespace-nowrap z-10"
                    role="tooltip"
                  >
                    Demonstração de atividade — conecte um provedor de pagamentos para eventos reais
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111]/90 rotate-45"></div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right side - Close button */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Fechar esta mensagem"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
