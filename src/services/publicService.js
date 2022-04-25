import axios from "axios";

export const postForm = async({name,surname,email,telephone,job,country}) =>{
  const  phone = telephone.toString()
  try {
    const resp = await axios.post('https://backend-t8a.herokuapp.com/api/form',
      {name,surname,email,phone,job,country} ,{
        headers:{ 'Content-type': 'application/json' }                                                  
      } )
    // console.log(resp)
    return resp
  } catch (error) {
    console.log(error)
  } 
}

export const getForm = async() =>{
  try {
    const resp = await axios.get('https://backend-t8a.herokuapp.com/api/form')                                
    // console.log(resp)
    return resp
  } catch (error) {
    console.log(error)
  } 
}
