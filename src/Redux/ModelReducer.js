
const SET_FANCOIL_MODEL = "SET_FANCOIL_MODEL";

let initialState = {
  fancoilModel: {
    fancoil:''
  },
 isLoaded: false
}

const ModelReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_FANCOIL_MODEL:
      {

        let stateCopy = {
          ...state,
          fancoilModel: action.fancoilModel,
          isLoaded: action.isLoaded
        };
        debugger
        return stateCopy;
      }

    default:
      return state;
  }
};
export default ModelReducer;

export const SetFancoilModel = (fancoilModel,isLoaded) => {

  return { type: SET_FANCOIL_MODEL,fancoilModel,isLoaded }
};
