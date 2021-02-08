import React from "react";
import styles from "./Specification.module.scss";
import cogoToast from "cogo-toast";
import delete_icon from "../../assets/img/delete.svg";
import minus from "../../assets/img/minus.svg";
import plus from "../../assets/img/plus.svg";
import { NavLink } from "react-router-dom";
import FancoilRow from "./FancoilRow/FancoilRow";
import AccessoriesRow from "./AccessoriesRow/AccessoriesRow";
import Form from "../Form/Form";
import { Helmet } from "react-helmet";

let TableName = (props) => {
  return (
    <div className={styles.table_block}>
      <p className={styles.table_title}>{props.title}</p>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.param}>Артикул </div>
          <div className={styles.param}>Тип </div>
          <div className={styles.param}>Модель</div>
          <div className={styles.param}>Количество</div>
          <div className={styles.param}></div>
        </div>
        {props.list}
      </div>
    </div>
  );
};

let EmptySpec = (props) => {
  return (
    <div className={styles.empty_spec}>
        <p className={styles.spec_text}> Спецификация пустая. <br/> Пожалуйста, перейдите в раздел <br/>
         <NavLink className={styles.link} to="/fancoils">Оборудование</NavLink> или  <NavLink className={styles.link} to="/accessories">Аксессуары</NavLink></p>
    </div>
  )
}

let Specification = (props) => {
  debugger;
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
        AddProduct={props.AddProduct}
        DecrementProduct={props.DecrementProduct}
        ChangeProduct={props.ChangeProduct}
        DeletePositionFromSpecCounter={props.DeletePositionFromSpecCounter}
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
          AddProduct={props.AddProduct}
          DecrementProduct={props.DecrementProduct}
          ChangeProduct={props.ChangeProduct}
          DeletePositionFromSpecCounter={props.DeletePositionFromSpecCounter}
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
    
          {props.spec.fancoils.length === 0 ? null : (
            <TableName title={"Фанкойлы"}  list={FancoilElements}/>
          )}

          {props.spec.accessories.length === 0 ? null : (
            <TableName title={"Аксессуары"}  list={AccessoriesElements}/>
          )}

          {props.spec.fancoils.length === 0 && props.spec.accessories.length === 0 ? <EmptySpec/> : null}

      <Form tablesData={props.spec} DeleteAll={props.DeleteAll} />
    </div>
  );
};

export default Specification;
