import { connect } from 'react-redux';
import { addProduct } from "../../../Redux/NavbarReducer";
import AccessoriesModel from './AccessoriesModel';
import { AddModelToSpec } from "../../../Redux/SpecificationReducer";
import { API } from "../../../api/api";
import { withRouter } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";
import { SetAccessoriesModels, SetAccessoriesModel } from "../../../Redux/AccessoriesModelReducer";
import { setAccessoriesTypes } from "../../../Redux/MainPageReducer";
import React from "react";

class AccessoriesModelContainer extends React.Component {

  
  componentDidMount() {
  debugger
    console.log('ComponentDidMount')
      API.getAccessoriesTypes().then((response) => {
        this.props.SetAccessoriesModels(response, true);
        console.log('ComponentDidMount - MODELS')
      });
    
      // API.getAccessoriesTypes().then(response => {
      //   this.props.setAccessoriesTypes(response, true);
      //   console.log('ComponentDidMount -TYPES')
      // });
    
    API.getAccessoriesModel(this.props.match.params.id).then(response => {
    
      this.props.SetAccessoriesModel(response, true);
      console.log('ComponentDidMount - MODEL')
      // console.log('Type - ',this.props.match.params.type, 'model - ',this.props.match.params.id)
      })
  }

  componentDidUpdate(prevProps) {
    // Популярный пример (не забудьте сравнить пропсы):
   
    if ((this.props.match.params.id !== prevProps.match.params.id)
      // || (this.props.match.params.type !== prevProps.match.params.type)
    )
    {

      API.getAccessoriesModel(this.props.match.params.id).then(response => {
     
        this.props.SetAccessoriesModel(response, true);
        console.log('ComponentDidUPDATE - MODEL')
        // console.log('Type - ',this.props.match.params.type, 'model - ',this.props.match.params.id)
      })
      
      API.getAccessoriesTypes().then((response) => {
        debugger
        this.props.SetAccessoriesModels(response, true);
        console.log('ComponentDidUPDATE - MODELS')
        console.log(response)
      });
    }
  }



  render() {
    
    if (this.props.isLoaded1 && this.props.isLoaded2) {
      console.log('ComponentRender')

      return <AccessoriesModel data={this.props} />;
      
    } else {
      
      console.log('PreloaderRender')
      return <Preloader />;

   
    }
  }
}

let mapStateToProps = (state) => {
debugger
  return {
    nav: state.navbar.SpecificationCount,
    spec: state.specification.accessories,
    isLoaded1: state.accessoriesModel.isLoaded1,
    isLoaded2: state.accessoriesModel.isLoaded2,
    models: state.accessoriesModel.accessoriesModels,
    fancoilTypes: state.MainPage.accessoriesTypes,
    currentModel: state.accessoriesModel.currentModel
  };
};

let AccessoriesWithUrlDataContainer = withRouter(AccessoriesModelContainer);

export default connect(mapStateToProps, { addProduct, AddModelToSpec, SetAccessoriesModels,SetAccessoriesModel, setAccessoriesTypes })(
  AccessoriesWithUrlDataContainer
);

