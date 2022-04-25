import React from 'react'

import "./MovieModal.css"

export const Modal = ({setModalVisibility}) => {

        return (
          <div className='presentation' role="presentation">
              <div className= 'wrapper-modal'>
                  <div className='modal'>
                      <span 
                              onClick={()=>setModalVisibility(false)}
                              className='modal-close'
                      >       
                              <p >X</p>
                      </span>                                        
                      <div className='modal__content'>
                              <p className='modal__title'>Obrigado pelo seu interesse. 
                              </p>
                              <p className='modal__overview'>Entraremos em contato com você em breve no e-mail 
que você preencheu no formulário"</p>    
                      </div>
                    </div>
                  </div>
                        
                </div>
        )
}
