import { connect } from "react-redux";
import { AddProduct } from "../../../Redux/NavbarReducer";
import AccessoriesModel from "./AccessoriesModel";
import { AddModelToSpec } from "../../../Redux/SpecificationReducer";
// import { API } from "../../../api/api";
import { withRouter } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";
import { setAccessoriesThunkCreator } from "../../../Redux/AccessoriesModelReducer";
import { getTypesThunkCreator } from "../../../Redux/MainPageReducer";
import React from "react";

class AccessoriesModelContainer extends React.Component {
  componentDidMount() {
    this.props.getTypesThunkCreator();
    this.props.setAccessoriesThunkCreator(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.setAccessoriesThunkCreator(this.props.match.params.id);
      this.props.getTypesThunkCreator();
    }
  }

  render() {
    if (this.props.isLoaded1 && this.props.isLoaded2) {
      return <AccessoriesModel data={this.props} />;
    } else {
      return <Preloader />;
    }
  }
}

let mapStateToProps = (state) => {

  return {
    nav: state.navbar.SpecificationCount,
    spec: state.specification.accessories,
    isLoaded1: state.accessoriesModel.isLoaded1,
    isLoaded2: state.accessoriesModel.isLoaded2,
    models: state.accessoriesModel.accessoriesModels,
    fancoilTypes: state.MainPage.accessoriesTypes,
    currentModel: state.accessoriesModel.currentModel,
  };
};

let AccessoriesWithUrlDataContainer = withRouter(AccessoriesModelContainer);

export default connect(mapStateToProps, {
  AddProduct,
  AddModelToSpec,
  getTypesThunkCreator,
  setAccessoriesThunkCreator,
})(AccessoriesWithUrlDataContainer);
