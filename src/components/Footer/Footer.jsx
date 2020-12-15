import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import mail from '../../assets/img/mail.svg';
import phone from '../../assets/img/phone.svg';
import fb from '../../assets/img/fb.svg';
import inst from '../../assets/img/inst.svg';
import youtube from '../../assets/img/youtube.svg';
// import vk from '../../assets/img/vk.svg';
import map from '../../assets/img/map.svg';

let Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <ul className={styles.list_left}>
          <a className={styles.link} href="#">
            <li className={styles.item}>
              <object className={styles.icon} type="image/svg+xml" data={map} width="25" height="25" >
              </object>
              107023 Москва Медовый переулок, д. 5, стр. 1</li>
          </a>
          <a className={styles.link} href="tel:84957772399">
            <li className={styles.item}>
              
            <object className={styles.icon} type="image/svg+xml" data={phone} width="25" height="25" >
            </object>
            +7 (495) 777-23-99</li>
          </a>
          <a className={styles.link} href="mailto:carrier@dttermo.ru">
          <li className={styles.item}>
            <img className={styles.icon} type="image" src={mail} width="25" height="25" >
              </img>info@dttermo.ru</li>
            </a>
        </ul>
        <ul className={styles.list_right}>

          <li className={styles.item}>
            <a href="#" className={styles.social} alt="facebook">
              <img className={styles.icon}  src={fb} width="30" height="30" >
              </img>
            </a>
          </li>

          <li className={styles.item}>
          <a href="#" className={styles.social} alt="youtube">
              <img className={styles.icon}  src={youtube} width="30" height="30" >
              </img>
            </a>
          </li>

          <li className={styles.item}>
          <a href="#" className={styles.social} alt="instagramm">
              <img className={styles.icon}  src={inst} width="30" height="30" >
              </img>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
    
  )
};

export default Footer;