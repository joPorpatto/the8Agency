/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import { getForm, postForm } from '../services/publicService';
const API = process.env.REACT_APP_API_URL;

jest.mock('axios');

describe('getForm', () => {
  describe('when API GET  call is successful', () => {
    it('should return users list', async () => {
      const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Andrew' }
      ];
      axios.get.mockResolvedValueOnce(users);
      const result = await getForm();
      expect(axios.get).toHaveBeenCalledWith(API);
      expect(result).toEqual(users);
    });
  });

  describe('when API POST call is successful', () => {
    it('should return the same data sent ', async () => {
      const users =
        {
          name: 'Peter',
          surname: 'Parker',
          email: 'peter@gmail.com',
          country: 'Argentina',
          phone: '911',
          job: 'dev'
        }
      ;
      axios.post.mockResolvedValueOnce(users, {
        headers: { 'Content-type': 'application/json' }
      });
      const result = await postForm(users);
      expect(axios.post).toHaveBeenCalledWith(API, users, {
        headers: { 'Content-type': 'application/json' }
      });
      expect(result).toEqual(users);
    });
  });
});
