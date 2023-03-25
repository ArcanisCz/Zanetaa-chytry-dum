import React from 'react';
import './style.css';
import temp from './temp.svg';
import { useState } from 'react';

export const Climate = ({ temperature, humidity }) => {
  const [climateTemperature, setClimateTemperature] = useState(24);

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={temp} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{climateTemperature}&deg;C</div>
        <div className="climate__humidity">
          Vlhost vzduchu {humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button
          onClick={() => setClimateTemperature(climateTemperature + 1)}
          className="button"
        >
          +
        </button>
        <button
          onClick={() => setClimateTemperature(climateTemperature - 1)}
          className="button"
        >
          -
        </button>
      </div>
    </div>
  );
};
