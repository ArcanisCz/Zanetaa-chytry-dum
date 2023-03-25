import React from 'react';
import './style.css';
import { useState } from 'react';

export const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header__title">Chytrý dům</h1>
    </header>
  );
};
