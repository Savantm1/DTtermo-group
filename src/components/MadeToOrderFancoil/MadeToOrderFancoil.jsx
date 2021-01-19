import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./MadeToOrderFancoil.module.scss"


let MadeToOrderFancoil = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal_block}>
        <p className={styles.text}>Данный тип фанкойла возможно приобрести только под заказ. Пожалуйста, обратитесь в отдел продаж.</p>
        <NavLink to="/contacts">
          <button className={styles.btn}>Контакты</button>
        </NavLink>
      </div>
    </div>
  )
}

export default MadeToOrderFancoil;