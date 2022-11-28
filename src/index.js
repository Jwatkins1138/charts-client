import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
// import * as Sentry from '@sentry/browser';
// import { BrowserTracing } from '@sentry/tracing';


// Sentry.init({
//   dsn: 'https://828c482600264c2ea040621dda58afcc@o4504176643080192.ingest.sentry.io/4504199286423552',
//   integrations: [new BrowserTracing()],
//   tracesSampleRate: 1.0,
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

