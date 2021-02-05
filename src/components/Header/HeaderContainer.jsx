import { connect } from 'react-redux';
import { AddProduct } from '../../Redux/NavbarReducer';
import Header from './Header';

let mapStateToProps = (state) => {

  return ({

    spec: state.navbar.SpecificationCount

  })
}



const HeaderContainer = connect(mapStateToProps, AddProduct)(Header);
export default HeaderContainer;