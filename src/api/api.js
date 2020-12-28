import * as axios from "axios";


const instance = axios.create({

  baseURL: "http://testcarrier.dttermo.com/api",
  // headers: {
  //   "API-KEY": "d0449bcb-423d-4e92-808e-977d758ae9ec"
  // }
})

export const API = {

  getFancoilTypes() {

    return instance.get(`/fancoils`).then(response => {

       return response.data.data;
      });
  },

  getAccessoriesTypes() {

    return instance.get(`/accessories`)
      .then(response => {
        return response.data.data;
       });
  },
  
  getFancoilModels(TypeId) {

    return instance.get(`fancoils/${TypeId}/models`)
      .then(response => {
        return response.data.data;
       });
  },
  
  getFancoilModel(TypeId, modelId) {
    return instance.get(`fancoils/${TypeId}/models/${modelId}`)
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
