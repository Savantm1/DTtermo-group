import React from "react";
import styles from "./Specification.module.scss";
import cogoToast from "cogo-toast";
import delete_icon from "../../assets/img/delete.svg";
import minus from "../../assets/img/minus.svg";
import plus from "../../assets/img/plus.svg";
import { NavLink } from "react-router-dom";
import FancoilRow from "./FancoilRow/FancoilRow";
import AccessoriesRow from "./AccessoriesRow/AccessoriesRow";
import { getElementError } from "@testing-library/react";
import Form from "../Form/Form";

let Specification = (props) => {

  
  let FancoilElements = props.spec.fancoils.map((fancoilElement, index) => {
    return (
      <FancoilRow
        key={fancoilElement.id}
        art={fancoilElement.art}
        type={fancoilElement.type}
        model={fancoilElement.model}
        kol={fancoilElement.quantity}
        index={index}
        tableName={props.spec.fancoils}
        DeletePositionFromSpec={props.DeletePositionFromSpec}
        IncrementPosition={props.IncrementPosition}
        DecrementPosition={props.DecrementPosition}
        ChangeQuantity={props.ChangeQuantity}
      />
    );
  });

  let AccessoriesElements = props.spec.accessories.map(
    (accessoriesElement, index) => {
      return (
        <AccessoriesRow
          key={accessoriesElement.id}
          art={accessoriesElement.art}
          type={accessoriesElement.type}
          model={accessoriesElement.model}
          kol={accessoriesElement.quantity}
          index={index}
          tableName={props.spec.accessories}
          DeletePositionFromSpec={props.DeletePositionFromSpec}
          IncrementPosition={props.IncrementPosition}
          DecrementPosition={props.DecrementPosition}
          ChangeQuantity={props.ChangeQuantity}
        />
      );
    }
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Спецификация</h2>
      <div className={styles.table_block}>
        <p className={styles.table_title}>Фанкойлы</p>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.param}>Артикул </div>
            <div className={styles.param}>Тип </div>
            <div className={styles.param}>Модель</div>
            <div className={styles.param}>Количество</div>
            <div className={styles.param}></div>
          </div>

          {FancoilElements}
        </div>

        <p className={styles.table_title}>Аксессуары</p>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.param}>Артикул </div>
            <div className={styles.param}>Тип </div>
            <div className={styles.param}>Модель</div>
            <div className={styles.param}>Количество</div>
            <div className={styles.param}></div>
          </div>

          {AccessoriesElements}
        </div>
      </div>
      <Form tablesData={props.spec}/>
    </div>
  );
};

export default Specification;
