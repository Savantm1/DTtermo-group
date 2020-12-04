import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import mail from '../../assets/img/mail.svg';
import phone from '../../assets/img/phone.svg';
import fb from '../../assets/img/fb.svg';
import inst from '../../assets/img/inst.svg';
import youtube from '../../assets/img/youtube.svg';
import vk from '../../assets/img/vk.svg';
import map from '../../assets/img/map.svg';

let Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <ul className={styles.list_left}>
          <li className={styles.item}>
            <object className={styles.icon} type="image/svg+xml" data={map} width="25" height="25" >
            </object>
            107023 Москва Медовый переулок, д. 5, стр. 1</li>
          <li className={styles.item}>
              
            <object className={styles.icon} type="image/svg+xml" data={phone} width="25" height="25" >
            </object>
            +7 (495) 777-23-99</li>
          <li className={styles.item}>
            <object className={styles.icon} type="image/svg+xml" data={mail} width="25" height="25" >
            </object>info@dttermo.ru</li>
        </ul>
        <ul className={styles.list_right}>

          <li className={styles.item}>
            <NavLink to="#" className={styles.social} alt="facebook">
              <object className={styles.icon} type="image/svg+xml" data={fb} width="30" height="30" >
              </object>
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink to="#" className={styles.social} alt="youtube">
              <object className={styles.icon} type="image/svg+xml" data={youtube} width="30" height="30" >
              </object>
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink to="#" className={styles.social} alt="instagram">
              <object className={styles.icon} type="image/svg+xml" data={inst} width="30" height="30" >
              </object>
            </NavLink>
          </li>
          
        </ul>
      </div>
    </div>
    
  )
};

export default Footer;