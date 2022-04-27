/* eslint-disable no-undef */

/* eslint-disable jest/valid-expect */

/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-duplicates */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { fireEvent, getByTestId, render, screen, waitFor, within } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { FormMain } from '../components/principal/form/FormMain';

describe('FormMain', () => {
  it('should show the data', () => {
    render(<FormMain/>);
    expect(getName()).toBeInTheDocument();
    expect(getSurname()).toBeInTheDocument();
    expect(getEmail()).toBeInTheDocument();
    expect(getSelectCountry()).toBeInTheDocument();
    expect(getPhone()).toBeInTheDocument();
    expect(getJob()).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /inscríbete/i })).toBeInTheDocument();
  });

  it('Empty fields show error', async () => {
     render(<FormMain />);
      fireEvent.click(screen.getByRole('button', { name: /inscríbete/i }));
        await waitFor(() => {
          expect(screen.getByText(/por favor ingrese un nombre/i));
          expect(screen.getByText(/por favor ingrese un apellido/i));
          expect(screen.getByText(/por favor ingrese un correo/i));
          expect(screen.getByText(/por favor seleccione un país/i));
          expect(screen.getByText(/por favor ingrese un número de teléfono/i));
          expect(screen.getByText(/por favor ingrese un puesto de trabajo/i));    
        });
  });

   it('submit button disappears when user managed to form', async () => {
    const onSubmit = jest.fn();
    render(<FormMain onSubmit={onSubmit} />);
  
    user.type(getName(), 'john');
    user.type(getSurname(), 'Stone');
    user.type(getEmail(), 'john.Stone@gmail.com');
    fireEvent.click(screen.getByRole('option', { name: /argentina/i }));
    user.type(getJob(), 'dev');
    user.type(getPhone(), '+5492612535952');
    
    await waitFor(() => {
      fireEvent.change(getName(), { target: { value: 'john' } });
      fireEvent.change(getName(), { target: { value: 'Stone' } });
      fireEvent.change(getEmail(), { target: { value: 'john.Stone@gmail.com' } });    
      fireEvent.change(screen.getByRole('option', { name: /argentina/i }), { target: { value: 'argentina' } });
      fireEvent.change(getJob(), { target: { value: 'dev' } });
      fireEvent.change(getPhone(), { target: { value: '5492612535952' } });
    });
    expect(screen.getByRole('button', { name: /inscríbete/i })).not.toBeDisabled();
  });
});

function getName () {
  return screen.getByRole('textbox', { name: /nombre/i });
};
function getSurname () {
  return screen.getByRole('textbox', { name: /apellido/i });
};
function getEmail () {
  return screen.getByRole('textbox', { name: /correo electrónico de trabajo/i });
};
function getSelectCountry () {
  return screen.getByRole('combobox', { name: /país/i });  
}
function selectCountry (countrySelected) {
  const country = getSelectCountry();
  user.selectOptions(
    country, 
    within(country).getByRole('option', { name: /argentina/i }));
};
function getPhone () {
  return screen.getByRole('spinbutton', { name: /número de teléfono/i });
};
function getJob () {
  return screen.getByRole('textbox', { name: /puesto de trabajo/i });
};
