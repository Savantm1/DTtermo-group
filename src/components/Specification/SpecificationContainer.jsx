import { connect } from 'react-redux';
import Specification from './Specification';

let mapStateToProps = (state) => {

  return {
    spec: state.specification
  }
}

const SpecificationContainer = connect(mapStateToProps)(Specification);

export default SpecificationContainer;