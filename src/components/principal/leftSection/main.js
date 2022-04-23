import React from 'react';
import './leftSection.css';
import IMG from '../../../assets/img-aurnheimer.png';
import { Brands } from '../brands/Brands';


const especiaList = [
  {
  id:1,
  name:'José Perez',
  position:'Presidente',
  icon:IMG,  
  },
  {
  id:2,
  name:'José Perez',
  position:'Customer Service Senior Manager',
  icon:IMG,  
  },
  {
  id:3,
  name:'José Perez',
  position:'Senior Customer Success Consultant',
  icon:IMG,  
  },
  {
  id:4,  
  name:'José Perez',
  position:'Gerente de Consultoría de Soluciones',
  icon:IMG,  
  },
  
]

export const LeftSection = () => {
  return (
    <section>
      <div className='section___leftSection'>
        <Brands/> 
        <p>Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital. <br/><br/>Además podremos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus clientes, mientras se convertía en el gran Unicornio de LATAM. <br/><br/> Escucha de primera mano la voz de nuestros especialistas: </p>
        <div className='section__cards'>
          {
           especiaList.map(especialist => {
            return(
              <div className='section__card' key={especialist.id}>
                <img  src={IMG} alt='circle'  />
                <div className='card__info'>
                  <p className='info__name'>{especialist.name}</p>
                  <p className='info__position'>{especialist.position}</p>                 
                </div>                
              </div>
            )
           })
          }          
        </div>    
      <p>Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.<br/><br/> ¡Te esperamos!
      </p>
      <Brands/> 
      
      </div>

    
    </section>
  )
}
