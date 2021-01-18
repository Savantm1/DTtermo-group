import React from 'react';
import { connect } from 'react-redux';
import { API } from '../../api/api';
import Preloader from '../Preloader/Preloader';
import AccessoriesPage from './AccessoriesPage';
import { setAccessoriesTypes } from '../../Redux/MainPageReducer';

class AccessoriesPageContainer extends React.Component {
  
  componentDidMount() {

    API.getAccessoriesTypes().then(response => {

      
      this.props.setAccessoriesTypes(response, true);
    });
  };

  render() {

    if (!this.props.isLoaded ) {

      return (<Preloader/>)
      
    } else {

      return (<AccessoriesPage data={this.props} />)

    };

  }

}

let mapStateToProps = (state) => {
  
  return {

    AccessoriesTypes: state.MainPage.AccessoriesTypes,
    isLoaded: state.MainPage.isLoaded
    
  }
};

export default connect(mapStateToProps, { setAccessoriesTypes })(AccessoriesPageContainer);