import React from "react";
import styles from "./BeautySection.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import eurovent from '../../assets/img/eurovent.PNG';
import demo1 from '../../assets/img/SectionDemo/demo1.svg';
import demo2 from '../../assets/img/SectionDemo/boxes.svg';
import demo3 from '../../assets/img/SectionDemo/demo3.svg';
import demo4 from '../../assets/img/SectionDemo/demo4.svg';
import demo5 from '../../assets/img/SectionDemo/display.svg';
import demo6 from '../../assets/img/SectionDemo/demo6.svg';
import demo7 from '../../assets/img/SectionDemo/demo7.svg';
import demo8 from '../../assets/img/SectionDemo/demo8.svg';
import demo9 from '../../assets/img/SectionDemo/demo9.svg';
import demo10 from '../../assets/img/SectionDemo/demo10.svg';
import demo11 from '../../assets/img/SectionDemo/demo11.svg';
import demo12 from '../../assets/img/SectionDemo/demo12.svg';
import demo13 from '../../assets/img/SectionDemo/demo13.svg';
import demo14 from '../../assets/img/SectionDemo/demo14.svg';
import image4 from '../../assets/img/SectionDemo/image4.jpg';
import carrier from '.././../assets/img/carrier_fancoil1.png';
import { Link, scroll } from "react-scroll";

let BeautySection = (props) => {

  

  return (
    <ScrollAnimation animateIn="fadeIn" delay="20" animateOnce="true" className={styles.container}>
      <div className={styles.container}>
        <div className={styles.row}>
          <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
            <div className={styles.mini_block}>
              <img
                src={demo1}
                alt=""
              />
              <p>Лёгкий монтаж и сервис</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
            <div className={`${styles.mini_block} ${styles.mini_sklad}`}>
              <img
                src={demo2}
                alt=""
              />
              <p> В наличии на складе </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInY"  animateOnce="true" animateOut="flipOutY">
            <div className={styles.long_block}>
              <div className={styles.mini_block}>
                <img
                  src={demo3}
                  alt=""
                />
                <p>
                  Охлаждение до <span>80 кWt</span>
                </p>
              </div>
              <div className={styles.mini_block}>
                <img
                  src={demo4}
                  alt=""
                />
                <p>
                  Нагрев дo <br /> <span>90 кW</span>
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
            <Link to="accessories" smooth={true} offset={-80} duration={500}>
              <div className={`${styles.mini_block} ${styles.mini_green} ${styles.mini_link}`} >
                <img
                  src={demo5}
                  alt=""
                />
                <p>Широкий выбор аксессуаров</p>
              </div>
            </Link>
          </ScrollAnimation>
        </div>
        <div className={styles.row}>
          <div className={styles.mini_col}>
            <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
              <div className={styles.mini_block}>
                <img
                  src={demo6}
                  alt=""
                />
                <p> Возможность вертикальной и горизонтальной установки</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
              <div className={styles.mini_block}>
                <img
                  src={demo7}
                  alt="eco"
                />
                <p>
                  <span>ECO</span>friendly
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className={styles.main_block}>
            <img className={styles.mark_img} src={carrier} alt="carrier" />
            <img src={image4} alt="fancoil" />
            <p>Канальные фанкойлы</p>
          </div>



          <div className={styles.mini_col}>
            
            <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
              <div className={styles.mini_block}>
                <img
                  src={demo8}
                  alt=""
                />
                <p>Одни из самых тихих на рынке</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
              <div className={styles.mini_block}>
                <img
                  src={demo9}
                  alt=""
                />
                <p>2х/3х</p>
                <p>Клапаный</p>
              </div>
            </ScrollAnimation>
          </div>
          <div className={styles.mini_col}>
          <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
            <div className={styles.mini_block}>
              <img
                src={demo10}
                alt=""
              />
              <p>
                Толщина всего <span>215 мм</span>
              </p>
            </div>
          </ScrollAnimation>

            <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
              <div className={styles.mini_block}>
                <img
                  src={demo11}
                  alt=""
                />
                <p>
                  <span>3</span> <br/>года гарантии
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className={styles.row}>
          <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
          <div className={styles.mini_block}>
              <img
                src={demo12}
                alt=""
              />
              <p>Лёгкая смена стороны подключения</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
            <div className={styles.mini_block}>
              <img
                src={demo13}
                alt=""
              />
              <p>Высокая надежность</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInY" animateOnce="true"animateOut="flipOutY">
              <div className={`${styles.mini_block} ${styles.cert_block}`}>
                <img
                  src={eurovent}
                  alt=""
                />
                <p>Сертификат Евровент</p>
              </div>
            </ScrollAnimation>


          <ScrollAnimation animateIn="flipInY" animateOnce="true" animateOut="flipOutY">
            <div className={styles.mini_block}>
              <img
                src={demo14}
                alt=""
              />
              <p>Европейское производство</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default BeautySection;
