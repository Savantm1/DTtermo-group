import { connect } from "react-redux";
import { addProduct } from "../../../Redux/NavbarReducer";
import FancoilModel from "./FancoilModel";
import { SetFancoilModel } from "../../../Redux/ModelReducer";
import { setFancoilTypes } from "../../../Redux/MainPageReducer";
import { AddModelToSpec } from "../../../Redux/SpecificationReducer";
import Preloader from "../../Preloader/Preloader";
import React from "react";
import { API } from "../../../api/api";
import { withRouter } from "react-router-dom";

class FancoilModelContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)
  
    API.getFancoilModel(this.props.match.params.id).then((response) => {
      this.props.SetFancoilModel(response, true);
      
      API.getFancoilTypes().then(response => {
      this.props.setFancoilTypes(response, true);
    })
    });
  }

  render() {
    if (!this.props.isLoaded) {

      return <Preloader />;
    } else {

      return <FancoilModel data={this.props }/>;
    }
  }
}

let mapStateToProps = (state) => {
  return {
    nav: state.navbar.SpecificationCount,
    spec: state.specification.fancoils,
    isLoaded: state.fancoilModel.isLoaded,
    model: state.fancoilModel.fancoilModel,
    fancoilTypes: state.MainPage.fancoilTypes,
  };
};

let WithUrlDataContainerComponent = withRouter(FancoilModelContainer);

export default connect(mapStateToProps, { addProduct, AddModelToSpec, SetFancoilModel, setFancoilTypes })(
  WithUrlDataContainerComponent
);
