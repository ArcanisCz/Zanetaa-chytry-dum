import React from 'react';
import './style.css';
import { Light } from '../Light';

export const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {lights.map((data) => (
        <Light key={data.name} name={data.name} state={data.state} />
      ))}
      ;
    </div>
  );
};
