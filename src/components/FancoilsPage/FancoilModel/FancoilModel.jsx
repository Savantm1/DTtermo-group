import React from "react";
import styles from "./FancoilModel.module.scss";
import card_img from "../../../assets/img/series_img.PNG";
import controller from "../../../assets/img/controller.svg";
import temperature from "../../../assets/img/temperature-control.svg";
import water from "../../../assets/img/water-temperature.svg";
import box from "../../../assets/img/box.svg";
import term from "../../../assets/img/term.svg";
import truck from "../../../assets/img/truck.svg";
import AccessoryItem from "../../AccessoryItem/AcessoryItem";
// import Form from "../../Form/Form";
import cogoToast from "cogo-toast";
import { NavLink } from "react-router-dom";

// import FancoilSectionContainer from "../../MainPage/FancoilsSection/FancoilSectionContainer";
import FancoilSection from "../../MainPage/FancoilsSection/FancoilSection";


let FancoilModel = (props) => {
debugger
  let ModelTestData = { id: "666", art: "666", type: "тест", model: "Тестовая", quantity: '666' };

  let AddtoSpec = () => {
    props.addProduct();
    cogoToast.success("Добавлено в спецификацию", {
      position: "top-right",
    });

    props.AddModelToSpec(ModelTestData.id, ModelTestData.art, ModelTestData.type, ModelTestData.model, ModelTestData.quantity, props.spec)
  };

  window.scrollTo(0, 0);

  let advantagesElements = props.data.model[0].fancoil.advantages.map((element) => {
    return (
      <li className={styles.text_item}>
      <span className={styles.item_left}></span>
      <span className={styles.item_right}>
          {element}
      </span>
    </li>
    )
  })

  let ACElements = props.data.model[0].fancoil.AC.map((element) => {
    return (
              <li className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                 {element}
                </span>
              </li>
    )
  })

  let ECElements = props.data.model[0].fancoil.EC.map((element) => {
    return (
              <li className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                 {element}
                </span>
              </li>
    )
  })


  return (
    <div className={styles.model}>
      <h2 className={styles.title}
      >{props.data.model[0].name}
      </h2>
      <div className={styles.model_container}>
        <div className={styles.left_side}>
          <img className={styles.card_img} src={card_img} alt="image_fancoil" />
          <div className={styles.technologies_block}>
            <span className={styles.block_title}> Основные функции:</span>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <object
                  className={styles.item_img}
                  data={controller}
                  width="40px"
                  height="40px"
                  type="image/svg+xml"
                  alt="img"
                > </object>
                <p className={styles.item_desc}>
                  Управление с помощью ИК-пульта
                </p>
              </li>
              <li className={styles.list_item}>
                <object
                  className={styles.item_img}
                  data={water}
                  width="40px"
                  height="40px"
                  type="image/svg+xml"

                > </object>
                <p className={styles.item_desc}>
                  Контроль температуры воды в трубопроводе
                </p>
              </li>
              <li className={styles.list_item}>
                <object
                  className={styles.item_img}
                  data={temperature}
                  width="40px"
                  height="40px"
                  type="image/svg+xml"
                > </object>
                <p className={styles.item_desc}>
                  Контроль температуры внутри помещения
                </p>
              </li>
            </ul>
          </div>

          <ul className={styles.designation}>
            <p className={styles.designation_title}>Обозначение cерии:</p>
            <li className={styles.designation_item}>
              <span className={styles.item_left}>DF -</span>
              <span className={styles.item_right}>Фанкойлы DTtermo</span>
            </li>
            <li className={styles.designation_item}>
              <span className={styles.item_left}>250-600 -</span>
              <span className={styles.item_right}>
                Холодопроизводительность 2,2-4,05 кВт
              </span>
            </li>
            <li className={styles.designation_item}>
              <span className={styles.item_left}>G - </span>
              <span className={styles.item_right}>Фанкойлы - настенные</span>
            </li>
            <li className={styles.designation_item}>
              <span className={styles.item_left}>B - </span>
              <span className={styles.item_right}>Панель B типа</span>
            </li>
          </ul>
        </div>

        <div className={styles.right_side}>
          <div className={styles.characteristics_block}>
            <ul className={styles.characteristics_list}>
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>Серия:</span>
                <span className={styles.item__right_side}>{props.data.model[0].fancoil.series}</span>
              </li>
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>Размер (ШхВхГ):</span>
                <span className={styles.item__right_side}>{props.data.model[0].size} мм</span>
              </li>
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>
                  Расход воздуха :
                </span>
                <span className={styles.item__right_side}>
                {props.data.model[0].air_flow} куб. м/ч
                </span>
              </li>
              {/* <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>Уровень шума:</span>
                <span className={styles.item__right_side}>30/24/20 дБ</span>
              </li> */}
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>
                  Производительность в режиме охлаждения:
                </span>
                <span className={styles.item__right_side}>{props.data.model[0].Q_ice} кВт</span>
              </li>
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>
                  Производительность в режиме обогрева:
                </span>
                <span className={styles.item__right_side}>{props.data.model[0].Q_hot} кВт</span>
              </li>
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>
                  Вес внутреннего блока:
                </span>
                <span className={styles.item__right_side}>{props.data.model[0].weight} кг</span>
              </li>
              {/* <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>Электропитание:</span>
                <span className={styles.item__right_side}>
                  220-240/1/50 В/Гц/Ф
                </span>
              </li> */}
            </ul>
            <ul className={styles.advantages_list}>
              <li className={styles.advantages_item}>
                <object
                  className={styles.item_img}
                  data={truck}
                  width="40px"
                  height="40px"
                  type="image/svg+xml"
                > </object>
                <p className={styles.item_desc}>
                  Бесплатная доставка до транспортной компании
                </p>
              </li>
              <li className={styles.advantages_item}>
                <object
                  className={styles.item_img}
                  data={term}
                  width="40px"
                  height="40px"
                  type="image/svg+xml"
                > </object>
                <p className={styles.item_desc}>3 года гарантии</p>
              </li>
              <li className={styles.advantages_item}>
                <object
                  className={styles.item_img}
                  data={box}
                  width="40px"
                  height="40px"
                  type="image/svg+xml"
                > </object>
                <p className={styles.item_desc}>В наличии на складе</p>
              </li>
              <button className={styles.btn} onClick={AddtoSpec}>
                Добавить в спецификацию
              </button>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.info_block}>
        <div className={styles.left_side}>
          <div className={styles.text_block}>
            <div className={styles.about_series}>
              <p className={styles.text_title}> 
                Информация о серии фанкойлов:
                {/* {props.data.model.fancoil.type} */}
              </p>
              <p className={styles.text_desc}>
                {props.data.model[0].fancoil.information}
              </p>
            </div>
            <ul className={styles.text_list}>
              <p className={styles.text_title}>Основные преимущества модели: </p>
            
              {advantagesElements}

            </ul>

            <ul className={styles.text_list}>
              <p className={styles.text_title}>Два  варианта электродвигателя AC/EC </p>
              <p className={styles.text_subtitle}>AC:</p>
                {ACElements}
              <p className={styles.text_subtitle}>EC:</p>
                {ECElements}
              {/* <li className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                  Открытая установка на стене +17…+32
                </span>
              </li>
              <li className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                  Контроль температуры воды в трубопроводе +3…+18 и +30…+75
                </span>
              </li>
              <li className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                  2-х рядный теплообменник
                </span>
              </li>
              <li className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                  Управление ИК пульт MD-R51 (Стандартно)
                </span>
              </li>
              <li className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                  Управление с помощью проводных пультов MD-KJR12B, MD-KJR29B,
                  MD-KJR90DP (Опция)
                </span>
              </li>
              <li className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                  Управление воздушными заслонками
                </span>
              </li>
              <li className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                  Подключение к системе центрального управления XYE + MD-CCM03,
                  MD-CCM30
                </span>
              </li>
              <li className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                  Подключение к системе группового управления XYE + MD-KJR150A
                </span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className={styles.right_side}>
          <h2 className={styles.text_title}> Другие модели этой серии</h2>
        <div className={styles.table_block}>
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.param}>Модели</div>
              <div className={styles.param}>Размер(ШхВхГ), мм</div>
              <div className={styles.param}>
                Производительность в режиме охлаждения, кВт
              </div>
              {/* <div className={styles.param}>
                Производительность в режиме обогрева, кВт
              </div> */}
              {/* <div className={styles.param}>Рекоменд. розничная цена</div> */}
              <div className={styles.param}></div>
            </div>
            <div className={styles.row}>
              <NavLink className={styles.link} to="/models/id">
                <div className={styles.param}>DF-250GB</div>
              </NavLink>
              <div className={styles.param}>915×290×230</div>
              <div className={styles.param}>2,63</div>
              {/* <div className={styles.param}>3,36</div>
              <div className={styles.param}>По запросу</div> */}
              <button
                className={`${styles.btn} ${styles.param}`}
                onClick={AddtoSpec}
              >
                Добавить в спецификацию
              </button>
            </div>
            <div className={styles.row}>
              <NavLink className={styles.link} to="/models/id">
                <div className={styles.param}>DF-250GB</div>
              </NavLink>
              <div className={styles.param}>915×290×230</div>
              <div className={styles.param}>2,63</div>
              {/* <div className={styles.param}>3,36</div>
              <div className={styles.param}>По запросу</div> */}
              <button
                className={`${styles.btn} ${styles.param}`}
                onClick={AddtoSpec}
              >
                Добавить в спецификацию
              </button>
            </div>
            <div className={styles.row}>
              <NavLink className={styles.link} to="/models/id">
                <div className={styles.param}>DF-250GB</div>
              </NavLink>
              <div className={styles.param}>915×290×230</div>
              <div className={styles.param}>2,63</div>
              {/* <div className={styles.param}>3,36</div>
              <div className={styles.param}>По запросу</div> */}
              <button
                className={`${styles.btn} ${styles.param}`}
                onClick={AddtoSpec}
              >
                Добавить в спецификацию
              </button>
            </div>
            <div className={styles.row}>
              <NavLink className={styles.link} to="/models/id">
                <div className={styles.param}>DF-250GB</div>
              </NavLink>
              <div className={styles.param}>915×290×230</div>
              <div className={styles.param}>2,63</div>
              {/* <div className={styles.param}>3,36</div>
              <div className={styles.param}>По запросу</div> */}
              <button
                className={`${styles.btn} ${styles.param}`}
                onClick={AddtoSpec}
              >
                Добавить в спецификацию
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <h2 className={styles.title}> Подходящие аксессуары</h2>
      <div className={styles.accessories}>
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
        <AccessoryItem />
      </div>

      <h2 className={styles.title}> Другие типы фанкойлов</h2>
      {/* <div className={styles.table_block}>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.param}>Модели</div>
            <div className={styles.param}>Размер(ШхВхГ), мм</div>
            <div className={styles.param}>
              Производительность в режиме охлаждения, кВт
            </div>
            <div className={styles.param}>
              Производительность в режиме обогрева, кВт
            </div>
            <div className={styles.param}>Рекоменд. розничная цена</div>
            <div className={styles.param}></div>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to="/models/id">
              <div className={styles.param}>DF-250GB</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button
              className={`${styles.btn} ${styles.param}`}
              onClick={AddtoSpec}
            >
              Добавить в спецификацию
            </button>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to="/models/id">
              <div className={styles.param}>DF-250GB</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button
              className={`${styles.btn} ${styles.param}`}
              onClick={AddtoSpec}
            >
              Добавить в спецификацию
            </button>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to="/models/id">
              <div className={styles.param}>DF-250GB</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button
              className={`${styles.btn} ${styles.param}`}
              onClick={AddtoSpec}
            >
              Добавить в спецификацию
            </button>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to="/models/id">
              <div className={styles.param}>DF-250GB</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button
              className={`${styles.btn} ${styles.param}`}
              onClick={AddtoSpec}
            >
              Добавить в спецификацию
            </button>
          </div>
        </div>
      </div> */}
      <div className={styles.cards_block}>
        <FancoilSection data={props.data}/>
      </div>

      {/* <Form /> */}
    </div>
  );
};

export default FancoilModel;
