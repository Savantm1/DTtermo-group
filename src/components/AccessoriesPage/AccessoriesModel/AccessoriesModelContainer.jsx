import { connect } from 'react-redux';
import { addProduct } from "../../../Redux/NavbarReducer";
import AccessoriesModel from './AccessoriesModel';


let mapStateToProps = (state) => {

  return ({
    nav: state.navbar.SpecificationCount
  })
}

const AccessoriesModelContainer = connect(mapStateToProps, { addProduct })(AccessoriesModel);

export default AccessoriesModelContainer;