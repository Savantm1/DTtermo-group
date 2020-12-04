import { setFancoilTypes } from "../../Redux/MainPageReducer";
import { connect } from "react-redux";
import React from 'react';
import { API } from "../../api/api.js";
import MainPage from "./MainPage";


class MainPageContainer extends React.Component {

  componentDidMount() {

    API.getFancoilTypes().then(response => {
      console.log(response);
      this.props.setFancoilTypes(response);
    })
  }

  render() {
    return (

      <MainPage data={this.props} />

    )
  }

 
}

let mapStateToProps = (state) => {
  return {
    fancoilTypes: state.MainPage.fancoilTypes,
    mainAccessoriesTypes: state.MainPage.mainAccessoriesTypes
  }
}

export default connect(mapStateToProps, { setFancoilTypes })(MainPageContainer);