import { connect } from 'react-redux';
import { addProduct } from "../../../Redux/NavbarReducer";
import AccessoriesModel from './AccessoriesModel';
import { AddModelToSpec } from "../../../Redux/SpecificationReducer";

let mapStateToProps = (state) => {

  return ({
    nav: state.navbar.SpecificationCount
  })
}

const AccessoriesModelContainer = connect(mapStateToProps, { addProduct, AddModelToSpec })(AccessoriesModel);

export default AccessoriesModelContainer;