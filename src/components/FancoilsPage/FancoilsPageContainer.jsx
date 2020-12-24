import React from 'react';
import { connect } from 'react-redux';
import { API } from '../../api/api';
import Preloader from '../Preloader/Preloader';
import FancoilsPage from './FancoilsPage';
import { setFancoilTypes } from '../../Redux/MainPageReducer';

class FancoilsPageContainer extends React.Component {
  
  componentDidMount() {

    API.getFancoilTypes().then(response => {

      debugger
      this.props.setFancoilTypes(response, true);
    });
  };

  render() {

    if (!this.props.isLoaded ) {

      return (<Preloader/>)
      
    } else {

      return (<FancoilsPage data={this.props} />)

    };

  }

}

let mapStateToProps = (state) => {
  
  return {

    fancoilTypes: state.MainPage.fancoilTypes,
    isLoaded: state.MainPage.isLoaded
    
  }
};

export default connect(mapStateToProps, { setFancoilTypes })(FancoilsPageContainer);