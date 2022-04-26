import React, { useState } from 'react'
import './form.css';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { IconContext } from "react-icons";
import { Modal } from './modal/Modal'

import { CountryDropdown } from 'react-country-region-selector';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { postForm } from '../../../services/publicService';
import { Spinner } from '../../spinner/Spinner';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const FormMain = () => {
  
  const [modalVisibility, setModalVisibility] = useState(false)
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  
  const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .required("Nombre requerido")
            .min(2, "Mínimo dos caracteres"),
        surname: Yup.string()
              .required("Apellido requerido")
              .min(2, "Mínimo dos caracteres"),
        email: Yup.string()
            .email('email Invalido')
            .required('Requerido'),
          telephone: Yup.string()
            .required('número requerido') 
            .matches(phoneRegExp,'Ingrese un número válido'),
          job: Yup.string()
              .required("Puesto requerido")
              .min(3, "Mínimo dos caracteres")
              .max(15, "Máximo quince caracteres "),          
          country: Yup.string()
              .required("País requerido")      
      })
      
  return (
    <>
    <Formik
            className='section__form'
            initialValues={{name:"", surname:'', email:'',country:"", telephone:'', job:''}}
            validationSchema={SignupSchema}            
            onSubmit= { async(values,actions) =>{  
              setLoading(true)    
              const  resp =  await postForm(values)              
              if (resp.data) {
                setStatus(true)
              }else{
                setStatus(false)                
              }
              setModalVisibility(true)
              setLoading(false)
    
            }}
        
        >
          {( {values,errors,touched,handleSubmit,handleChange,handleBlur}) =>(

             <div className='form'>
              <label className='form_title'>¡Inscríbete y reserva tu lugar ahora!</label>

              <Form onSubmit={handleSubmit}>
                 <div>
                  <label for="name">Nombre</label>
                
                <div className='field'>
                  <Field
                      type="text" 
                      id="name"
                      name="name"
                      autoComplete="off"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}                 
                  />
                  <span></span>
                </div>
                  {touched.name && errors.name && <p className="error">{errors.name}</p> }
                </div>

                <div>
                  <label for="surname">Apellido</label>
                  <div className='field'>
                    <Field
                        type="text" 
                        id="surname"
                        name="surname"
                        autoComplete="off"
                        value={values.surname}
                        onChange={handleChange}
                        onBlur={handleBlur}                 
                    />
                    <span></span>
                  </div>
                    {touched.surname && errors.surname && <p className="error">{errors.surname}</p> }
                
                </div>  


                 <div>
                  <label for="email">Correo electrónico de trabajo</label>
                <div className='field'>
                  <Field
                      type="email" 
                      id="email"
                      name="email"
                      autoComplete="off"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}                 
                  />
                  <span></span>
                </div>
                  {touched.email && errors.email && <p className="error">{errors.email}</p> }
                </div>

                 <div>
                  <label for="country">País</label>
                <div className='field countryDropDown'>
                    <CountryDropdown
                      name='country'
                      id="country"
                      value={values.country}
                      onChange={(_,e) => {
                        handleChange(e)
                      }}
                      onBlur={handleBlur} 
                     />           

                      <span></span>
                </div>
                  {touched.country && errors.country && <p className="error">{errors.country}</p> }      
                </div>

                 <div>
                  <label for="telephone">Número de teléfono</label>
                <div className='field'>
                  <Field
                      type="number" 
                      id="telephone"
                      name="telephone"
                      autoComplete="off"
                      value={values.telephone}
                      onChange={handleChange}
                      onBlur={handleBlur}                 
                  />
                  <span></span>
                </div>
                  {touched.telephone && errors.telephone && <p className="error">{errors.telephone}</p> }
                </div>
                <div>
                  <label for="job">Puesto de trabajo</label>
                <div className='field'>
                  <Field
                      type="text" 
                      id="job"
                      name="job"
                      autoComplete="off"
                      value={values.job}
                      onChange={handleChange}
                      onBlur={handleBlur} 
                  />
                  <span></span>
                </div>
                  {touched.job && errors.job && <p className="error">{errors.job}</p> }
                </div>
              
                  <p className="center-content">
                    <button type='submit'> 
                        <span>Inscríbete</span>                       
                    </button>
                  </p>
                  {(loading) && <Spinner/>} 
              </Form>
            </div>
          )}
    </Formik>
    {(modalVisibility) && <Modal setModalVisibility={setModalVisibility} status={status}/>}
  </> 
)
}




