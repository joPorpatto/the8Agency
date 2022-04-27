import React, { useState } from 'react';
import './form.css';
import 'animate.css';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Modal } from './modal/Modal';
import { CountryDropdown } from 'react-country-region-selector';
import { postForm } from '../../../services/publicService';
import { Spinner } from '../../../helpers/spinner/Spinner';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const FormMain = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required('Por favor ingrese un nombre')
      .min(2, 'Mínimo dos caracteres'),
    surname: Yup.string()
      .required('Por favor ingrese un apellido')
      .min(2, 'Mínimo dos caracteres'),
    email: Yup.string()
      .email('email Invalido')
      .required('Por favor ingrese un email'),
    telephone: Yup.string()
      .required('Por favor ingrese un número')
      .matches(phoneRegExp, 'Ingrese un número válido'),
    job: Yup.string()
      .required('Por favor ingrese un puesto de trabajo')
      .min(3, 'Mínimo dos caracteres')
      .max(15, 'Máximo quince caracteres '),
    country: Yup.string()
      .required('Por favor seleccione un país')
  });

  return (
    <>
    <Formik
            className='section__form'
            initialValues={{ name: '', surname: '', email: '', country: '', telephone: '', job: '' }}
            validationSchema={SignupSchema}
            onSubmit= { async (values, action) => {
              setLoading(true);
              const resp = await postForm(values);
              if (resp.data) {
                setStatus(true);
              } else {
                setStatus(false);
              }
              setModalVisibility(true);
              setLoading(false);
              action.resetForm();
            }}

        >
          {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

             <div className='form'>
              <label className='form_title header__container animate__animated animate__flip animate__delay-2s'>¡Inscríbete y reserva tu lugar ahora!</label>

              <Form onSubmit={handleSubmit}>
                 <div>
                  <label className='lable__title' htmlFor="name">Nombre</label>

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
                  <label className='lable__title' htmlFor="surname">Apellido</label>
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
                  <label className='lable__title' htmlFor="email">Correo electrónico de trabajo</label>
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
                  <label className='lable__title' htmlFor="country">País</label>
                <div className='field countryDropDown'>
                    <CountryDropdown
                      name='country'
                      id="country"
                      value={values.country}
                      onChange={(_, e) => {
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                     />

                      <span></span>
                </div>
                  {touched.country && errors.country && <p className="error">{errors.country}</p> }
                </div>

                 <div>
                  <label className='lable__title' htmlFor="telephone">Número de teléfono</label>
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
                  <label className='lable__title' htmlFor="job">Puesto de trabajo</label>
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
  );
};
