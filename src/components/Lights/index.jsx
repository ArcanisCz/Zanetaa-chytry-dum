import React from 'react';
import './style.css';
import { Light } from '../Light';
import smartHomeData from '../../smartHomeData';

export const Lights = ({ data }) => {
  return (
    <div className="lights">
      {smartHomeData.map((data) => (
        <Light
          key={data.lights.name}
          name={data.lights.name}
          state={data.lights.state}
        />
      ))}
      ;
    </div>
  );
};
