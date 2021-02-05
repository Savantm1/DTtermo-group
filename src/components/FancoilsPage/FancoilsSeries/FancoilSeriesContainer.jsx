import { connect } from 'react-redux';
import { AddProduct } from '../../../Redux/NavbarReducer';
import FancoilSeries from './FancoilSeries';


let mapStateToProps = (state) => {

  return ({

    spec: state.navbar.SpecificationCount

  })
}

const FancoilSeriesContainer = connect(mapStateToProps, {AddProduct })(FancoilSeries);
export default FancoilSeriesContainer;