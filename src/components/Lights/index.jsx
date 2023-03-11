import React from 'react';
import './style.css';
import smartHomeData from '../../smartHomeData';

export const Lights = ({ lights }) => {
  return (
    <div className="lights">
      <div className="light">
        <div className="light__icon">
          <img src="./light-off.svg" />
        </div>
        <div className="light__name">{lights.name}</div>
      </div>

      <div className="light">
        <div className="light__icon">
          <img src="./images/light-on.svg" />
        </div>
        <div className="light__name">{lights.name}</div>
      </div>

      <div className="light">
        <div className="light__icon">
          <img src="./images/light-on.svg" />
        </div>
        <div className="light__name">{lights.name}</div>
      </div>

      <div className="light">
        <div className="light__icon">
          <img src="./images/light-off.svg" />
        </div>
        <div className="light__name">{lights.name}</div>
      </div>
    </div>
  );
};
