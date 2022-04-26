import React, { useEffect, useState } from 'react';
import { ArrowBack } from '../helpers/ArrowBack';
import { getForm } from '../services/publicService';
import './dates.css';

export const Dates = () => {
  const [usuarios, setUsuarios] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const request = await getForm();
      console.log(request);
      setUsuarios(request.data.usuarios);
      return request;
    };
    fetchData();
  }, []);

  return (
    <div className=' container__dates'>
      <ArrowBack/>
      <b>Registro de usuarios inscriptos por fomulario:<br/><br/></b>
      {usuarios.length > 0
        ? usuarios.map((user, i) => {
          return (
          <div key={i}>
            <p>name: {user.name}</p>
            <p>surname: {user.surname}</p>
            <p>email: {user.email}</p>
            <p>country: {user.country}</p>
            <p>phone: {user.phone}</p>
            <p>job: {user.job}</p>
            <br/>
          </div>
          );
        })
        : <div>No hay usuarios registrados</div>

    }

    </div>
  );
};
