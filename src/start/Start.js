import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { MdSystemUpdateAlt } from 'react-icons/md';
import './start.css'

import { Link } from 'react-router-dom';

export const Start = () => {
  return (
    <div className='container__start'>
      <Link to='/home'><AiFillHome/>Front </Link>-
      <Link to='/dates'><MdSystemUpdateAlt/>Back</Link>  
    </div>
  )
}


