import React from 'react';
import './style.css';

export const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <div className="lights">
        <div className="light">
          <div className="light__icon">
            <img src="./light-off.svg" />
          </div>
          <div className="light__name">Obývací pokoj</div>
        </div>

        <div className="light">
          <div className="light__icon">
            <img src="./images/light-on.svg" />
          </div>
          <div className="light__name">Ložnice</div>
        </div>

        <div className="light">
          <div className="light__icon">
            <img src="./images/light-on.svg" />
          </div>
          <div className="light__name">Kuchyň</div>
        </div>

        <div className="light">
          <div className="light__icon">
            <img src="./images/light-off.svg" />
          </div>
          <div className="light__name">Chodba</div>
        </div>
      </div>

      <div className="climate">
        <div className="climate__icon">
          <img src="./images/temp.svg" />
        </div>
        <div className="climate__content">
          <div className="climate__temperature">24&deg;C</div>
          <div className="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
        </div>
        <div className="climate__controls">
          <button className="button">+</button>
          <button className="button">-</button>
        </div>
      </div>

      <div className="blinds">
        <div className="blinds__icon">
          <img src="./images/blinds-open.svg" />
        </div>
        <div className="blinds__name">Žaluzie</div>
        <div className="blinds__controls">
          <button className="button button--active">Otevřeno</button>
          <button className="button">Zavřeno</button>
        </div>
      </div>

      <div className="energy">
        <div className="energy__source">
          <div className="energy__icon">
            <img src="./images/electricity.svg" />
          </div>
          <div className="energy__consumption">
            <div className="energy__description">Elektřina</div>
            <div className="energy__value">36.7 kW</div>
          </div>
        </div>
        <div className="energy__source">
          <div className="energy__icon">
            <img src="./images/water.svg" />
          </div>
          <div className="energy__consumption">
            <div className="energy__description">Voda</div>
            <div className="energy__value">
              14.1 m<sup>3</sup>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};