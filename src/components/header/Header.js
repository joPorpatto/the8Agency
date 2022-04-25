/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'; import './header.css';
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IconContext } from "react-icons";

export const Header = () => {

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > 400) { // if scroll down hide the navbar
        setShow(true); 
      } else { // if scroll up show the navbar
        setShow(false);  
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <header id='#'>
      <div className='header__container'>
        <div className='header__webinar'>
          webinar
        </div>
        <p className='header__title1'>El reto de humanizar el CX financiero en 2021.   </p>   
        <p className='header__title2'>La experiencia de un Unicornio de Latam</p>       
        <p className='header__title3'>Miércoles 16 de diciembre | 17 hs (Horario de Quito)</p>      
      </div>
      {
          (show) &&
                <IconContext.Provider value={{ size:45}}>
                      <div>
                        <a href='#' className='scroll__up'>
                          <IoIosArrowDropupCircle/>
                        </a>                          
                      </div>
                    </IconContext.Provider>
        }
    </header>
  )
}
