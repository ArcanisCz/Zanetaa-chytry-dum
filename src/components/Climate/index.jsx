import React from 'react';
import './style.css';
import temp from './temp.svg';

export const Climate = ({ temperature, humidity }) => {
  const [pocet, setPocet] = useState(0);

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={temp} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{temperature}&deg;C</div>
        <div className="climate__humidity">
          Vlhost vzduchu {humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button onClick={() => setPocet(pocet + 1)} className="button">
          +
        </button>
        <button onClick={() => setPocet(pocet - 1)} className="button">
          -
        </button>
      </div>
    </div>
  );
};
