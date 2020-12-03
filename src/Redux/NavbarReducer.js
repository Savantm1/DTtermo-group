
const ADD_ITEM_TO_SPEC = "ADD_ITEM_TO_SPEC";
const DELETE_ITEM_FROM_SPEC = " DELETE_ITEM_FROM_SPEC";

let initialState = {

  SpecificationCount : 0
}

const NavbarReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_ITEM_TO_SPEC:
      {

        let stateCopy = {...state };
        stateCopy.SpecificationCount += 1;
  
        return stateCopy;
      }
      case DELETE_ITEM_FROM_SPEC:
        {
  
          let stateCopy = {...state };
          stateCopy.SpecificationCount -= 1;
    
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

export default NavbarReducer;