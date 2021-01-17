const DELETE_POSITION_FROM_SPEC = "DELETE_POSITION_FROM_SPEC";
const INCREMENT_POSITION_FROM_SPEC = "INCTREMENT_POSITION_FROM_SPEC";
const DECREMENT_POSITION_FROM_SPEC = "DECREMENT_POSITION_PROM_SPEC";
const CHANGE_QUANTITY = "CHANGE_QUANTITY";
const ADD_MODEL_TO_SPEC = "ADD_MODEL_TO_SPEC";
const DELETE_ALL = "DELETE_ALL";

let initialState = {
  tableName: 'fancoilsTable',
  
  fancoils: [

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
        if (stateCopy.tableName === action.tableName) {
          stateCopy.fancoils.splice(action.position, 1);
 
        } else {
          stateCopy.accessories.splice(action.position, 1);
        }
        return stateCopy;
      }

    case DELETE_ALL:
      debugger
      {
        let stateCopy = {
          fancoils: [],
          accessories: []
        };

        return stateCopy;
      }

    case INCREMENT_POSITION_FROM_SPEC:
    debugger
        {
        let stateCopy = { ...state };

        if (stateCopy.tableName === action.tableName) {
          stateCopy.fancoils[action.position].quantity++;
        } else {
          stateCopy.accessories[action.position].quantity++;
         }
          return stateCopy;
      }
      
    case DECREMENT_POSITION_FROM_SPEC:
      debugger
        {
          let stateCopy = { ...state };
          // console.log(stateCopy.fancoils[action.position].quantity);
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
            return stateCopy;
      }

    case CHANGE_QUANTITY:
      {
        let stateCopy = { ...state };
        if (stateCopy.tableName === action.tableName) {
          stateCopy.fancoils[action.position].quantity = action.value;
        } else {
          stateCopy.accessories[action.position].quantity = action.value;
         }
        return stateCopy;
      }
    case ADD_MODEL_TO_SPEC: 
      {
        let stateCopy = { ...state };

        if (stateCopy.tableName === action.tableName) {

          if (stateCopy.fancoils.length === 0) {
            stateCopy.fancoils.push({ id: action.id, art: action.art, type: action.series, model: action.model, quantity: action.quantity });
          } else {

            for (let i = 0; i < stateCopy.fancoils.length; i++){
              if (stateCopy.fancoils[i].model === action.model) {

                stateCopy.fancoils[i].quantity++;
                return stateCopy;
                
              } else {
                continue
              }
              
            }

            for (let i = 0; i < stateCopy.fancoils.length; i++){
              if (stateCopy.fancoils[i].model !== action.model) {
                stateCopy.fancoils.push({ id: action.id, art: action.art, type: action.series, model: action.model, quantity: action.quantity });

                return stateCopy;
              } else {

                return stateCopy;
              }
              
            }


            // stateCopy.fancoils.map(element => {

            //   if (element.model === action.model) {
            //     debugger
            //     element.quantity++;
            //     return stateCopy;
            //   } else {
            //     stateCopy.fancoils.push({ id: action.id, art: action.art, type: action.series, model: action.model, quantity: action.quantity });
            //     return stateCopy;

            //   }
            // })

            
          }

          
        } else {
          stateCopy.accessories.map(element => {
            if (element.name === action.model) {
              stateCopy.accessories[element].quantity++;

            } else {
              stateCopy.accessories.push({ id: action.id, art: action.art, type: action.series, model: action.model, quantity: action.quantity });

            }
          })

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
  return { type: CHANGE_QUANTITY, position, tableName, value }
};

export const AddModelToSpec = (id, art, series, model, quantity, tableName) => {
  return { type: ADD_MODEL_TO_SPEC, id, art, series, model, quantity, tableName }
};

export const DeleteAll = () => {

  return { type: DELETE_ALL }
};