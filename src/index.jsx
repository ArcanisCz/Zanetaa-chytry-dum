import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { smartHomeData } from './smartHomeData';

const App = () => (
  <div className="container">
    <header>
      <h1>Chytrý dům</h1>
    </header>
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
