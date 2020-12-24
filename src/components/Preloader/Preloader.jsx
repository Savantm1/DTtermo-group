import React from 'react';
import styles from './Preloader.module.scss';
import preload from '../../assets/img/Preloader.gif';

let Preloader = (props) => {

  return (
    <div className={styles.container}>
      <img src={preload} alt="Загрузка"/>
    </div>
  )
}

export default Preloader;