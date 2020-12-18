import { connect } from 'react-redux';
import Specification from './Specification';
import { DeletePositionFromSpec,IncrementPosition,DecrementPosition,ChangeQuantity } from "../../Redux/SpecificationReducer";

let mapStateToProps = (state) => {

  return {
    spec: state.specification
  }
}

const SpecificationContainer = connect(mapStateToProps,{DeletePositionFromSpec,IncrementPosition,DecrementPosition,ChangeQuantity})(Specification);

export default SpecificationContainer;