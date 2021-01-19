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
import { Helmet } from "react-helmet";

let Specification = (props) => {
debugger
  
  let FancoilElements = props.spec.fancoils.map((fancoilElement, index) => {
    return (
      <FancoilRow
        key={fancoilElement.id}
        art={fancoilElement.art}
        type={fancoilElement.type}
        model={fancoilElement.model}
        kol={fancoilElement.quantity}
        index={index}
        tableName={props.spec.tableName}
        DeletePositionFromSpec={props.DeletePositionFromSpec}
        IncrementPosition={props.IncrementPosition}
        DecrementPosition={props.DecrementPosition}
        ChangeQuantity={props.ChangeQuantity}
        addProduct={props.addProduct}
        DeleteProduct={props.DeleteProduct}
        ChangeProduct={props.ChangeProduct}
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
          addProduct={props.addProduct}
          DeleteProduct={props.DeleteProduct}
          ChangeProduct={props.ChangeProduct}
        />
      );
    }
  );

  return (
    <div className={styles.container}>

      <Helmet>
        <meta charSet="utf-8" />
        <title>DTtermo group - Спецификация</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
            <div className={styles.param}>Артикул</div>
            <div className={styles.param}>Тип </div>
            <div className={styles.param}>Модель</div>
            <div className={styles.param}>Количество</div>
            <div className={styles.param}></div>
          </div>

          {AccessoriesElements}
        </div>
      </div>
      <Form tablesData={props.spec} DeleteAll={props.DeleteAll}/>
    </div>
  );
};

export default Specification;
