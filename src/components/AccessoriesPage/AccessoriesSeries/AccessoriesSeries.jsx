import React from 'react';
import styles from './AccessoriesSeries.module.scss';
import  series_img from '../../../assets/img/accessories_item.jpg';
import { NavLink } from 'react-router-dom';
import Form from '../../Form/Form';
import cogoToast from 'cogo-toast';

let AccessoriesSeries = (props) => {

  debugger;

  let AddtoSpec = () => {

    props.addProduct();
    cogoToast.success('Добавлено в спецификацию', {
      position: 'top-right'
    });
  }

  window.scrollTo(0,0);

  return (

    <div className={styles.container}>
      <h2 className={styles.title}>Название серии(типа) аксессуара</h2>
      <div className={styles.fancoil_block}>
        <div className={styles.main_series}>
          <div className={styles.block_img}>
            <img className={styles.img} src="https://images.ru.prom.st/295229443_pult-upravleniya-konditsionerom.jpg" alt="" />
          </div>
          <div className={styles.desc_block}>
            <h4 className={styles.block_title}>Центральный пульт MD-KJR-90B/ME</h4>
            <p className={styles.block_description}> Максимальное количество внутренних блоков - 64
Пульт MD-CCM03 имеет внутреннюю память, в которой могут быть сохранены параметры и режимы работы внутренних блоков (Режимы, скорости вращения вентиляторов).</p>
          </div>
        </div>

        
        <div className={styles.text_block}>
          <ul className={styles.advantages}>
          CCM-03 характеризуется следующими функциональными возможностями:
             <li className={styles.item}>
             Автоматическое возобновление работы внутренних блоков после прекращения и повторной подачи питающего напряжения.
             </li>
             <li className={styles.item}>
             Коммуникационный протоков - RS485 для подключения к системе комплексного управления.
             </li>
             <li className={styles.item}>
              Простой и удобный LCD дисплей одновременно отображает множество параметров и режимов работы.
             </li>
             <li className={styles.item}>
             Индикация состояния каждого внутреннего блока. Возможность управления с помощью сухого контакта.
             </li>
          </ul>
        </div>
      
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.param}>Модели</div>
            <div className={styles.param}>Размер(ШхВхГ), мм</div>
            <div className={styles.param}>Производительность в режиме охлаждения, кВт</div>
            <div className={styles.param}>Производительность в режиме обогрева, кВт</div>
            <div className={styles.param}>Рекоменд. розничная цена</div>
            <div className={styles.param}></div>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to='/accessories_models/id'>
              <div className={styles.param}>MD-KJR-90B/ME</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button className={`${styles.btn} ${styles.param}`} onClick={AddtoSpec} >Добавить в спецификацию</button>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to='/accessories_models/id'>
              <div className={styles.param}>MD-KJR-90B/ME</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button className={`${styles.btn} ${styles.param}`} onClick={AddtoSpec} >Добавить в спецификацию</button>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to='/accessories_models/id'>
              <div className={styles.param}>MD-KJR-90B/ME</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button className={`${styles.btn} ${styles.param}`} onClick={AddtoSpec} >Добавить в спецификацию</button>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to='/accessories_models/id'>
              <div className={styles.param}>MD-KJR-90B/ME</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button className={`${styles.btn} ${styles.param}`} onClick={AddtoSpec} >Добавить в спецификацию</button>
          </div>
        </div>

      
      
      </div>

      <Form/>
    </div>
  );

}

export default AccessoriesSeries;