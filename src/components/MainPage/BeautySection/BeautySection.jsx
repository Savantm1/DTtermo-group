import React from "react";
import styles from "./BeautySection.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import eurovent from "../../../assets/img/SectionDemo/evrovent.png";
import demo1 from "../../../assets/img/SectionDemo/demo1.png";
import demo2 from "../../../assets/img/SectionDemo/demo2.png";
import demo3 from "../../../assets/img/SectionDemo/demo3.png";
import demo4 from "../../../assets/img/SectionDemo/demo4.png";
import demo5 from "../../../assets/img/SectionDemo/demo5.png";
import demo6 from "../../../assets/img/SectionDemo/demo6.png";
import demo7 from "../../../assets/img/SectionDemo/demo7.png";
import demo8 from "../../../assets/img/SectionDemo/demo8.png";
import demo9 from "../../../assets/img/SectionDemo/demo9.png";
import demo10 from "../../../assets/img/SectionDemo/demo10.svg";
import demo11 from "../../../assets/img/SectionDemo/demo11.svg";
import demo12 from "../../../assets/img/SectionDemo/demo12.svg";
import demo13 from "../../../assets/img/SectionDemo/demo13.svg";
import demo14 from "../../../assets/img/SectionDemo/demo14.png";
import image4 from "../../../assets/img/SectionDemo/image4.jpg";
import carrier from "../.././../assets/img/carrier_fancoil1.png";
import left from "../.././../assets/img/back.svg";
import right from "../.././../assets/img/next.svg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

