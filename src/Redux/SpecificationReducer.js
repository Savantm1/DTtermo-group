const DELETE_POSITION_FROM_SPEC = "DELETE_POSITION_FROM_SPEC";
const INCREMENT_POSITION_FROM_SPEC = "INCTREMENT_POSITION_FROM_SPEC";
const DECREMENT_POSITION_FROM_SPEC = "DECREMENT_POSITION_PROM_SPEC";
const CHANGE_QUANTITY = "CHANGE_QUANTITY";
const ADD_MODEL_TO_SPEC = "ADD_MODEL_TO_SPEC";
const DELETE_ALL = "DELETE_ALL";

let initialState =  {
  tableName: "fancoilsTable",

  fancoils: [],

  accessories: [],
};

let copyLocalStorage = () => (window.localStorage.getItem('initialState') === null ? initialState : JSON.parse(window.localStorage.getItem('initialState')));

const SpecificationReducer = (state = copyLocalStorage(), action) => {
  switch (action.type) {

    case DELETE_POSITION_FROM_SPEC: {
      let stateCopy = { ...state };
      if (stateCopy.tableName === action.tableName) {
        stateCopy.fancoils.splice(action.position, 1);
      } else {
        stateCopy.accessories.splice(action.position, 1);
      }
      localStorage.setItem("initialState", JSON.stringify(stateCopy));

      return stateCopy;
    }

    case DELETE_ALL: {
      let stateCopy = {
        fancoils: [],
        accessories: [],
      };

      return stateCopy;
    }

    case INCREMENT_POSITION_FROM_SPEC: {
      let stateCopy = { ...state };

      if (stateCopy.tableName === action.tableName) {
        stateCopy.fancoils[action.position].quantity++;
      } else {
        stateCopy.accessories[action.position].quantity++;
      }
      localStorage.setItem("initialState", JSON.stringify(stateCopy));
      return stateCopy;
    }

    case DECREMENT_POSITION_FROM_SPEC: {
      let stateCopy = { ...state };
      if (stateCopy.tableName === action.tableName) {
        if (stateCopy.fancoils[action.position].quantity <= 1) {
          stateCopy.fancoils[action.position].quantity = 1;
        } else {
          stateCopy.fancoils[action.position].quantity--;
        }
      } else {
        if (stateCopy.accessories[action.position].quantity <= 1) {
          stateCopy.accessories[action.position].quantity = 1;
        } else {
          stateCopy.accessories[action.position].quantity--;
        }
      }
      localStorage.setItem("initialState", JSON.stringify(stateCopy));
      return stateCopy;
    }

    case CHANGE_QUANTITY: {
      let stateCopy = { ...state };
      if (stateCopy.tableName === action.tableName) {
        stateCopy.fancoils[action.position].quantity = action.value;
      } else {
        stateCopy.accessories[action.position].quantity = action.value;
      }
      localStorage.setItem("initialState", JSON.stringify(stateCopy));
      return stateCopy;
    }
    case ADD_MODEL_TO_SPEC: {
      let stateCopy = { ...state };
      if (action.tableName === "fancoilsTable") {
        if (stateCopy.fancoils.length === 0) {
          stateCopy.fancoils.push({
            id: action.id,
            art: action.art,
            type: action.series,
            model: action.model,
            quantity: action.quantity,
          });
        } else {
          let indexModel = stateCopy.fancoils.findIndex(
            (item) => item.model === action.model
          );
          if (indexModel === -1) {
            stateCopy.fancoils.push({
              id: action.id,
              art: action.art,
              type: action.series,
              model: action.model,
              quantity: action.quantity,
            });
          } else {
            stateCopy.fancoils[indexModel].quantity++;
          }
        }
      } else if (action.tableName === "accessoriesTable") {
        if (stateCopy.accessories.length === 0) {
          stateCopy.accessories.push({
            id: action.id,
            art: action.art,
            type: action.series,
            model: action.model,
            quantity: action.quantity,
          });
        } else {
          let indexModel = stateCopy.accessories.findIndex(
            (item) => item.model === action.model
          );
          if (indexModel === -1) {
            stateCopy.accessories.push({
              id: action.id,
              art: action.art,
              type: action.series,
              model: action.model,
              quantity: action.quantity,
            });
          } else {
            stateCopy.accessories[indexModel].quantity++;
          }
        }
      }
      localStorage.setItem( "initialState", JSON.stringify(stateCopy));
      return stateCopy;
    }

    default:
      return state;
  }
};

export default SpecificationReducer;

export const DeletePositionFromSpec = (position, tableName) => {
  return { type: DELETE_POSITION_FROM_SPEC, position, tableName };
};

export const IncrementPosition = (position, tableName, quantity) => {
  return { type: INCREMENT_POSITION_FROM_SPEC, position, tableName, quantity };
};

export const DecrementPosition = (position, tableName, quantity) => {
  return { type: DECREMENT_POSITION_FROM_SPEC, position, tableName, quantity };
};

export const ChangeQuantity = (position, tableName, value) => {
  return { type: CHANGE_QUANTITY, position, tableName, value };
};

export const AddModelToSpec = (id, art, series, model, quantity, tableName) => {
  return {
    type: ADD_MODEL_TO_SPEC,
    id,
    art,
    series,
    model,
    quantity,
    tableName,
  };
};

export const DeleteAll = () => {
  return { type: DELETE_ALL };
};
