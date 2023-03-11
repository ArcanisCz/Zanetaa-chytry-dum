import React from 'react';
import './style.css';
import blindsClosed from './blinds-closed.svg';
import blindsOpen from './blinds-open.svg';

export const Blinds = ({ state }) => {
  const [zaluzie, setZaluzie] = useState(state);

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={zaluzie == 'open' ? blindsOpen : blindsClosed} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={zaluzie == 'open' ? 'button button--active' : 'button'}
          onClick={() => setZaluzie('open')}
          className="button button--active"
        >
          Otevřeno
        </button>
        <button
          className={zaluzie == 'closed' ? 'button button--active' : 'button'}
          onClick={() => setZaluzie('open')}
          className="button"
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};
