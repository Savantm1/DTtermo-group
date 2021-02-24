
const ADD_ITEM_TO_SPEC = "ADD_ITEM_TO_SPEC";
const DECREMENT_ITEM = " DECREMENT_ITEM";
const CHANGE_COUNT = " CHANGE_COUNT";
const DELETE_ITEM_FROM_SPEC = "DELETE_ITEM_FROM_SPEC";

let initialState = {

  SpecificationCount : 0

}

let copyLocalStorageCount = () => (window.localStorage.getItem('counter') == null ? initialState : JSON.parse(window.localStorage.getItem('counter'))) 

const NavbarReducer = (state = copyLocalStorageCount(), action) => {

  switch (action.type) {

    case ADD_ITEM_TO_SPEC:
      {

        let stateCopy = {...state };
        stateCopy.SpecificationCount++;
        window.localStorage.setItem("counter", JSON.stringify(stateCopy));
        return stateCopy;
      }
      case DECREMENT_ITEM:
        {
          let stateCopy = {...state };
          if(action.quantity > 1){
            stateCopy.SpecificationCount--;  
          }
          window.localStorage.setItem("counter", JSON.stringify(stateCopy));
          return stateCopy;
      }
    case CHANGE_COUNT: {

      let stateCopy = { ...state };
      stateCopy.SpecificationCount = stateCopy.SpecificationCount - Number(action.pervValue);
      stateCopy.SpecificationCount = stateCopy.SpecificationCount + Number(action.currValue);
      window.localStorage.setItem("counter", JSON.stringify(stateCopy));
      return stateCopy;
      }

    case DELETE_ITEM_FROM_SPEC: {
       
      let stateCopy = { ...state };
      stateCopy.SpecificationCount = stateCopy.SpecificationCount - action.quantity;
      window.localStorage.setItem("counter", JSON.stringify(stateCopy));
      return stateCopy;
    }

    default:
   
        return state;
  }
}
 
export const AddProduct = () => {
  return { type: ADD_ITEM_TO_SPEC }
};
export const DecrementProduct = ( quantity) => {
  return { type: DECREMENT_ITEM, quantity }
};
export const ChangeProduct = (pervValue,currValue) => {
  return { type: CHANGE_COUNT, pervValue, currValue }
};

export const DeletePositionFromSpecCounter = (quantity) => {
   
  return { type: DELETE_ITEM_FROM_SPEC, quantity}
};

export default NavbarReducer;