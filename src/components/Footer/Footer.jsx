import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import mail from '../../assets/img/mail.svg';
import phone from '../../assets/img/phone.svg';
import fb from '../../assets/img/fb.svg';
import inst from '../../assets/img/inst.svg';
import youtube from '../../assets/img/youtube.svg';

import map from '../../assets/img/map.svg';

let Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <ul className={styles.list_left}>
          <a className={styles.link} href="https://www.google.ru/maps/place/%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D1%8B%D0%B9+%D0%BF%D0%B5%D1%80.,+5+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+1,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+107023/@55.7844906,37.7076997,17z/data=!3m1!4b1!4m5!3m4!1s0x46b5357283153d21:0x5628d57482cafe!8m2!3d55.7844906!4d37.7098884">
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
              </img>carrier@dttermo.ru</li>
            </a>
        </ul>
        <ul className={styles.list_right}>

          <li className={styles.item}>
            <a href="https://www.facebook.com/dttermo" className={styles.social} alt="facebook">
              <img className={styles.icon}  src={fb} width="30" height="30" >
              </img>
            </a>
          </li>

          <li className={styles.item}>
          <a href="https://www.youtube.com/user/dttermo" className={styles.social} alt="youtube">
              <img className={styles.icon}  src={youtube} width="30" height="30" >
              </img>
            </a>
          </li>

          <li className={styles.item}>
          <a href="https://instagram.com/dttermo?igshid=1kh5wn65u0uq4" className={styles.social} alt="instagramm">
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