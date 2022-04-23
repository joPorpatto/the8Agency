import React from 'react'
import './form.css';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const FormMain = () => {

  const SignupSchema = Yup.object().shape({

        nombre: Yup.string()
            .required("Nombre requerido")
            .min(2, "Mínimo dos caracteres"),

        apellido: Yup.string()
              .required("Apellido requerido")
              .min(2, "Mínimo dos caracteres"),

        email: Yup.string()
            .email('email Invalido')
            .required('Requerido'),

          numero: Yup.string()
            .required('número requerido') 
            .matches(phoneRegExp,'Ingrese un número válido'),

          puesto: Yup.string()
              .required("Puesto requerido")
              .min(3, "Mínimo dos caracteres")
              .max(15, "Máximo quince caracteres "),
        // password: Yup.string()
        //     .required('Requerido')
        //     .min(6, '6 caracteres como mínimo')
        //     .matches(/^(?=.*[@$!%*#?&])/, '1 caracter especial requerido')
        //     .matches(/(?=.*\d)/, 'al menos 1 numero requerido')
        //     .matches(/(?=\w*[a-z])/, 'al menos 1 letra requerida'),

        // password2: Yup.string()    
        //     .required('Requerido')
        //     .min(6, '6 caracteres como mínimo')
        //     .matches(/^(?=.*[@$!%*#?&])/, '1 caracter especial requerido')
        //     .matches(/(?=.*\d)/, 'al menos 1 numero requerido')
        //     .matches(/(?=\w*[a-z])/, 'al menos 1 letra requerida')
        //     .oneOf([Yup.ref('password'),null], 'Password must match')

    })
  return (

    <Formik
            className='section__form'
            initialValues={{nombre:"", apellido:'', email:'', numero:'', puesto:'' }}
            validationSchema={SignupSchema}            
            onSubmit= {(values,actions) =>{              
              console.log(values)
               
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
                      name="nombre"
                      autoComplete="off"
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}                 
                  />
                  <span></span>
                </div>
                  {touched.nombre && errors.nombre && <p className="error">{errors.nombre}</p> }

                  <p>Apellido</p>
                <div className='field'>
                  <Field
                      type="text" 
                      name="apellido"
                      autoComplete="off"
                      value={values.apellido}
                      onChange={handleChange}
                      onBlur={handleBlur}                 
                  />
                  <span></span>
                </div>
                  {touched.apellido && errors.apellido && <p className="error">{errors.apellido}</p> }

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
                 
                  <p>Número de teléfono</p>
                <div className='field'>
                  <Field
                      type="number" 
                      name="numero"
                      autoComplete="off"
                      value={values.numero}
                      onChange={handleChange}
                      onBlur={handleBlur}                 
                  />
                  <span></span>
                </div>
                  {touched.numero && errors.numero && <p className="error">{errors.numero}</p> }

                   <p>Puesto de trabajo</p>
                <div className='field'>
                  <Field
                      type="text" 
                      name="puesto"
                      autoComplete="off"
                      value={values.puesto}
                      onChange={handleChange}
                      onBlur={handleBlur}      
                           
                  />
                  <span></span>
                </div>
                  {touched.puesto && errors.puesto && <p className="error">{errors.puesto}</p> }


                  <p className="center-content">
                    <button> Inscríbete
                      
                    </button>
                  </p>

              </Form>

            </div>

            



          )}



    </Formik>


   
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