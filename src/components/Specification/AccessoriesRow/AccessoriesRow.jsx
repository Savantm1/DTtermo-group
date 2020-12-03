import React from 'react';
import styles from './AccessoriesRow.module.scss';
import cogoToast from "cogo-toast";
import delete_icon from "../../../assets/img/delete.svg";
import minus from "../../../assets/img/minus.svg";
import plus from "../../../assets/img/plus.svg";

let AccessoriesRow = (props) => {

  let DeleteFromSpec = () => {

    props.DeleteProduct();
    cogoToast.success("Удалено из спецификации", {
      position: "top-right",
    });
  };

  return (

    <div className={styles.row}>
      <div className={styles.param}>{props.art} </div>
      <div className={styles.param}>{props.type} </div>
      <div className={styles.param}>{props.model} </div>
      <div className={styles.param}>
        <span className={styles.counter}>
          <object
            className={styles.item_img}
            data={minus}
            width="20px"
            height="20px"
            type="image/svg+xml"
          ></object>
        </span>
          <span className={styles.number}>{props.kol}</span>
        <input type="text" className={styles.number_input}/>
        <span className={styles.counter}>
          <object
            className={styles.item_img}
            data={plus}
            width="20px"
            height="20px"
            type="image/svg+xml"
          ></object>
        </span>
      </div>
      <div className={styles.param}>
        <a className={styles.btn} onClick={DeleteFromSpec}>
          <img
            className={styles.delete_img}
            src={delete_icon}
            alt="удалить"
          />
        </a>
      </div>
    </div>
    
  )
}

export default AccessoriesRow;