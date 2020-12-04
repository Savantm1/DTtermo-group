import * as axios from "axios";


const instance = axios.create({

  baseURL: "http://testcarrier.dttermo.com/api",
  // headers: {
  //   "API-KEY": "d0449bcb-423d-4e92-808e-977d758ae9ec"
  // }
})

export const API = {

  getFancoilTypes() {

   return instance.get(`/fancoil`)
     .then(response => {
       return response.data.data;
      });
  }

}
