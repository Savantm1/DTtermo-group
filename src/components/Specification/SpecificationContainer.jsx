import { connect } from 'react-redux';
import Specification from './Specification';
import { DeletePositionFromSpec, IncrementPosition, DecrementPosition, ChangeQuantity, DeleteAll } from "../../Redux/SpecificationReducer";
import { addProduct, DeleteProduct,ChangeProduct } from "../../Redux/NavbarReducer";

let mapStateToProps = (state) => {

  return {
    spec: state.specification
  }
}

const SpecificationContainer = connect(mapStateToProps,{DeletePositionFromSpec,IncrementPosition,DecrementPosition,ChangeQuantity,DeleteAll,addProduct,DeleteProduct,ChangeProduct})(Specification);

export default SpecificationContainer;