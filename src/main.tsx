import React from 'react';
import { createRoot } from 'react-dom/client';

import './config/Styles';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <React.Suspense fallback="">
    <App />
  </React.Suspense>,
);
