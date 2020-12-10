import React from "react";
import styles from "./ModalScheme.module.scss";
import closes from "../../../assets/img/close.svg";
import scheme from "../../../assets/img/warehouse_route.jpg";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";

const ModalScheme = (props) => (
  <Popup
    trigger={<span className={styles.scheme_link}>Cхема проезда</span>}
    nested
    modal
  >
    {(close) => (<>

        <div>
          <div className={styles.modal}>
            <div className={styles.modal_dialog}>
              <div className={styles.header}>
                <h3 className={styles.title}>
                  Схема проезда на склад DTtermo group
                </h3>
                <img
                  src={closes}
                  className={styles.close}
                  onClick={close}
                  alt="close"
                />
              </div>
              <div className={styles.content}>
                <a
                  className={styles.btn}
                  href="https://dttermo.ru/files/downloads/file_ru/warehouse_route.pdf"
                >
                  Скачать
                </a>
                <img
                  src={scheme}
                  className={styles.scheme}
                  alt="Схема проезда"
                />

                {/* <button className={styles.btn}>Закрыть</button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="actions">
          <button
            className="button"
            onClick={() => {
              close();
            }}
          >
            close modal
          </button>
        </div>
        
      </>
    )}
  </Popup>
);
// return (

//   <div className={styles.modal}>
//   <div className={styles.modal_dialog}>
//     <div className={styles.header}>
//         <h3 className={styles.title}>Схема проезда на склад DTtermo group</h3>
//         <NavLink to="/contacts">
//           <img src={close} className={styles.close} alt="close" />
//           </NavLink>
//     </div>
//     <div className={styles.content}>
//       <a className={styles.btn} href="https://dttermo.ru/files/downloads/file_ru/warehouse_route.pdf">Скачать</a>
//         <img src={scheme} className={styles.scheme} alt="Схема проезда" />

//       {/* <button className={styles.btn}>Закрыть</button> */}
//     </div>
//   </div>
// </div>
// )
// }

export default ModalScheme;
