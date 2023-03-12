import React from 'react';
import './style.css';
import { Light } from '../Light';
import smartHomeData from '../../smartHomeData';

export const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {smartHomeData.map((lights) => (
        <Light key={lights.name} name={lights.name} state={lights.state} />
      ))}
      ;
    </div>
  );
};
