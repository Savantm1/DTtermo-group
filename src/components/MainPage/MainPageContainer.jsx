import { setFancoilTypes, setAccessoriesTypes, changeTargetId } from "../../Redux/MainPageReducer";
import { connect } from "react-redux";
import React from 'react';
import { API } from "../../api/api.js";
import MainPage from "./MainPage";


class MainPageContainer extends React.Component {

  componentDidMount() {
    debugger

    API.getFancoilTypes().then(response => {

      this.props.setFancoilTypes(response, true);
    });
    
    API.getAccessoriesTypes().then(response => {

      this.props.setAccessoriesTypes(response, true);

      });
  }
    
  render() {

    if (this.props.isLoaded === false) {
      debugger
      return (<div>Загрузка...</div>)
      
    } else {
      console.log(this.props.isLoaded)
      debugger
      return (<MainPage data={this.props} changeTargetId={this.props.changeTargetId} />)
      
    };

  }
 
}

let mapStateToProps = (state) => {
  
  return {
    fancoilTypes: state.MainPage.fancoilTypes,
    accessoriesTypes: state.MainPage.accessoriesTypes,
    isLoaded: state.MainPage.isLoaded
    
  }
}

export default connect(mapStateToProps, { setFancoilTypes, setAccessoriesTypes, changeTargetId })(MainPageContainer);