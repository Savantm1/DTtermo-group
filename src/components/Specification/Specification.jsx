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
{/* 
      <div className={styles.block}>
        <h1 className={styles.title}> Оформление заказа</h1>
        <form className={styles.form} method="POST" id="form">
          <div className={styles.row}>
            <input type="text" placeholder="Имя"></input>
          </div>
          <div className={styles.row}>
            <input type="text" placeholder="Email"></input>
          </div>
          <div className={styles.row}>
            <input type="text" placeholder="Телефон"></input>
          </div>
          <div className={styles.row}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Введите Ваше сообщение"
            ></textarea>
          </div>
          <div className={styles.row}>
            <p className={styles.text}>Приватность:</p>

            <input
              type="checkbox"
              className={styles.checkbox}
              name="agree"
              id="checkbox"
            />
            <label for="checkbox">
              Я даю свое согласие на обработку моих персональных данных, в
              соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О
              персональных данных» *
            </label>
          </div>
          <NavLink to="/modal">
            <button className={styles.btn} type="submit">
              Отправить
            </button>
          </NavLink>
        </form>
      </div> */}
      <Form/>
    </div>
  );
};

export default Specification;
