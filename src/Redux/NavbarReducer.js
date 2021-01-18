
const ADD_ITEM_TO_SPEC = "ADD_ITEM_TO_SPEC";
const DELETE_ITEM_FROM_SPEC = " DELETE_ITEM_FROM_SPEC";
const CHANGE_COUNT = " CHANGE_COUNT";
let initialState = {

  SpecificationCount : 0
}

const NavbarReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_ITEM_TO_SPEC:
      {

        let stateCopy = {...state };
        stateCopy.SpecificationCount++;
  
        return stateCopy;
      }
      case DELETE_ITEM_FROM_SPEC:
        {
  
          let stateCopy = {...state };
          stateCopy.SpecificationCount--;
    
          return stateCopy;
      }
    case CHANGE_COUNT: {
      debugger
      let stateCopy = { ...state };
      stateCopy.SpecificationCount = stateCopy.SpecificationCount - action.pervValue;
      stateCopy.SpecificationCount = stateCopy.SpecificationCount + action.currValue;
      return stateCopy;
      }

    default:
   
        return state;
  }

}
 
export const addProduct = () => {
  return { type: ADD_ITEM_TO_SPEC }
};
export const DeleteProduct = () => {
  return { type: DELETE_ITEM_FROM_SPEC }
};
export const ChangeProduct = (pervValue,currValue) => {
  return { type: CHANGE_COUNT, pervValue, currValue }
};

export default NavbarReducer;