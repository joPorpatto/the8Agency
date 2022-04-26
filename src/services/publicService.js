import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const postForm = async ({ name, surname, email, telephone, job, country }) => {
  const phone = telephone.toString();
  try {
    const resp = await axios.post(`${API}`,
      { name, surname, email, phone, job, country }, {
        headers: { 'Content-type': 'application/json' }
      });
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getForm = async () => {
  try {
    const resp = await axios.get(`${API}`);
    return resp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
