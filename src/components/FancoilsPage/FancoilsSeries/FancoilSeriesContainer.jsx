import { connect } from 'react-redux';
import { addProduct } from '../../../Redux/NavbarReducer';
import FancoilSeries from './FancoilSeries';


let mapStateToProps = (state) => {

  return ({

    spec: state.navbar.SpecificationCount

  })
}

const FancoilSeriesContainer = connect(mapStateToProps, { addProduct })(FancoilSeries);
export default FancoilSeriesContainer;