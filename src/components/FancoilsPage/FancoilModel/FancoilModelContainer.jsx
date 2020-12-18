import { connect } from 'react-redux';
import { addProduct } from "../../../Redux/NavbarReducer";
import FancoilModel from './FancoilModel';
import { AddModelToSpec } from "../../../Redux/SpecificationReducer";

let mapStateToProps = (state) => {

  return ({
    nav: state.navbar.SpecificationCount,
    spec: state.specification.fancoils
  })
}

const FancoilModelContainer = connect(mapStateToProps, { addProduct, AddModelToSpec })(FancoilModel);

export default FancoilModelContainer;