import { API } from "../api/api";

const SET_ACCESSORIES_MODELS = "SET_ACCESSORIES_MODELS";
const SET_ACCESSORIES_MODEL = "SET_ACCESSORIES_MODEL";

let initialState = {
  accessoriesModels: {},
  isLoaded1: false,
  isLoaded2: false,

  currentModel: {
    id: "1",
  },

  currentType: "1",
};

const AccessoriesModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCESSORIES_MODELS: {
      debugger;
      let stateCopy = {
        ...state,
        accessoriesModels: action.accessoriesModels,
        decryption: action.accessoriesModels.decryption,
        isLoaded1: action.isLoaded,
      };

      return stateCopy;
    }

    case SET_ACCESSORIES_MODEL: {
      let stateCopy = {
        ...state,
        currentModel: action.accessoriesModel,
        decryption: action.accessoriesModel.decryption,
        isLoaded2: action.isLoaded,
      };
      console.log("currentModel", stateCopy.currentModel.id);
      return stateCopy;
    }

    default:
      return state;
  }
};
export default AccessoriesModelReducer;

export const SetAccessoriesModels = (accessoriesModels, isLoaded) => {
  return { type: SET_ACCESSORIES_MODELS, accessoriesModels, isLoaded };
};

export const SetAccessoriesModel = (accessoriesModel, isLoaded) => {
  return { type: SET_ACCESSORIES_MODEL, accessoriesModel, isLoaded };
};

export const setAccessoriesThunkCreator = (accessoryModel) => {
  return (dispatch) => {
    API.getAccessoriesTypes().then((response) => {
      dispatch(SetAccessoriesModels(response, true));
    });

    API.getAccessoriesModel(accessoryModel).then((response) => {
      dispatch(SetAccessoriesModel(response, true));
    });
  };
};
