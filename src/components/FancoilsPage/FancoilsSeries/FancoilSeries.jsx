import React from 'react';
import styles from './FancoilSeries.module.scss';
import  series_img from '../../../assets/img/series_img.PNG';
import { NavLink } from 'react-router-dom';
import Form from '../../Form/Form';
import cogoToast from 'cogo-toast';




let FancoilSeries = (props) => {

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
      <h2 className={styles.title}>Название серии(типа) фанкойлов</h2>
      <div className={styles.fancoil_block}>
        <div className={styles.main_series}>
          <div className={styles.block_img}>
            <img className={styles.img} src={series_img} alt="" />
          </div>
          <div className={styles.desc_block}>
            <h4 className={styles.block_title}>Серия DF-250-600GB</h4>
            <p className={styles.block_description}> Настенные фанкойлы Standard Line с мощностью охлаждения от 2.6 до 5 кВт. Двухтрубная система. Двухрядный теплообменник. Контроль температуры воды в трубоповоде.</p>
          </div>
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
            <NavLink className={styles.link} to='/models/id'>
              <div className={styles.param}>DF-250GB</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button className={`${styles.btn} ${styles.param}` } onClick={AddtoSpec}>Добавить в спецификацию</button>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to='/models/id'>
              <div className={styles.param}>DF-250GB</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button className={`${styles.btn} ${styles.param}`} onClick={AddtoSpec} >Добавить в спецификацию</button>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to='/models/id'>
              <div className={styles.param}>DF-250GB</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button className={`${styles.btn} ${styles.param}`} onClick={AddtoSpec} >Добавить в спецификацию</button>
          </div>
          <div className={styles.row}>
            <NavLink className={styles.link} to='/models/id'>
              <div className={styles.param}>DF-250GB</div>
            </NavLink>
            <div className={styles.param}>915×290×230</div>
            <div className={styles.param}>2,63</div>
            <div className={styles.param}>3,36</div>
            <div className={styles.param}>По запросу</div>
            <button className={`${styles.btn} ${styles.param}`} onClick={AddtoSpec} >Добавить в спецификацию</button>
          </div>
        </div>

        <div className={styles.text_block}>
          <p>Данные фанкойлы внешне практически не отличаются от внутренних блоков обычных сплит-систем. Они устанавливаются на стену на определенном расстоянии от потолка. Как правило, в комплекте с настенными фанкойлами идут дистанционные пульты управления и встроенный трехходовой клапан. Относительно сплит-систем, настенные фанкойлы имеют больший уровень звукового давления, поэтому широкого применения в жилых помещениях они не нашли. Наиболее часто оборудование такого типа устанавливается в небольшие офисные помещения.</p>
          <ul className={styles.advantages}>
            Преимущества  фанкойлов данного типа:
             <li className={styles.item}>
              Низкая стоимость оборудования и монтажа.
             </li>
             <li className={styles.item}>
             Простое подключение к системе холодоснабжения благодаря встроенному клапану.
             </li>
             <li className={styles.item}>
             Широкие возможности установки, так как не требуется каких-то специальных условий.
             </li>
          </ul>

          <ul className={styles.advantages}>
            Недостатки  фанкойлов данного типа:
             <li className={styles.item}>
             Высокий уровень шума.
             </li>
             <li className={styles.item}>
             Ограниченный диапазон направлений воздушного потока, что вносит определенный дискомфорт.
             </li>
          </ul>
        </div>
      </div>

      <Form/>
    </div>
  );

}

export default FancoilSeries;