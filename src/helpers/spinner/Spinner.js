import React from 'react';
import './style.css';

export const Spinner = () => {
  return (
    <div data-testid="loading" className='spinner__container'>

    <div className='spinner'>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>
  );
};
