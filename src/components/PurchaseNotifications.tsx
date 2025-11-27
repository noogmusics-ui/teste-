import { useState, useEffect } from 'react';
import { X, ShoppingBag, TrendingUp } from 'lucide-react';

interface Notification {
  id: string;
  message: string;
  type: 'purchase' | 'activity';
}

const BRAZILIAN_NAMES = [
  'João Santos',
  'Maria Silva',
  'Carlos Oliveira',
  'Ana Costa',
  'Pedro Almeida',
  'Juliana Ferreira',
  'Lucas Rodrigues',
  'Beatriz Lima',
  'Rafael Souza',
  'Camila Martins',
  'Bruno Pereira',
  'Fernanda Rocha',
  'Gustavo Carvalho',
  'Larissa Mendes',
  'Felipe Nascimento',
  'Gabriela Dias',
  'Thiago Barbosa',
  'Amanda Ribeiro',
  'Rodrigo Castro',
  'Patricia Santos',
  'Leonardo Araujo',
  'Juliana Gomes da Silva',
  'Marcelo Cardoso',
  'Renata Monteiro'
];

function generateNotification(): Notification {
  const type = Math.random() > 0.5 ? 'purchase' : 'activity';

  if (type === 'purchase') {
    const name = BRAZILIAN_NAMES[Math.floor(Math.random() * BRAZILIAN_NAMES.length)];
    return {
      id: `notif-${Date.now()}`,
      message: `${name} finalizou a compra do kit agora mesmo!`,
      type: 'purchase'
    };
  } else {
    const count = Math.floor(Math.random() * 10) + 3; // 3-12
    return {
      id: `notif-${Date.now()}`,
      message: `${count} pessoas estão comprando neste momento!`,
      type: 'activity'
    };
  }
}

export default function PurchaseNotifications() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Show first notification after initial delay
    const initialDelay = setTimeout(() => {
      showNewNotification();
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!notification || isPaused) return;

    // Auto-hide notification after 6-8 seconds
    const hideDelay = Math.floor(Math.random() * 2000) + 6000;
    const hideTimer = setTimeout(() => {
      hideNotification();
    }, hideDelay);

    return () => clearTimeout(hideTimer);
  }, [notification, isPaused]);

  const showNewNotification = () => {
    const newNotif = generateNotification();
    setNotification(newNotif);
    setIsVisible(true);

    // Schedule next notification after 8-15 seconds
    const nextDelay = Math.floor(Math.random() * 7000) + 8000;
    setTimeout(() => {
      if (!isPaused) {
        hideNotification();
        setTimeout(() => {
          showNewNotification();
        }, 1000);
      }
    }, nextDelay);
  };

  const hideNotification = () => {
    setIsVisible(false);
    setTimeout(() => {
      setNotification(null);
    }, 300);
  };

  const handleClose = () => {
    hideNotification();
  };

  // Pause notifications when tab is not active
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  if (!notification) return null;

  const isPurchase = notification.type === 'purchase';
  const bgColor = isPurchase ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-orange-500 to-orange-600';
  const Icon = isPurchase ? ShoppingBag : TrendingUp;

  return (
    <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <div
        className={`
          ${bgColor}
          text-white
          rounded-lg
          shadow-2xl
          px-4 py-3
          max-w-md
          w-full
          pointer-events-auto
          transition-all
          duration-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        `}
        role="alert"
        aria-live="polite"
      >
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
          </div>

          {/* Message */}
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold leading-tight">
              {notification.message}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
            aria-label="Fechar notificação"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
