import React from 'react';
import 'animate.css';
import './MovieModal.css';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';

export const Modal = ({ setModalVisibility, status = false }) => {
  console.log(status);
  return (
          <div className='presentation ' role="presentation">
              <div className= 'wrapper-modal'>
                  <div className='modal '>
                      <span
                              onClick={() => setModalVisibility(false)}
                              className='modal-close'
                      >
                              <p >
                                <IconContext.Provider value={{ size: 20 }}>
                                  <GrClose/>
                                </IconContext.Provider>
                              </p>
                      </span>
                      <div className='modal__content'>
                                {(status)
                                  ? <>
                                <p className='modal__title'>Obrigado pelo seu interesse.</p>
                                <p className='modal__overview'>Entraremos em contato com você em breve no e-mail que você preencheu no formulário</p>
                              </>
                                  : <>
                                 <p className='modal__title animate__animated animate__bounce'>Error</p>
                                <p className='modal__overview'>Intente con otro correo</p>

                              </>
                              }

                      </div>
                    </div>
                  </div>

                </div>
  );
};
