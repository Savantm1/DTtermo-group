import { connect } from 'react-redux';
import { addProduct } from "../../../Redux/NavbarReducer";
import FancoilModel from './FancoilModel';


let mapStateToProps = (state) => {

  return ({
    nav: state.navbar.SpecificationCount
  })
}

const FancoilModelContainer = connect(mapStateToProps, { addProduct })(FancoilModel);

export default FancoilModelContainer;