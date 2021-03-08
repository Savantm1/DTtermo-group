import { connect } from "react-redux";
import { AddProduct } from "../../../Redux/NavbarReducer";
import FancoilModel from "./FancoilModel";
import { setFancoilModelThunkCreator } from "../../../Redux/ModelReducer";
import { getTypesThunkCreator } from "../../../Redux/MainPageReducer";
import { AddModelToSpec } from "../../../Redux/SpecificationReducer";
import Preloader from "../../Preloader/Preloader";
import React from "react";
// import { API } from "../../../api/api";
import { withRouter } from "react-router-dom";

class FancoilModelContainer extends React.Component {
  componentDidMount() {
    this.props.setFancoilModelThunkCreator(
      this.props.match.params.type,
      this.props.match.params.id
    );

    this.props.getTypesThunkCreator();
    //   API.getFancoilModels(this.props.match.params.type).then((response) => {
    //     this.props.SetFancoilModels(response, true);
    //   });

    //   API.getFancoilTypes().then(response => {
    //     this.props.setFancoilTypes(response);
    //   });

    //  API.getFancoilModel(this.props.match.params.type, this.props.match.params.id).then(response => {
    //   this.props.SetFancoilModel(response, true);
    //   })
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.id !== prevProps.match.params.id ||
      this.props.match.params.type !== prevProps.match.params.type
    ) {
      this.props.setFancoilModelThunkCreator(
        this.props.match.params.type,
        this.props.match.params.id
      );
    }
  }

  render() {
    if (this.props.isLoaded1 && this.props.isLoaded2) {
      return <FancoilModel data={this.props} />;
    } else {
      return <Preloader />;
    }
  }
}

let mapStateToProps = (state) => {
  return {
    nav: state.navbar.SpecificationCount,
    spec: state.specification.fancoils,
    isLoaded1: state.fancoilModel.isLoaded1,
    isLoaded2: state.fancoilModel.isLoaded2,
    models: state.fancoilModel.fancoilModels,
    fancoilTypes: state.MainPage.fancoilTypes,
    currentModel: state.fancoilModel.currentModel,
  };
};

let WithUrlDataContainerComponent = withRouter(FancoilModelContainer);

export default connect(mapStateToProps, {
  AddProduct,
  AddModelToSpec,
  getTypesThunkCreator,
  setFancoilModelThunkCreator,
})(WithUrlDataContainerComponent);
