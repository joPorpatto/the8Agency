import React from 'react'
import './header.css';

export const Header = () => {
  return (
    <header>
      <div className='header__container'>
        <button>
          webinar
        </button>
        <p className='header__title1'>El reto de humanizar el CX financiero en 2021.   </p>   
        <p className='header__title2'>La experiencia de un Unicornio de Latam</p>       
        <p className='header__title3'>Miércoles 16 de diciembre | 17 hs (Horario de Quito)</p>      
      </div>
    </header>
  )
}
