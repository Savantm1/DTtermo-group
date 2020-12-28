
const SET_FANCOIL_MODELS = "SET_FANCOIL_MODELS";
const SET_FANCOIL_MODEL = "SET_FANCOIL_MODEL";

let initialState = {
  fancoilModels: {
   
  },
 isLoaded: false
}

const ModelReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_FANCOIL_MODELS:
      {
       
        let stateCopy = {
          ...state,
          fancoilModels: action.fancoilModels,
          decryption : action.fancoilModels.decryption,
          isLoaded: action.isLoaded
        };

        return stateCopy;
      }

      case SET_FANCOIL_MODEL:
      {
        
        let stateCopy = {
          ...state,
          currentModel: action.fancoilModel,
          decryption : action.fancoilModel.decryption,
          isLoaded: action.isLoaded
        };
 
        return stateCopy;
      }

    default:
      return state;
  }
};
export default ModelReducer;

export const SetFancoilModels = (fancoilModels,isLoaded) => {

  return { type: SET_FANCOIL_MODELS,fancoilModels,isLoaded }
};

export const SetFancoilModel = (fancoilModel,isLoaded) => {

  return { type: SET_FANCOIL_MODEL,fancoilModel,isLoaded }
};
