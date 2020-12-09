import { setAccessoriesTypes } from "../../../Redux/MainPageReducer";
import { connect } from "react-redux";
import React from 'react';
import AccessoriesSection from "./AccessoriesSection";


class AccessoriesSectionContainer extends React.Component {

  render() {

      return (< AccessoriesSection data={this.props} />)
    };
  }

let mapStateToProps = (state) => {

  return {
    accessoriesTypes: state.MainPage.accessoriesTypes
  }
}

export default connect(mapStateToProps, { setAccessoriesTypes })(AccessoriesSectionContainer);