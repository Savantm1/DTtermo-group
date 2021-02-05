import { connect } from 'react-redux';
import { AddProduct } from "../../../Redux/NavbarReducer";
import AccessoriesSeries from './AccessoriesSeries';


let mapStateToProps = (state) => {
  
  return ({
    
    spec: state.navbar.SpecificationCount
  })
}

const AccessoriesSeriesContainer = connect(mapStateToProps, { AddProduct })(AccessoriesSeries);

export default AccessoriesSeriesContainer;