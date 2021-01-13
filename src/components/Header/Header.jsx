import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import ToDoList from "../../assets/img/to-do-list.svg";
import Hamburger from "hamburger-react";

let Header = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.item_hide}`}>
          <NavLink className={styles.link} to="/">
            <img src={logo} className={styles.logo} alt="logo" />
          </NavLink>
        </li>
        <li className={`${styles.item} ${styles.item_hide}`}>
          <NavLink className={styles.link} to="/about_us">
            О компании
          </NavLink>
        </li>
        {/* <li className={styles.item}>
          <a className={styles.link} activeClassName={ styles.link_active} href="https://www.dttermo.ru/ru/%d0%be-%d0%bd%d0%b0%d1%81/obscaja-informacija.htm">О компании</a>
        </li> */}
        <li className={`${styles.item} ${styles.item_hide}`}>
          <NavLink
            className={styles.link}
            activeClassName={styles.link_active}
            to="/fancoils"
          >
            Оборудование
          </NavLink>
        </li>
        <li className={`${styles.item} ${styles.item_hide}`}>
          <NavLink
            className={styles.link}
            activeClassName={styles.link_active}
            to="/accessories"
          >
            Аксессуары
          </NavLink>
        </li>
        <li className={`${styles.item} ${styles.item_hide}`}>
          <NavLink
            className={styles.link}
            activeClassName={styles.link_active}
            to="/contacts"
          >
            Контакты
          </NavLink>
        </li>

        <li className={`${styles.item} ${styles.item_hide}`}>
          <NavLink
            to="/specification"
            className={styles.spec}
            alt="specification"
          >
            <div className={styles.count_container}>
              <span className={styles.count}>{props.spec}</span>
            </div>
            <object
              className={styles.icon}
              type="image/svg+xml"
              data={ToDoList}
              width="30"
              height="30"
            ></object>
            <div className={styles.shadow}></div>
          </NavLink>
        </li>
      </ul>

      <div className={styles.mobile_menu}>
        <nav className={styles.mobile_nav}>
          <ul className={styles.mobile_list_one}>
            <li className={styles.item}>
              <NavLink className={styles.link} to="/">
                <img src={logo} className={styles.logo} alt="logo" />
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/specification"
                className={styles.spec}
                alt="specification"
              >
                <div className={styles.count_container}>
                  <span className={styles.count}>{props.spec}</span>
                </div>
                <object
                  className={styles.icon}
                  type="image/svg+xml"
                  data={ToDoList}
                  width="30"
                  height="30"
                ></object>
                <div className={styles.shadow}></div>
              </NavLink>
            </li>
            <li className={styles.item}>
              <div className={styles.hamburger_container}>
                <Hamburger
                  id={styles.hamburger}
                  toggled={isOpen}
                  toggle={setOpen}
                  size={32}
                  direction="right"
                  color="#fff"
                />
              </div>
            </li>
          </ul>
        </nav>
        <ul className={styles.mobile_list_two}>
          <li className={`${styles.item} ${styles.item_hide}`}>
            <NavLink className={styles.link} to="/about_us">
              О компании
            </NavLink>
          </li>
          <li className={`${styles.item} ${styles.item_hide}`}>
            <NavLink
              className={styles.link}
              activeClassName={styles.link_active}
              to="/fancoils"
            >
              Оборудование
            </NavLink>
          </li>
          <li className={`${styles.item} ${styles.item_hide}`}>
            <NavLink
              className={styles.link}
              activeClassName={styles.link_active}
              to="/accessories"
            >
              Аксессуары
            </NavLink>
          </li>
          <li className={`${styles.item} ${styles.item_hide}`}>
            <NavLink
              className={styles.link}
              activeClassName={styles.link_active}
              to="/contacts"
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
