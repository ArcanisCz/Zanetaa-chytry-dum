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
        key={data.temperatue}
        temperature={data.temperature}
        temperature={data.huidity}
      />
      <Blinds state={data.blinds} />
      <Energy electricity={data.electricity} water={data.water} />
    </main>
  );
};
