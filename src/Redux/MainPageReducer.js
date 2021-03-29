import { API } from "../api/api";

const FANCOIL_TYPES = "FANCOIL_TYPES";
const ACCESSORIES_TYPES = "ACCESSORIES_TYPES";
const CHANGE_TARGET_ID = "CHANGE_TARGET_ID";

let initialState = {

  // currentId: 1,
  // currentType:1,
  currentLeft: 0,
  isLoaded: false,

  fancoilTypes: [

    
  ],

  accessoriesTypes: [

  ]
}


const MainPageReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case FANCOIL_TYPES:
      {
        let stateCopy = { ...state, fancoilTypes: action.fancoilTypes, isLoaded: action.isLoaded };
        return stateCopy;
      }

    case ACCESSORIES_TYPES:
      {
        let stateCopy = { ...state, accessoriesTypes: action.accessoriesTypes, isLoaded: action.isLoaded };

        return stateCopy;
       }

    case CHANGE_TARGET_ID:
      {
        let stateCopy = { ...state, currentId: action.currentId, currentLeft: action.currentLeft };
        return stateCopy;
      }
      
      default:
        return state;
  }
}

export const setFancoilTypes = (fancoilTypes,isLoaded) => {
  return { type: FANCOIL_TYPES, fancoilTypes, isLoaded }
};

export const setAccessoriesTypes = (accessoriesTypes,isLoaded) => {
  return { type: ACCESSORIES_TYPES, accessoriesTypes,isLoaded }
};

export const changeTargetId = (currentId, currentLeft) => {
  return { type: CHANGE_TARGET_ID, currentId, currentLeft }
};

export const getTypesThunkCreator = () => {
  debugger
 return (dispatch) => {
    API.getFancoilTypes().then(response => {
      dispatch(setFancoilTypes(response, true))
    });

    API.getAccessoriesTypes().then(response => {
      dispatch(setAccessoriesTypes(response, true))
    });
  }

} 

export default MainPageReducer;