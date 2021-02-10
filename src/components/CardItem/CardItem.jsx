import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CardItem.module.scss";

let CardItem = (props) => {

  let isActive = "";
  if (props.active) {
    isActive += styles.card_active;
  }

  return (
    <NavLink className={styles.link_item}
      // onClick={props.getModel(props.key)}
      to={ props.id <=3 ? `/fancoils/${props.series}/models/${props.firstModelName}` : `/order`}>
      <div className={styles.card}>
        <div className={`${styles.card__container} ${isActive}`}>
          <img className={styles.card__img} src={props.image[0].path} alt="card_img" />
          <div className={styles.desc_container}>
            <h4 className={styles.card__class}>
              {props.title}
            </h4>
            <span className={styles.card__model}>{props.series}</span>
            <p className={styles.card__feature}>
              <span className={styles.feature__title}>Производительность:</span>
              <span className={styles.feature__desc}>9,50 кВт</span>
            </p>
            <p className={styles.card__feature}>
              <span className={styles.feature__title}>Расход воздуха:</span>
              <span className={styles.feature__desc}>1519 м3/ч</span>
            </p>
            <p className={styles.card__feature}>
              <span className={styles.feature__title}>Размеры:</span>
              <span className={styles.feature__desc}>1430*657*220 мм</span>
            </p>
            <p className={styles.card__feature}>
              <span className={styles.feature__title}>Наличие:</span>
              <span className={styles.feature__desc}>{props.available}</span>
            </p>
             
           {/* <NavLink className={styles.card__btn} to="#"> Подробнее</NavLink> */}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CardItem;
