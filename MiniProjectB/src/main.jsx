import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Ensure this points to your App component
import './index.css'; // Include your global styles

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);