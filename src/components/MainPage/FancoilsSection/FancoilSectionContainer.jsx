import { setFancoilTypes, changeTargetId } from "../../../Redux/MainPageReducer";
import { connect } from "react-redux";
import React from 'react';
import FancoilSection from "./FancoilSection";


class FancoilSectionContainer extends React.Component {

  render() {

      return (< FancoilSection data={this.props} changeTargetId={this.props.changeTargetId}/>)
    };
  }

let mapStateToProps = (state) => {
  return {
    fancoilTypes: state.MainPage.fancoilTypes,
    currentId: state.MainPage.currentId,
    currentLeft: state.MainPage.currentLeft
    
  }
}

export default connect(mapStateToProps, { setFancoilTypes })(FancoilSectionContainer);