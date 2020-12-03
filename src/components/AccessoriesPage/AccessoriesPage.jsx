import React from 'react';
import styles from "./AccessoriesPage.module.scss";
import Form from "../Form/Form";
import AccessoryItem from '../AccessoryItem/AcessoryItem';


let AccessoriesPage = (props) => {

  window.scrollTo(0,0);


  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Аксессуары для фанкойлов</h2>
      <div className={styles.accessories_block}>
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
      </div>

      <Form/>
    </div>
  )
}

export default AccessoriesPage;