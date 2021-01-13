import React from 'react';
// import logo from '../../assets/img/carrier_fancoil.png';
// import fancoil from "../../assets/img/fancoil_main.png";
import styles from "./FancoilsPage.module.scss";
// import FancoilSectionContainer from "../MainPage/FancoilsSection/FancoilSectionContainer";
import FancoilSection from '../MainPage/FancoilsSection/FancoilSection';
import { Helmet } from 'react-helmet';

let FancoilsPage = (props) => {
debugger
  return (
    <div className={styles.content}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DTtermo group - Оборудование</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h2 className={styles.title}>Типы фанкойлов</h2>
      <FancoilSection data={props.data}/>

    </div>
  )
}

export default FancoilsPage;