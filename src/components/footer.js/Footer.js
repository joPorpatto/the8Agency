import React from 'react'
import './footer.css';
import TWITTER from '../../assets/twitter.png';
import FACEBOOK from '../../assets/facebook.png';
import LINKEDIN from '../../assets/linkedin.png';
import YOUTUBE from '../../assets/youtube.png';
import INSTAGRAM from '../../assets/instagram.png';
import SNAPCHAT from '../../assets/snapchat.png'

const socialsList = [
  {link: "https://www.twitter.com",name: TWITTER, id:1},
  {link: "https://www.facebook.com",name: FACEBOOK, id:2},
  {link: "https://www.linkedin.com",name: LINKEDIN, id:3},
  {link: "https://www.youtube.com",name: YOUTUBE, id:4},
  {link: "https://www.instagram.com",name: INSTAGRAM, id:5},
  {link: "https://www.snapchat.com",name: SNAPCHAT, id:6},
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
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <img src={social.name} alt="MDN"/>
                    </a>
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
