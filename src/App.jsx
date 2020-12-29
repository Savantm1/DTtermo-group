import React from 'react';
import styles from'./App.module.scss';
import Footer from './components/Footer/Footer';
import SimpleReactLightbox from "simple-react-lightbox";
import { Route } from 'react-router-dom';
import About from "./components/About/About";
import Contacts from './components/Contacts/Contacts';
import FancoilsPageContainer from './components/FancoilsPage/FancoilsPageContainer';
import AccessoriesPageContainer from './components/AccessoriesPage/AccessoriesPageContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import FancoilSeriesContainer from './components/FancoilsPage/FancoilsSeries/FancoilSeriesContainer';
import AccessoriesSeriesContainer from './components/AccessoriesPage/AccessoriesSeries/AccessoriesSeriesContainer';
import WithUrlDataContainerComponent from './components/FancoilsPage/FancoilModel/FancoilModelContainer';
import AccessoriesModelContainer from './components/AccessoriesPage/AccessoriesModel/AccessoriesModelContainer'
import Modal from './components/Specification/Modal/Modal';
import SpecificationContainer from './components/Specification/SpecificationContainer';
import MainPageContainer from './components/MainPage/MainPageContainer';
import ModalScheme from "./components/Contacts/ModalScheme/ModalScheme";

let App = (props) => {

  return (
    <div className={styles.app}>
      <SimpleReactLightbox>
        <HeaderContainer />
          <Route path="/" exact render={() => { return <MainPageContainer/>}} />
          <Route path="/about_us" render={() => { return <About /> }} />
          <Route path="/fancoils" exact render={() => { return <FancoilsPageContainer /> }} />
          <Route path="/accessories" exact render={() => { return <AccessoriesPageContainer/> }} />
          <Route path="/contacts" render={() => { return <Contacts /> }} />
          <Route path="/fancoils/:type?/models/:id?" render={() => { return <WithUrlDataContainerComponent /> }} />
        <Route path="/specification" render={() => { return <SpecificationContainer  /> }} />
          <Route path="/modal" render={() => { return <Modal /> }} />
          {/* <Route path="/series/id" render={() => { return <FancoilSeriesContainer /> }} /> */}
          {/* <Route path="/accessories_series/id" render={() => { return <AccessoriesSeriesContainer /> }} /> */}
        <Route path="/accessories/:type?/models/:id?" render={() => { return <AccessoriesModelContainer /> }} />
        <Route path="/scheme" render={() => { return <ModalScheme /> }} />
        <Footer />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
