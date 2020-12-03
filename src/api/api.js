import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: "http://testcarrier.dttermo.com/api",
  // headers: {
  //   "API-KEY": "d0449bcb-423d-4e92-808e-977d758ae9ec"
  // }
})

export const API = {
  
  getUsers(name) {
    debugger;
   return instance.get(`/carrier`)
     .then(response => {
        console.log(response)
       return response;
      });
  }

}