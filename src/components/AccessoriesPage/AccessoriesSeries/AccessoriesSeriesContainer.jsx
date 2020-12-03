import { connect } from 'react-redux';
import { addProduct } from "../../../Redux/NavbarReducer";
import AccessoriesSeries from './AccessoriesSeries';


let mapStateToProps = (state) => {
  
  return ({
    
    spec: state.navbar.SpecificationCount
  })
}

const AccessoriesSeriesContainer = connect(mapStateToProps, { addProduct })(AccessoriesSeries);

export default AccessoriesSeriesContainer;