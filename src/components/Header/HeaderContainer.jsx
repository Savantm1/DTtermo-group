import { connect } from 'react-redux';
import { addProduct } from '../../Redux/NavbarReducer';
import Header from './Header';

let mapStateToProps = (state) => {

  return ({

    spec: state.navbar.SpecificationCount

  })
}



const HeaderContainer = connect(mapStateToProps, addProduct)(Header);
export default HeaderContainer;