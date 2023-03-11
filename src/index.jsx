import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { smartHomeData } from './smartHomeData';
import { Header } from './components/Header';

const App = () => {
  return (
    <div className="container">
      <Header title="Chytrý dům" />
      {/*<Dashboard />*/}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
