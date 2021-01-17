import { connect } from "react-redux";
import { addProduct } from "../../../Redux/NavbarReducer";
import FancoilModel from "./FancoilModel";
import { SetFancoilModels, SetFancoilModel } from "../../../Redux/ModelReducer";
import { setFancoilTypes } from "../../../Redux/MainPageReducer";
import { AddModelToSpec } from "../../../Redux/SpecificationReducer";
import Preloader from "../../Preloader/Preloader";
import React from "react";
import { API } from "../../../api/api";
import { withRouter } from "react-router-dom";

class FancoilModelContainer extends React.Component {

  
  componentDidMount() {
    debugger
    let propses = this.props;
    console.log('ComponentDidMount')
      API.getFancoilModels(this.props.match.params.type).then((response) => {
        this.props.SetFancoilModels(response, true);
        console.log('ComponentDidMount - MODELS')
      });
    
      API.getFancoilTypes().then(response => {
        this.props.setFancoilTypes(response);
        console.log('ComponentDidMount -TYPES')
      });
    
    API.getFancoilModel(this.props.match.params.type, this.props.match.params.id).then(response => {
      
      this.props.SetFancoilModel(response, true);

      })
  }

  componentDidUpdate(prevProps) {

    debugger
    if ((this.props.match.params.id !== prevProps.match.params.id) || (this.props.match.params.type !== prevProps.match.params.type)) {

      API.getFancoilModel(this.props.match.params.type, this.props.match.params.id).then(response => {
      
        this.props.SetFancoilModel(response, true);

      })
      
      API.getFancoilModels(this.props.match.params.type).then((response) => {
        debugger
        this.props.SetFancoilModels(response, true);

      });
    }
  }



  render() {
    if (this.props.isLoaded1 && this.props.isLoaded2) {
      console.log('ComponentRender')
      debugger
      return <FancoilModel data={this.props} />;
      
    } else {
    
      console.log('PreloaderRender')
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
    currentModel: state.fancoilModel.currentModel
  };
};

let WithUrlDataContainerComponent = withRouter(FancoilModelContainer);

export default connect(mapStateToProps, { addProduct, AddModelToSpec, SetFancoilModels,SetFancoilModel, setFancoilTypes })(
  WithUrlDataContainerComponent
);
