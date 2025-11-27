import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initAutoScroll } from './utils/auto-scroll';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

initAutoScroll({
  pixelsPerFrame: 87,
  initialDelay: 100
});
