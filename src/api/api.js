import * as axios from "axios";


const instance = axios.create({

  baseURL: "http://testcarrier.dttermo.com/api",
  // headers: {
  //   "API-KEY": "d0449bcb-423d-4e92-808e-977d758ae9ec"
  // }
})

export const API = {

  getFancoilTypes() {
    debugger
    return instance.get(`/fancoil`).then(response => {
      debugger
       return response.data.data;
      });
  },

  getAccessoriesTypes() {

    return instance.get(`/accessory`)
      .then(response => {
        console.log(response)

        return response.data.data;
       });
  },
  
  getFancoilModel() {

    return instance.get(`/fancoil_model`)
      .then(response => {
        return response.data.data;
       });
  },
  
  getOtherFancoilModels() {

    return instance.get(`/other_fancoil_model`)
      .then(response => {
        return response.data.data;
       });
  },
  
  getOtherFancoilTypes() {

    return instance.get(`/other_fancoil_types`)
      .then(response => {
        return response.data.data;
       });
  },

  getAccessoryModel() {

    return instance.get(`/accessory_model`)
      .then(response => {
        return response.data.data;
       });
   },
  
  getOtherAccessoryTypes() {

    return instance.get(`/other_accessory_types`)
      .then(response => {
        return response.data.data;
       });
  },
  
  getOtherAccessoryModels() {

    return instance.get(`/other_accessory_models`)
      .then(response => {
        return response.data.data;
       });
   },
  

}
