const DELETE_POSITION_FROM_SPEC = "DELETE_POSITION_FROM_SPEC";
const INCREMENT_POSITION_FROM_SPEC = "INCTREMENT_POSITION_FROM_SPEC";
const DECREMENT_POSITION_FROM_SPEC = "DECREMENT_POSITION_PROM_SPEC";
const CHANGE_QUANTITY = "CHANGE_QUANTITY";

let initialState = {

  fancoils: [
  { id: "1", art: "123", type: "Канальный", model: "32C1",quantity: '4' },
  { id: "2", art: "213", type: "Канальный", model: "32C1", quantity: "0983" },
  { id: "3", art: "122133", type: "Канальный", model: "32C1", quantity: "2" },
  { id: "4", art: "113", type: "Канальный", model: "32C1", quantity: "1" },
  ],

  accessories: [
    { id: "5", art: "123", type: "Пульт", model: "32C31",quantity: '4' },
    { id: "6", art: "213", type: "Индикатор", model: "321C1", quantity: "2" },
    { id: "7",art: "122133", type: "Дисплей", model: "32ыC1", quantity: "2" },
    { id: "8",art: "113", type: "Контроллер", model: "32Cч1", quantity: "1" },
    ],

}

const SpecificationReducer = (state = initialState, action) => {

  switch (action.type) {

    case DELETE_POSITION_FROM_SPEC:
      {
        let stateCopy = { ...state };
        if (stateCopy.fancoils === action.tableName) {
          stateCopy.fancoils.splice(action.position, 1);
 
        } else {
          stateCopy.accessories.splice(action.position, 1);
        }
        return stateCopy;
      }

      case INCREMENT_POSITION_FROM_SPEC:
        {
        let stateCopy = { ...state };
        console.log(stateCopy.fancoils[action.position].quantity);
        if (stateCopy.fancoils === action.tableName) {
          stateCopy.fancoils[action.position].quantity++;
        } else {
          stateCopy.accessories[action.position].quantity++;
         }
          return stateCopy;
      }
      
      case DECREMENT_POSITION_FROM_SPEC:
        {
          let stateCopy = { ...state };
          console.log(stateCopy.fancoils[action.position].quantity);
          if (stateCopy.fancoils === action.tableName) {
            stateCopy.fancoils[action.position].quantity--;
          } else {
            stateCopy.accessories[action.position].quantity--;
           }
            return stateCopy;
      }

    case CHANGE_QUANTITY:
      {
        let stateCopy = { ...state };
        if (stateCopy.fancoils === action.tableName) {
          stateCopy.fancoils[action.position].quantity = action.value;
        } else {
          stateCopy.accessories[action.position].quantity = action.value;
         }
        return stateCopy;
      }
      
      

    default:
   
        return state;
  }

}

export default SpecificationReducer;

export const DeletePositionFromSpec = ( position, tableName) => {
  return { type: DELETE_POSITION_FROM_SPEC, position, tableName }
};

export const IncrementPosition = ( position,tableName, quantity) => {
  return { type: INCREMENT_POSITION_FROM_SPEC, position, tableName, quantity }
};

export const DecrementPosition = ( position,tableName, quantity) => {
  return { type: DECREMENT_POSITION_FROM_SPEC, position , tableName, quantity}
};

export const ChangeQuantity = (position, tableName, value) => {
  return { type: CHANGE_QUANTITY, position, tableName, value}
}