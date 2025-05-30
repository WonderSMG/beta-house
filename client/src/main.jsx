import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './Context/AuthContext.jsx'; // Import AuthProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* AuthProvider must wrap the App component to make auth context available */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
