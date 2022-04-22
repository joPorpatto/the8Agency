import React from 'react'
import './form.css';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";



export const FormMain = () => {

  const SignupSchema = Yup.object().shape({

        username: Yup.string()
            .required("Username required")
            .min(6, "Username is too short"),

        email: Yup.string()
            .email('email Invalido')
            .required('Requerido'),

        password: Yup.string()
            .required('Requerido')
            .min(6, '6 caracteres como mínimo')
            .matches(/^(?=.*[@$!%*#?&])/, '1 caracter especial requerido')
            .matches(/(?=.*\d)/, 'al menos 1 numero requerido')
            .matches(/(?=\w*[a-z])/, 'al menos 1 letra requerida'),

        password2: Yup.string()    
            .required('Requerido')
            .min(6, '6 caracteres como mínimo')
            .matches(/^(?=.*[@$!%*#?&])/, '1 caracter especial requerido')
            .matches(/(?=.*\d)/, 'al menos 1 numero requerido')
            .matches(/(?=\w*[a-z])/, 'al menos 1 letra requerida')
            .oneOf([Yup.ref('password'),null], 'Password must match')

    })
  return (

    // <Formik
    //         className='section__form'
    //         initialValues={{username:"", email:"", password:"" ,password2:""}}
    //         validationSchema={SignupSchema}            
    //         onSubmit= {(values,actions) =>{              
               
    //         }}
        
    //     >
    //       {formik =>(

            



    //       )}



    // </Formik>
    <div className='form'>
      <label className='form_title'>¡Inscríbete y reserva tu lugar ahora!</label>
      <form >
          <p>Nombre</p>
          <input type="text" className="field"/> <br/>
           <p>Apellido</p>
          <input type="text" className="field"/> <br/>

          <p>Correo electrónico del trabajo</p>
          <input type="email" className="field"/> <br/>

          <p>País</p>
          <select className='field'/>   <br/>

          <p>Número de teléfono</p>
          <input type="text" className="field"/> <br/>
          <p>Puesto de trabajo</p>
          <input type="text" className="field"/> <br/>

          <p className="center-content">
            <input type="submit" className="btn btn-green" value="Enviar Datos"/>
          </p>

      </form>

    </div>
  )

}
