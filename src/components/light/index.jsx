import React from 'react';
import './style.css';
import smartHomeData from '../../smartHomeData';
import lightOff from './light-off.svg';
import lightOn from './light-on.svg';

export const Light = ({ name, state }) => {
  const [state, setState] = useState('on');

  const handleClick = () => {
    if (state === 'on') {
      setState('off');
    } else {
      setState('on');
    }
  };

  return (
    <div className="lights">
      <div onClick={handleClick} className="light">
        <div className="light__icon">
          <img src={lightOff} />
        </div>
        <div className="light__name">{name}</div>
      </div>
    </div>
  );
};