let BeautySection = (props) => {
  debugger
  console.log(props.size)
  // let slide = React.createRef();
  let left_arrow = React.createRef();
  let right_arrow = React.createRef();
  let slider_list = React.createRef();
  console.log(slider_list)
  let min = -3420;
  let max = 0;
  let step = 855;
  let fancoilNumber = 1;
  let current = 0;
  let maxFancoilNumber = 5;
  let minFancoilNumber = 1;

  let rightArrowFunc = (e) => {
    console.log("number до изменения: ", fancoilNumber);
    if (current > min) {
      current -= step;
      slider_list.current.style.left = current + "px";
      fancoilNumber++;
    } else {
      current = max;
      console.log(props.current);
      slider_list.current.style.left = current + "px";
      fancoilNumber = minFancoilNumber;
    }

    props.changeTargetId(fancoilNumber, current);
    console.log("текущий шаг: ", current, "текущий айди: ", fancoilNumber);
  };

  let leftArrowFunc = (e) => {
    if (current < max) {
      current += step;
      console.log(current);
      slider_list.current.style.left = current + "px";
      fancoilNumber--;
    } else {
      current = min;
      console.log(current);
      slider_list.current.style.left = current + "px";
      fancoilNumber = maxFancoilNumber;
    }
    props.changeTargetId(fancoilNumber, current);
    console.log("текущий шаг: ", current, "текущий айди: ", fancoilNumber);
  };

  let slideElements = props.data.map((element) => {
   
    return (
      <li className={styles.list_item} key={element.id}>
        <NavLink className={styles.item_link} to={`/fancoils/${element.series}/models/${element.firstModelName}`}>
          <img className={styles.mark_img} src={carrier} alt="carrier" />
          <img className={styles.main_img} src={element.images[0].path} alt="fancoil" />
          <p className={styles.model_name}>{element.series}</p>
        </NavLink>
      </li>
    );
  });

  return (
    <ScrollAnimation
      animateIn="fadeIn"
      // dely="20"
      animateOnce={true}
      className={styles.container}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          {/* // первая строка */}
        <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
          >
            <div className={styles.long_block}>
              <div className={styles.mini_block}>
                <img src={demo8} alt=""  />
                <p>
                  Охлаждение <br/> до <span>8 кWt</span>
                </p>
              </div>
              <div className={styles.mini_block}>
                <img src={demo4} alt="" />
                <p>
                  Нагрев <br/>дo  <span>9 кWt</span>
                </p>
              </div>
            </div>
          </ScrollAnimation>

          
          <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
            className={styles.animate}
          >
            <div className={styles.mini_block}>
              <img src={demo1} alt="" />
              <p>2х/4х <br/> трубные</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
            className={styles.animate}
          >
            <div className={`${styles.mini_block}`}>
              <img src={demo2} alt="" />
              <p> Толщина всего <br/> <span>245 мм</span> </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
            className={styles.animate}
          >
            <div className={styles.long_block}>

                <img src={demo3} alt="" />
                <p>
                  Вертикальная или горизонтальная <br/> установка
                </p>

            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
          >
              <div
                className={`${styles.mini_block} `}
              >
                <img src={demo5} alt="" />
                <p>Одни из самых тихих на рынке</p>
              </div>
          </ScrollAnimation>
        </div>

        {/* вторая строка */}

        <div className={styles.row}>

          <div className={styles.main_block}>
            <div
              className={styles.arrow_left}
              onClick={leftArrowFunc}
              ref={left_arrow}
            >
              <img src={left} alt="arrow_left" />
            </div>

            <ul className={styles.slider_list} ref={props.size}>
              {slideElements}
            </ul>

            <div
              className={styles.arrow_right}
              ref={right_arrow}
              onClick={rightArrowFunc}
            >
              <img src={right} alt="arrow_right" />
            </div>
          </div>

          {/* <div className={styles.mini_col}>
            <ScrollAnimation
              animateIn="flipInY"
              animateOnce={true}
              animateOut="flipOutY"
            >
              <div className={styles.mini_block}>
                <img src={demo8} alt="" />
                <p>Одни из самых тихих на рынке</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="flipInY"
              animateOnce={true}
              animateOut="flipOutY"
            >
              <div className={styles.mini_block}>
                <img src={demo9} alt="" />
                <p>2х/3х</p>
                <p>Клапаный</p>
              </div>
            </ScrollAnimation>
          </div>
           */}
          
          <div className={styles.mini_col}>
            <ScrollAnimation
              animateIn="flipInY"
              animateOnce={true}
              animateOut="flipOutY"
            >
              <div className={`${styles.mini_block} ${styles.mini_sklad}`}>
                <img src={demo10} alt="" />
                <p>
                  В наличии <br/> на складе
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="flipInY"
              animateOnce={true}
              animateOut="flipOutY"
            >
              <Link to="accessories" smooth={true} offset={-400} duration={500}>
                <div className={` ${styles.mini_block} ${styles.mini_green} ${styles.mini_link}`}>
                <img src={demo11} alt="accessories" />
                <p>
                  Широкий выбор аксессуаров
                </p>
                </div>
                </Link>
            </ScrollAnimation>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>

          <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
          >
            <div className={styles.mini_block}>
              <img src={demo12} alt="" />
              <p>Высокая надежность</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
          >
            <div className={styles.mini_block}>
              <img src={demo9} alt="" />
              <p><span>ECO</span> <br/> friendly</p>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
          >
            <div className={styles.mini_block}>
              <img src={demo7} alt="" />
              <p>Европейское производство</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
          >
            <div className={`${styles.mini_block} ${styles.cert_block}`}>
              <img src={eurovent} alt="" />
              {/* <p>Сертификат Евровент</p> */}
            </div>
          </ScrollAnimation>
          </div>
        

          <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
          >
            <div className={`${styles.mini_block} ${styles.big_block} `}>
              <img src={demo6} alt="" />
              <p>Простой монтаж и сервис</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="flipInY"
            animateOnce={true}
            animateOut="flipOutY"
          >
            <div className={`${styles.mini_block} ${styles.big_block} `}>
              <img src={demo14} alt="" />
              <p>Своевременная <br/> доставка</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default BeautySection;
