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
import Slider from "../../Slider/Slider";
import { Helmet } from "react-helmet";


let FancoilModel = (props) => {
  debugger

  let ModelTestData = { id: "666", art: "666", type: "тест", model: "Тестовая", quantity: '1' };
  let tableName = 'fancoilsTable';
  let currentModel = props.data.currentModel;

  let AddtoSpec = () => {
    props.data.AddProduct();
    cogoToast.success("Добавлено в спецификацию", {
      position: "top-right",
    });
  
    props.data.AddModelToSpec(
      currentModel.id,
      ModelTestData.art,
      currentModel.fancoil.type,
      currentModel.name,
      ModelTestData.quantity,
      tableName
    )
  };

  // let AddtoSpecFromTable = (id,art,type,name,quantity,tableName) => {
  //   props.data.AddProduct();
  //   cogoToast.success("Добавлено в спецификацию", {
  //     position: "top-right",
  //   });
  
  //   props.data.AddModelToSpec(
  //     id,
  //     art,
  //     type,
  //     name,
  //     quantity,
  //     tableName
  //   )
  // };



  window.scrollTo(0, 0);

  let advantagesElements = currentModel.fancoil.advantages.map((element,index) => {
    return (
      <li key={index} className={styles.text_item}>
      <span className={styles.item_left}></span>
      <span className={styles.item_right}>
          {element}
      </span>
    </li>
    )
  })

  let ACElements = currentModel.fancoil.AC.map((element,index) => {
    return (
      <li key={index} className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                 {element}
                </span>
              </li>
    )
  })

  let ECElements = currentModel.fancoil.EC.map((element,index) => {
    return (
              <li key={index} className={styles.text_item}>
                <span className={styles.item_left}></span>
                <span className={styles.item_right}>
                 {element}
                </span>
              </li>
    )
  })

  let decryption = currentModel.decryption;
  let index = Object.keys(decryption);


  // console.log('decryption', decryption)
  // console.log('index', index);
  // console.log('index[0]', index[0])
  // console.log('decryption[0]', decryption[0])
  // console.log('Object.keys(decryption[0])', Object.keys(decryption[0]))
  // console.log('key', Object.keys(decryption[0])[0])
  // console.log('value',decryption[0][Object.keys(decryption[0])[0]])
 
  let decryptionElements = index.map((element,index) => {

    let itemObject = decryption[element];
    let key = (Object.keys(itemObject))[0];
    let value = itemObject[key];
 
    return (
      <li key={index} className={styles.designation_item}>
        <span className={styles.item_left}>{key}</span>
        <span className={styles.item_right}>
          {` - ${value};`}
        </span>
      </li>
    )
  });

  let accessoriesElements = currentModel.accessories.map((element,index) => {
    return (
      <AccessoryItem key={ index } title={element.name} desc={element.decryption} image={element.images[0].path} />
    )
  });
 
  let tableElements = props.data.models.map((element,index) => {
    debugger
    return(
      <div key={index} className={styles.row}>
      <NavLink className={styles.link} to={`/fancoils/${props.data.match.params.type}/models/${element.name}`}>
        <div className={styles.param}>{element.name}</div>
      </NavLink>
        <div className={styles.param}>{element.Q_hot}</div>
        <div className={styles.param}>{element.Q_ice}</div>
      <button
        className={`${styles.btn} ${styles.param}`}
          onClick={
            () => {
              props.data.AddProduct();
              cogoToast.success("Добавлено в спецификацию", {
                position: "top-right",
              });
            
              props.data.AddModelToSpec(
                element.id,
                ModelTestData.art,
                element.fancoil.type,
                element.name,
                ModelTestData.quantity,
                tableName
              )
            }
            
          }
      >
        Добавить в спецификацию
      </button>
    </div>
    ) 
  })

  return (
    <div className={styles.model}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DTtermo group - модель {currentModel.name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h2 className={styles.title}
      >{currentModel.name}
      </h2>
      <div className={styles.model_container}>
        <div className={styles.left_side}>

          <div className={styles.slider}> 
            <Slider images={currentModel.fancoil.images}/>
          </div>
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

            {decryptionElements}
            
          </ul>
        </div>

        <div className={styles.right_side}>
          <div className={styles.characteristics_block}>
            <ul className={styles.characteristics_list}>
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>Серия:</span>
                <span className={styles.item__right_side}>{currentModel.fancoil.series}</span>
              </li>
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>Размер (ШхВхГ):</span>
                <span className={styles.item__right_side}>{currentModel.size} мм</span>
              </li>
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>
                  Расход воздуха :
                </span>
                <span className={styles.item__right_side}>
                {currentModel.air_flow} куб. м/ч
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
                <span className={styles.item__right_side}>{currentModel.Q_ice} кВт</span>
              </li>
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>
                  Производительность в режиме обогрева:
                </span>
                <span className={styles.item__right_side}>{currentModel.Q_hot} кВт</span>
              </li>
              <li className={styles.characteristics_item}>
                <span className={styles.item__left_side}>
                  Вес внутреннего блока:
                </span>
                <span className={styles.item__right_side}>{currentModel.weight} кг</span>
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

              </p>
              <p className={styles.text_desc}>

                {currentModel.fancoil.information}

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
             
            </ul>
          </div>
        </div>

        <div className={styles.right_side}>
          <h2 className={styles.text_title}> Другие модели этой серии</h2>
        <div className={styles.table_block}>
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.param}>Модели</div>
              <div className={styles.param}>Обогрев, кВт</div>
              <div className={styles.param}>
                Охлаждение, кВт
              </div>
              {/* <div className={styles.param}>
                Производительность в режиме обогрева, кВт
              </div> */}
              {/* <div className={styles.param}>Рекоменд. розничная цена</div> */}
              <div className={styles.param}></div>
              </div>
              
              {tableElements}
           
          </div>
        </div>
      </div>
      </div>
      
      <h2 className={styles.title}> Подходящие аксессуары</h2>
      <div className={styles.accessories}>

        {accessoriesElements}

      </div>

      <h2 className={styles.title}> Другие типы фанкойлов</h2>
    
      <div className={styles.cards_block}>
        <FancoilSection data={props.data}/>
      </div> 

      {/* <Form /> */}
    </div>
  );
};

export default FancoilModel;
