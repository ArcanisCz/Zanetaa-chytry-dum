import React from 'react';
import './style.css';
import { Lights } from '../Lights';
import { Climate } from '../Climate';
import { Blinds } from '../Blinds';
import { Energy } from '../Energy';
import { useState } from 'react';

export const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights key={data.lights} lights={data.lights} />
      <Climate
        key={data.climate.temperatue}
        temperature={data.climate.temperature}
        humidity={data.climate.humidity}
      />
      <Blinds state={data.blinds} />
      <Energy
        electricity={data.energyConsumption.electricity}
        water={data.energyConsumption.water}
      />
    </main>
  );
};
