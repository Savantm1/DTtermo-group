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
  

  
  getAccessoriesModels(Type) {

    return instance.get(`accessories/${Type}`)
      
      .then(response => {
         
        return response.data.data;
       });
  },
  
  getAccessoriesModel(Type) {
    
    return instance.get(`accessories/${Type}`)
    .then(response => {
      return response.data.data;
     });
  },
 
  

  PostSpecification(data) {
    instance.post(`/feedback`,{data})
  }

}


