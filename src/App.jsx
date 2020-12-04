import React from 'react';
import styles from'./App.module.scss';
import Footer from './components/Footer/Footer';
import SimpleReactLightbox from "simple-react-lightbox";
import { Route } from 'react-router-dom';
import About from "./components/About/About";
import Contacts from './components/Contacts/Contacts';
import FancoilsPage from './components/FancoilsPage/FancoilsPage';
import AccessoriesPage from './components/AccessoriesPage/AccessoriesPage';
import HeaderContainer from './components/Header/HeaderContainer';
import FancoilSeriesContainer from './components/FancoilsPage/FancoilsSeries/FancoilSeriesContainer';
import AccessoriesSeriesContainer from './components/AccessoriesPage/AccessoriesSeries/AccessoriesSeriesContainer';
import FancoilModelContainer from './components/FancoilsPage/FancoilModel/FancoilModelContainer';
import AccessoriesModelContainer from './components/AccessoriesPage/AccessoriesModel/AccessoriesModelContainer'
import Modal from './components/Specification/Modal/Modal';
import SpecificationContainer from './components/Specification/SpecificationContainer';
import MainPageContainer from './components/MainPage/MainPageContainer';


let App = (props) => {

  return (
    <div className={styles.app}>
      <SimpleReactLightbox>
        <HeaderContainer />
          <Route path="/" exact render={() => { return <MainPageContainer/>}} />
          <Route path="/about_us" render={() => { return <About /> }} />
          <Route path="/fancoils" render={() => { return <FancoilsPage /> }} />
          <Route path="/accessories" render={() => { return <AccessoriesPage/> }} />
          <Route path="/contacts" render={() => { return <Contacts /> }} />
          <Route path="/models/id" render={() => { return <FancoilModelContainer /> }} />
        <Route path="/specification" render={() => { return <SpecificationContainer  /> }} />
          <Route path="/modal" render={() => { return <Modal /> }} />
          <Route path="/series/id" render={() => { return <FancoilSeriesContainer /> }} />
          <Route path="/accessories_series/id" render={() => { return <AccessoriesSeriesContainer /> }} />
          <Route path="/accessories_models/id" render={() => { return <AccessoriesModelContainer /> }} />
        <Footer />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
