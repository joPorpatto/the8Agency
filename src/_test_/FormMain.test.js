/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, waitFor, within } from '@testing-library/react';
import React from 'react';
import user from '@testing-library/user-event';
import { FormMain } from '../components/principal/form/FormMain';


describe('FormMain', () => {
  const onSubmit = jest.fn();

  beforeEach(()=>{
    onSubmit.mockClear();
    render(<FormMain onSubmit={onsubmit}/>);
  })

  it('que pasa' , async() =>{
    user.type(getName(),'joel')
    user.type(getSurname(),'porpatto')
    user.type(getEmail(),'joel.porpatto@gmail.com')
    selectCountry("Argentina")
    user.type(getPhone(),'+5492612535952' )
    user.type(getJob(),'dev' )
    user.click(screen.getByRole('button', { name: /inscríbete/i}))


    await waitFor(()=>{
      expect(onSubmit).toHaveBeenCalledTimes(1)
      
    })
    
    expect(onSubmit).toHaveBeenCalledWith({lazy:true})

  })



});

function getName() {
  return screen.getByRole('textbox', {  name: /nombre/i})
};

function getSurname() {
  return screen.getByRole('textbox', {  name: /apellido/i})
};

function getEmail() {
  return screen.getByRole('textbox', {  name: /correo electrónico de trabajo/i})
};

function getSelectCountry() {
  return screen.getByRole('combobox', {name: /país/i});  
}

function selectCountry(countrySelected) {
  const country = getSelectCountry();
  user.selectOptions(country, within(country).getByRole('option',{name:countrySelected}))
};

function getPhone() {
  return screen.getByRole('spinbutton', { name: /número de teléfono/i})
};

function getJob() {
  return screen.getByRole('textbox', { name: /puesto de trabajo/i})
};



// screen.getByRole('textbox', {
  // name: /correo electrónico de trabajo/i
// })


// screen.getByRole('textbox', {
//   name: /surname/i
// })


// screen.getByRole('combobox', {
//   name: /país/i
// })


// screen.getByRole('spinbutton', {
//   name: /número de teléfono/i
// })

// screen.getByRole('textbox', {
//   name: /puesto de trabajo/i
// })


// screen.getByRole('button', {
//   name: /inscríbete/i
// })


   // name: 'joel',
      // surname: 'porpatto',
      // email: 'joel.porpatto@gmail.com',
      // country: 'Argentina',
      // phone: '+5492612535952',
      // job: 'dev',