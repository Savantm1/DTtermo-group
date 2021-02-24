import React from "react";
import styles from "./MainPage.module.scss";
import BeautySection from "./BeautySection/BeautySection";
import features_1 from "../../assets/img/features_1.svg";
import features_2 from "../../assets/img/features_2.svg";
import features_3 from "../../assets/img/features_3.svg";
import features_5 from "../../assets/img/features_5.png";
import FancoilSectionContainer from "./FancoilsSection/FancoilSectionContainer";
// import AccessoriesSectionContainer from "./AcessoriesSection/AccessoriesSectionContainer";
import AccessoryItem from "../AccessoryItem/AcessoryItem";
import {Helmet} from "react-helmet";
// import CardItem from "../CardItem/CardItem";

let MainPage = (props) => {
 
  let AccessoriesPopularElements = props.data.accessoriesTypes.map(element=> {
    if (element.popular) {
      return (<AccessoryItem
        key={element.id}
        title={element.name}
        image={element.images[0].path}
        desc={element.decryption}
        price={element.price}
      />)
    }
  });

  // const options = {
  //   buttons: {
  //     showAutoplayButton: false,
  //     showDownloadButton: false,
  //     showThumbnailsButton: false,
  //     showFullscreenButton: false,
  //   },
  // };



 
  return (
    <div className={styles.content}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DTtermo group</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <BeautySection
        size={props.sliderSize}
        data={props.data.fancoilTypes}
        changeTargetId={props.changeTargetId}
      />

      <h2 className={styles.title}>Типы фанкойлов</h2>
      {/* <div className={styles.subtitle}>
        <span className={styles.in_stock}>В наличии</span>
        <span className={styles.on_order}>Под заказ</span>
      </div> */}

      <FancoilSectionContainer />
      <h2 className={styles.title} id="accessories">Основные аксессуары для фанкойлов</h2>
      
      <div className={styles.cards_block}>
        {AccessoriesPopularElements}
      </div>

      <section className={styles.features}>
        <h2 className={styles.title}>Основные преимущества</h2>
        <div className={styles.item}>
          <img className={styles.features_img} src={features_1} alt="features" />
          <p className={styles.text}>Комплексные поставки инженерных систем</p>
          <div className={styles.hover_block}>
            <p>
              ОВК и ВК оборудование и материалы ведущих мировых производителей.
            </p>
            <p> Своевременная доставка силами собственного автопарка.⠀</p>
          </div>
        </div>
        <div className={styles.item}>
          <img className={styles.features_img} src={features_2} alt="features" />
          <p className={styles.text}>Наличие на складе</p>
          <div className={styles.hover_block}>
            <p> Собственный склад в г. Лобня площадью 5000 м2.</p>
            <p> Всегда поддерживается запас ходовых позиций .</p>
          </div>
        </div>
        <div className={styles.item}>
          <img className={styles.features_img} src={features_3} alt="features" />
          <p className={styles.text}>
            Tехническая поддержка и профессиональный подбор
          </p>
          <div className={styles.hover_block}>
            <p> Индивидуальный подход к каждому Клиенту.</p>
            <p>
               Подбор оборудования и материалов в соответствии с требованиями
              проекта.⠀
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img className={styles.features_img} src={features_5} alt="features" />
          <p className={styles.text}>Сервисное обслуживание</p>
          <div className={styles.hover_block}>
            <p> Гарантийное и техническое обслуживание оборудования.</p>
            <p> Пусконаладочные работы систем ОВК и ВК.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
