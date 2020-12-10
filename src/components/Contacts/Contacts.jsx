import React from "react";
import styles from "./Contacts.module.scss";
import info from "../../assets/img/contacts_1.png";
import sales from "../../assets/img/shopping-cart.svg";
import project from "../../assets/img/project.svg";
import close from "../../assets/img/close.svg";
import tech from "../../assets/img/contacts_2.svg";
import logo from "../../assets/img/logo_min.png";
import mail from "../../assets/img/mail_green.svg";
import phone from "../../assets/img/phone.svg";
import map from "../../assets/img/map.svg";
import MapsContainer from "../MapsContainer/MapsContainer.jsx";
import scheme from "../../assets/img/warehouse_route.jpg";
import { NavLink } from "react-router-dom";
import ModalScheme from "./ModalScheme/ModalScheme"


let Contacts = (props) => {
  return (
    <>
      <section className={styles.contacts}>
        <div className={styles.title_block}>
          <h2 className={styles.title}>Контактная информация</h2>
        </div>
        <div className={styles.mail_contact}>

        {/* <div className={styles.item}>
          <img className={styles.img} src={info} alt="info" />
          <span className={styles.contact__title}>Общая информация</span>
          <p className={styles.contact__desc}>
            Задайте вопрос или оставьте отзыв о работе сайта или фирмы. Наши
            сотрудники отвечают в течение 24 часов.
          </p>
          <a className={styles.contact__adress} href="mailto:infodttermo.ru">
            {" "}
            info@dttermo.ru
          </a>
        </div> */}
        {/* <div className={styles.item}>
          <object
            className={styles.img}
            type="image/svg+xml"
            data={tech}
            width="78"
            height="78"
          ></object>
          <span className={styles.contact__title}>
            Техническая поддержка и сервис
          </span>
          <p className={styles.contact__desc}>
            По вопросам технической поддержки и сервиса обращайтесь сюда.
          </p>
          <a
            className={styles.contact__adress}
            href="mailto:technical@dttermo.ru"
          >
            technical@dttermo.ru
          </a>
          <a
            className={`${styles.contact__adress} ${styles.contact__adress_second}`}
            href="mailto:service@dttermo.ru"
          >
            service@dttermo.ru
          </a>
        </div> */}
        {/* <div className={styles.item}>
          <object
            className={styles.img}
            type="image/svg+xml"
            data={sales}
            width="78"
            height="78"
          ></object>
          <span className={styles.contact__title}>Продажи и закупки</span>
          <p className={styles.contact__desc}>
            {" "}
            Предоставление информации о покупке и доставке продукции, а так же
            предложения о сотрудничестве и поставках.{" "}
          </p>
          <a className={styles.contact__adress} href="mailto:sale@dttermo.ru">
            sale@dttermo.ru
          </a>
          <a
            className={`${styles.contact__adress} ${styles.contact__adress_second}`}
            href="mailto:pursache@dttermo.ru"
          >
            purchase@dttermo.ru
          </a>
        </div> */}
        {/* <div className={styles.item}>
          <object
            className={styles.img}
            type="image/svg+xml"
            data={project}
            width="78"
            height="78"
          ></object>
          <span className={styles.contact__title}>Проектирование</span>
          <p className={styles.contact__desc}>
            {" "}
            Разработка и проектирование документации на Ваш объект.
          </p>
          <a className={styles.contact__adress} href="mailto:design@dttermo.ru">
            design@dttermo.ru
          </a>
        </div> */}
      
        </div>
        <div className={styles.adress_block}>
          < div className={styles.adress_item}>

              <span className={styles.item_title}>Главный офис</span>
              <p className={styles.item_desc}>
                <object
                  className={styles.icon}
                  type="image/svg+xml"
                  data={map}
                  width="25"
                  height="25"
                ></object>
                107023 Москва, Россия Медовый пер., д. 5, стр. 1
              </p>
              <a className={styles.link} href="tel:+74957772399">
                <object
                  className={styles.icon}
                  type="image/svg+xml"
                  data={phone}
                  width="25"
                  height="25"
                ></object>
                +7 (495) 777-23-99
              </a>
              <a className={styles.link} href="mailto:carrier@dttermo.ru">
                <object
                  className={styles.icon_mail}
                  type="image/svg+xml"
                  data={mail}
                  width="25"
                  height="25"
                ></object>
                carrier@dttermo.ru
              </a>
            
          </div>
          <div className={styles.adress_item}>

              <span className={styles.item_title}>Наш склад</span>
              <p className={styles.item_desc}>
                <object
                  className={styles.icon}
                  type="image/svg+xml"
                  data={map}
                  width="25"
                  height="25"
                ></object>
                141730 Лобня, Россия ул. Лейтенанта Бойко, д. 91а.
                <ModalScheme/>
            </p>

              <a className={styles.link} href="tel:+74955777550">
                <object
                  className={styles.icon}
                  type="image/svg+xml"
                  data={phone}
                  width="25"
                  height="25"
                ></object>
                + 7 (495) 577-75-50
              </a>
              <a className={styles.link} href="tel:+79261187163">
                <object
                  className={styles.icon}
                  type="image/svg+xml"
                  data={phone}
                  width="25"
                  height="25"
                ></object>
                + 7 (926) 118-71-63
              </a>

          </div>
          {/* <div className={styles.adress_item}>
          <span className={styles.item_title}>Филиал в Новосибирске</span>
          <p className={styles.item_desc}>
            <object
              className={styles.icon}
              type="image/svg+xml"
              data={map}
              width="25"
              height="25"
            ></object>
            630007 Новосибирск, Россия Октябрьская магистраль, 4 оф. 501
          </p>
          <a className={styles.link} href="tel:+79137404067">
            <object
              className={styles.icon}
              type="image/svg+xml"
              data={phone}
              width="25"
              height="25"
            ></object>
            +7 (915) 232-37-00
          </a>
        </div>
        <div className={styles.adress_item}>
          <span className={styles.item_title}>Филиал в Беларусии</span>
          <p className={styles.item_desc}>
            <object
              className={styles.icon}
              type="image/svg+xml"
              data={map}
              width="25"
              height="25"
            ></object>
            220114 Республика Беларусь, Минск ул.Филимонова, 53а, оф. 4
          </p>
          <a className={styles.link} href="tel:+375333869987">
            <object
              className={styles.icon}
              type="image/svg+xml"
              data={phone}
              width="25"
              height="25"
            ></object>
            +375 (33) 386-99-87
          </a>
        </div>
       */}
        </div>
        {/* <Form /> */}
      </section>
      <h2 className={styles.title}> </h2>
      <MapsContainer />
{/* 
      <div className={styles.modal}>
      <div className={styles.modal_dialog}>
        <div className={styles.header}>
          <h3 className={styles.title}>Схема проезда на склад DTtermo group</h3>
            <img src={close} className={styles.close} alt="close"/>
        </div>
        <div className={styles.content}>
          <a className={styles.btn} href="https://dttermo.ru/files/downloads/file_ru/warehouse_route.pdf">Скачать</a>
            <img src={scheme} className={styles.scheme} alt="Схема проезда" />
           */}
          {/* <button className={styles.btn}>Закрыть</button> */}
        {/* </div>
      </div> */}
    {/* </div> */}
    </>
  );
};

export default Contacts;
