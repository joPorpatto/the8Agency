import React, { useState } from 'react'
import './form.css';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { IconContext } from "react-icons";
import { Modal } from './modal/Modal'





import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { postForm } from '../../../services/publicService';



const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const FormMain = () => {
  
  // const [country, setCountry] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false)
  
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
              const  resp =  await postForm(values)
              if (resp.data) {
                setModalVisibility(true)
              }
            }}
        
        >
          {( {values,errors,touched,handleSubmit,handleChange,handleBlur}) =>(

             <div className='form'>
              <label className='form_title'>¡Inscríbete y reserva tu lugar ahora!</label>

              <Form onSubmit={handleSubmit}>

                <p>Nombre</p>
                <div className='field'>
                  <Field
                      type="text" 
                      name="name"
                      autoComplete="off"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}                 
                  />
                  <span></span>
                </div>
                  {touched.name && errors.name && <p className="error">{errors.name}</p> }

                  <p>Surname</p>
                <div className='field'>
                  <Field
                      type="text" 
                      name="surname"
                      autoComplete="off"
                      value={values.surname}
                      onChange={handleChange}
                      onBlur={handleBlur}                 
                  />
                  <span></span>
                </div>
                  {touched.surname && errors.surname && <p className="error">{errors.surname}</p> }

                  <p>Correo electrónico de trabajo</p>
                <div className='field'>
                  <Field
                      type="email" 
                      name="email"
                      autoComplete="off"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}                 
                  />
                  <span></span>
                </div>
                  {touched.email && errors.email && <p className="error">{errors.email}</p> }

                  <p>País</p>
                <div className='field countryDropDown'>
                    <CountryDropdown
                      name='country'
                      value={values.country}
                      onChange={(_,e) => {
                        handleChange(e)
                      }}
                      onBlur={handleBlur} 
                     />           

                      <span></span>
                </div>
                  {touched.country && errors.country && <p className="error">{errors.country}</p> }      

                 
                  <p>Número de teléfono</p>
                <div className='field'>
                  <Field
                      type="number" 
                      name="telephone"
                      autoComplete="off"
                      value={values.telephone}
                      onChange={handleChange}
                      onBlur={handleBlur}                 
                  />
                  <span></span>
                </div>
                  {touched.telephone && errors.telephone && <p className="error">{errors.telephone}</p> }

                   <p>Puesto de trabajo</p>
                <div className='field'>
                  <Field
                      type="text" 
                      name="job"
                      autoComplete="off"
                      value={values.job}
                      onChange={handleChange}
                      onBlur={handleBlur}      
                           
                  />
                  <span></span>
                </div>
                  {touched.job && errors.job && <p className="error">{errors.job}</p> }

              
                  <p className="center-content">
                    <button type='submit'> 
                        <span>Inscríbete</span>
                        <IconContext.Provider value={{ size:30}}>
                          <BsFillArrowRightCircleFill className='svg'/>
                        </IconContext.Provider>                       
                    </button>
                  </p>

              </Form>

            </div>





)}




    </Formik>
{(modalVisibility) && <Modal setModalVisibility={setModalVisibility}/>}


</>
)

}




//  <p>Correo electrónico del trabajo</p>
//                   <input type="email" className="field"/> <br/>         

//                   <p>Número de teléfono</p>
//                   <input type="text" className="field"/> <br/>
//                   <p>Puesto de trabajo</p>
//                   <input type="text" className="field"/> <br/>

{/* <p>País</p>
          <select className='field'/>   <br/> */}
