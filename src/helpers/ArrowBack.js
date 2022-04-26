import React from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import './arrowBack.css';

export const ArrowBack = () => {
  return (
    <IconContext.Provider value={{ size: 45, color: '#C05100' }}>
      <div className='arrow_back'>
        <Link to='/'><IoIosArrowDropleftCircle/></Link>
      </div>
    </IconContext.Provider>
  );
};
