import React from 'react';
import { BarContainer, Bar } from './style-progress-bar';

const state = {
  count: 0,
};


function changeBarWidth() {
  const bar = document.getElementById('bar');
  const percentText = document.querySelector('span')
  if (bar === null) {
    throw new Error('Invalid ID');
  }

  if (percentText === null) {
    throw new Error('Invalid ID to percent text')
  }

  if (state.count < 100) {
    const duration = 10;
    const timerID = setInterval(() => {
      state.count += 1;

      bar.style.width = `${state.count}%`;
      percentText.textContent = `${state.count}%`;

      if (state.count >= 100) {
        clearInterval(timerID);
        state.count = 0;
      }
    }, duration);
  }
}

export default function Progress() {
  return (
    <>
      <BarContainer>
        <Bar id="bar"/>
        <span>{state.count}%</span>
      </BarContainer>
      <br />
      <button type="button" onClick={changeBarWidth}>Click</button>
    </>
  );
}
