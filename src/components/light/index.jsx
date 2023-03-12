import React from 'react';
import './style.css';
import lightOff from './light-off.svg';
import lightOn from './light-on.svg';

export const Light = ({ name, state }) => {
  const [lightState, setLightState] = useState(state);

  const handleClick = () => {
    if (lightState === 'on') {
      setLightState('off');
    } else {
      setLightState('on');
    }
  };

  return (
    <div className="lights">
      <div onClick={handleClick} className="light">
        <div className="light__icon">
          <img src={lightState == on ? lightOn : lightOff} />
        </div>
        <div className="light__name">{name}</div>
      </div>
    </div>
  );
};
