import React from "react";
import styles from "./Specification.module.scss";
import cogoToast from "cogo-toast";
import delete_icon from "../../assets/img/delete.svg";
import minus from "../../assets/img/minus.svg";
import plus from "../../assets/img/plus.svg";
import { NavLink } from 'react-router-dom';

let Specification = (props) => {
  let DeleteFromSpec = () => {
    props.DeleteProduct();
    cogoToast.success("Удалено из спецификации", {
      position: "top-right",
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Спецификация</h2>
      <div className={styles.table_block}>
        <p className={styles.table_title}>Фанкойлы</p>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.param}>Тип </div>
            <div className={styles.param}>Модель</div>
            <div className={styles.param}>Количество</div>
            <div className={styles.param}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.param}>Канальный</div>
            <div className={styles.param}>39С2</div>
            <div className={styles.param}>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={minus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
              </span>
              <span className={styles.number}>2</span>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={plus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
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
          <div className={styles.row}>
            <div className={styles.param}>Канальный</div>
            <div className={styles.param}>39С2</div>
            <div className={styles.param}>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={minus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
              </span>
              <span className={styles.number}>2</span>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={plus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
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
          
          <div className={styles.row}>
            <div className={styles.param}>Канальный</div>
            <div className={styles.param}>39С2</div>
            <div className={styles.param}>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={minus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
              </span>
              <span className={styles.number}>2</span>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={plus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
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
          
        </div>

        <p className={styles.table_title}>Аксессуары</p>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.param}>Тип </div>
            <div className={styles.param}>Модель</div>
            <div className={styles.param}>Количество</div>
            <div className={styles.param}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.param}>Канальный</div>
            <div className={styles.param}>39С2</div>
            <div className={styles.param}>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={minus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
              </span>
              <span className={styles.number}>2</span>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={plus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
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
          
          <div className={styles.row}>
            <div className={styles.param}>Канальный</div>
            <div className={styles.param}>39С2</div>
            <div className={styles.param}>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={minus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
              </span>
              <span className={styles.number}>2</span>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={plus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
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
          
          <div className={styles.row}>
            <div className={styles.param}>Канальный</div>
            <div className={styles.param}>39С2</div>
            <div className={styles.param}>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={minus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
              </span>
              <span className={styles.number}>2</span>
              <span className={styles.counter}>
                <object
                  className={styles.item_img}
                  data={plus}
                  width="20px"
                  height="20px"
                  type="image/svg+xml">
                </object>
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
          
        </div>
      </div>

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
          <textarea name="" id="" cols="30" rows="10" placeholder="Введите Ваше сообщение"></textarea>
        </div>
        <div className={styles.row}>
          <p className={styles.text}>Приватность:</p>

          <input type="checkbox" className={styles.checkbox} name="agree" id="checkbox" />
          <label for="checkbox">
          Я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных» *
          </label>
        </div>
          <NavLink to="/modal">
          <button className={styles.btn} type="submit">Отправить</button>
          </NavLink>
      </form>
    </div>
    </div>
  );
};

export default Specification;
