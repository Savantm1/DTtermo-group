import React from 'react';
import styles from "./AccessoriesPage.module.scss";
import Form from "../Form/Form";
import AccessoryItem from '../AccessoryItem/AcessoryItem';
import AccessoriesSectionContainer from '../MainPage/AcessoriesSection/AccessoriesSectionContainer';
import { Helmet } from 'react-helmet';


let AccessoriesPage = (props) => {

  window.scrollTo(0,0);


  return (
    <div className={styles.content}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DTtermo group - Аксессуары</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className={styles.title}>Аксессуары для фанкойлов</h2>

        <AccessoriesSectionContainer data={props.data} />

      {/* <Form/> */}
    </div>
  )
}

export default AccessoriesPage;