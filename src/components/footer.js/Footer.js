import React from 'react'
import './footer.css';
import TWITER from '../../assets/twitter.png';
import FACEBOOK from '../../assets/facebook.png';
import LINKEDIN from '../../assets/linkedin.png';
import YOUTUBE from '../../assets/youtube.png';
import INSTAGRAM from '../../assets/instagram.png';
import SNAPCHAT from '../../assets/snapchat.png'

const socialsList = [
  {name: TWITER, id:1},
  {name: FACEBOOK, id:2},
  {name: LINKEDIN, id:3},
  {name: YOUTUBE, id:4},
  {name: INSTAGRAM, id:5},
  {name: SNAPCHAT, id:6},
]


export const Footer = () => {
  return (
    <footer>
        <div className='footer__container'>
          <p>© 2020</p>
          <div className='footer__socials'>
            {
              socialsList.map(social => {
                return(
                  <div key={social.id}>
                    <img src={social.name} alt="MDN"/>
                  </div>
                )
              })
            }
            
         

          </div>
        </div>
            <hr className='footer__hr'/>
    </footer>
    
  )
}
