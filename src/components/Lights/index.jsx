import React from 'react';
import './style.css';
import { Light } from '../Light';
import smartHomeData from '../../smartHomeData';
import { useState } from 'react';

export const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {lights.map((lights) => (
        <Light key={lights.name} name={lights.name} state={lights.state} />
      ))}
      ;
    </div>
  );
};
