import React from 'react';
import './brands.css';

import LOGO1 from '../../../assets/cluster.png';
import LOGO2 from '../../../assets/asobanca.png';
import LOGO3 from '../../../assets/ipbf.jpg';
import LOGO4 from '../../../assets/hightelecom_horizontal.png';
import LOGO5 from '../../../assets/ebanx2_1.png';
import LOGO6 from '../../../assets/zen.png';

const logosList = [
  {image: LOGO1, id:1 },
  {image: LOGO2, id:2 },
  {image: LOGO3, id:3 },
  {image: LOGO4, id:4 },
  {image: LOGO5, id:5 },
  {image: LOGO6, id:6 },
]

export const Brands = () => {
  return (
    <div className='brands__container'>
      {
        logosList.map(logo =>{
          return(
            <div key={logo.id}>
              <img src={logo.image} alt="logo"/>
            </div>
          )
        })
      }
    </div>
  )
}
