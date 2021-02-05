import { connect } from 'react-redux';
import Specification from './Specification';
import { DeletePositionFromSpec, IncrementPosition, DecrementPosition, ChangeQuantity, DeleteAll } from "../../Redux/SpecificationReducer";
import { AddProduct, DecrementProduct,ChangeProduct, DeletePositionFromSpecCounter } from "../../Redux/NavbarReducer";

let mapStateToProps = (state) => {

  return {
    spec: state.specification
  }
}

const SpecificationContainer = connect(mapStateToProps,{
  DeletePositionFromSpec,IncrementPosition,DecrementPosition,
  ChangeQuantity,DeleteAll,AddProduct,
  DecrementProduct,ChangeProduct,DeletePositionFromSpecCounter})(Specification);

export default SpecificationContainer;