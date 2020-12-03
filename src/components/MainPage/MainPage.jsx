import React, { useState } from "react";
import logo_carrier from "../../assets/img/carrier_fancoil1.png";
import logo_dttermo_group from "../../assets/img/logo_min.png";
import styles from "./MainPage.module.scss";
import Form from "../Form/Form";
import CardItem from "../CardItem/CardItem";
import AccessoryItem from "../AccessoryItem/AcessoryItem";
import BeautySection from "../BeautySection/BeautySection";
import features_1 from "../../assets/img/features_1.svg";
import features_2 from "../../assets/img/features_2.svg";
import features_3 from "../../assets/img/features_3.svg";
import features_4 from "../../assets/img/features_4.svg";
import features_5 from "../../assets/img/features_5.svg";
import features_6 from "../../assets/img/features_6.svg";
import { SRLWrapper } from "simple-react-lightbox";
import certificate from "../../assets/img/certificate.jpg";
import FsLightbox from "fslightbox-react";

let MainPage = (props) => {
  const options = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false,
      showFullscreenButton: false,
    },
  };

  const [toggler, setToggler] = useState(false);

  // let link_block = React.createRef();
  // let accessories_block = React.createRef();
  // let scrollToAccessories = () => {

  // }

  return (
    <div className={styles.content}>
      <div className={styles.companies_section}>
        <a href="https://www.dttermo.ru/ru/%d0%be-%d0%bd%d0%b0%d1%81/obscaja-informacija.htm">
          <div className={styles.company_block}>
            <div className={styles.img_block}>
              <img
                className={styles.img}
                src={logo_dttermo_group}
                alt="logo_dttermo_group"
              />
            </div>
            <div
              className={styles.block_text}
              title="Переход на сайт компании DTtermo group"
            >
              <p className={styles.text}>
                Компания ДТ ТЕРМО ГРУПП основана в 2001 году, на протяжении
                всего времени она занимает лидирующие позиции, как поставщик
                оборудования и материалов для систем ОВК и ВК на Российском
                рынке и в странах СНГ.
              </p>
            </div>
          </div>
        </a>
        <a href="https://www.carrier.com/commercial-refrigeration/ru/ru/about/">
          <div
            className={styles.company_block}
            title="Переход на сайт компании Carrier"
          >
            <div className={styles.img_block}>
              <img
                className={styles.img}
                src={logo_carrier}
                alt="logo_carrier"
              />
            </div>
            <div className={styles.block_text}>
              <p className={styles.text}>
                Компания Carrier — мировой лидер в области высокотехнологичных
                систем отопления, кондиционирования и охлаждения. Carrier
                основана в 1915 году изобретателем кондиционера Уиллисом
                Керриером. В настоящее время компания — часть UTC Climate,
                Controls & Security, подразделения United Technologies Corp.
                (США), ведущего поставщика аэрокосмических и строительных систем
                в мире.
              </p>
            </div>
          </div>
        </a>
      </div>
      <h2 className={styles.title}></h2>
      <BeautySection />
      <h2 className={styles.title}>Типы фанкойлов</h2>
      <div className={styles.subtitle}>
        <span className={styles.in_stock}>В наличии</span>
        <span className={styles.on_order}>Под заказ</span>
      </div>
      <div className={styles.cards_block}>
        <CardItem active={true} />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <h2 className={styles.title}>Основные аксессуары для фанкойлов</h2>
      <div className={styles.accessories_block} id="accessories">
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
      </div>
      <section className={styles.features}>
        <h2 className={styles.title}>Основные преимущества</h2>
        <div className={styles.item}>
          <img className={styles.features_img} src={features_1} alt="" />
          <p className={styles.text}>Комплексные поставки инженерных систем</p>
          <div className={styles.hover_block}>
            <p>
              ОВК и ВК оборудование и материалы ведущих мировых производителей.
            </p>
            <p>Своевременная доставка силами собственного автопарка.⠀</p>
          </div>
        </div>
        <div className={styles.item}>
          <img className={styles.features_img} src={features_2} alt="" />
          <p className={styles.text}>Наличие на складе</p>
          <div className={styles.hover_block}>
            <p>Собственный склад в г. Лобня площадью 5000 м2.</p>
            <p>Всегда поддерживается запас ходовых позиций .</p>
          </div>
        </div>
        <div className={styles.item}>
          <img className={styles.features_img} src={features_3} alt="" />
          <p className={styles.text}>
            Tехническая поддержка и профессиональный подбор
          </p>
          <div className={styles.hover_block}>
            <p>Индивидуальный подход к каждому Клиенту.</p>
            <p>
              Подбор оборудования и материалов в соответствии с требованиями
              проекта.⠀
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img className={styles.features_img} src={features_5} alt="" />
          <p className={styles.text}>Сервисные услуги</p>
          <div className={styles.hover_block}>
            <p>Гарантийное и техническое обслуживание оборудования.</p>
            <p>Пусконаладочные работы систем ОВК и ВК.</p>
          </div>
        </div>
      </section>
      <section className={styles.certificate}>
        <h3 className={styles.title}>Официальный дилер</h3>
        <div className={styles.block}>
          <img
            className={styles.img}
            src={certificate}
            alt="certificate"
            onClick={() => setToggler(!toggler)}
          />
          <FsLightbox toggler={toggler} sources={[certificate]} />
          <div className={styles.right_side}>
            <p className={styles.desc}>
              Компания "DTtermo GROUP" является сертифицированным официальным
              дилером продукции Carrier.
            </p>
            {/* <a className={styles.btn} href="#"> Проверить сертификат</a> */}
          </div>
        </div>
      </section>
      <Form />
    </div>
  );
};

export default MainPage;
