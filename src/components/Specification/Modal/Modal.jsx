
import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./Modal.module.scss"


let Modal = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal_block}>
        <p className={styles.text}>Спасибо за заказ</p>
        <NavLink to="/">
          <button className={styles.btn}>Закрыть</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Modal;