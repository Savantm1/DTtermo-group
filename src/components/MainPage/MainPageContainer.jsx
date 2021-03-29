import {
  getTypesThunkCreator,
  changeTargetId,
} from "../../Redux/MainPageReducer";
import { connect } from "react-redux";
import React from "react";
import MainPage from "./MainPage";
import Preloader from "../Preloader/Preloader";

class MainPageContainer extends React.Component {
  componentDidMount() {
    this.props.getTypesThunkCreator();
    this.size = React.createRef();
  }

  render() {
    if (!this.props.isLoaded) {
      return <Preloader />;
    } else {
      return (
        <MainPage
          data={this.props}
          sliderSize={this.size}
          changeTargetId={this.props.changeTargetId}
        />
      );
    }
  }
}

let mapStateToProps = (state) => {
  return {
    fancoilTypes: state.MainPage.fancoilTypes,
    accessoriesTypes: state.MainPage.accessoriesTypes,
    isLoaded: state.MainPage.isLoaded,
  };
};

export default connect(mapStateToProps, {
  getTypesThunkCreator,
  changeTargetId,
})(MainPageContainer);
