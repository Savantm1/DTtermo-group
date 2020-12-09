import React from "react";
import styles from "./AccessoryItem.module.scss";
import img from '../../assets/img/accessor.jpg';
import { NavLink } from "react-router-dom";

let AccessoryItem = (props) => {

  window.scrollTo(0,0);

  return (
    <NavLink className={styles.link} to="/accessories_models/id">
      <div className={styles.card}>
        <div className={styles.card__container}>
          <img className={styles.card__img} src={img} alt="img" />
          <div className={styles.desc_block}>
            <h4 className={styles.card__title}>{props.title}</h4>
            <p className={styles.card__description}>{props.desc}</p>
          </div>
        </div>
      </div>
    </NavLink>
  )
};

export default AccessoryItem;