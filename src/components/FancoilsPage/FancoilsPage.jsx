import React from 'react';
import logo from '../../assets/img/carrier_fancoil.png';
import fancoil from "../../assets/img/fancoil_main.png";
import styles from "./FancoilsPage.module.scss";
import Form from "../Form/Form";
import CardItem from '../CardItem/CardItem';




let FancoilsPage = (props) => {

  return (
    <div className={styles.content}>
      {/* <div className={styles.left_side}>
        <h1 className={styles.title}>Фанкойлы</h1>
        <img className={styles.img} src={logo} alt="logo" />
        <p className={styles.description}>Всегда в наличии на складе в Москве канальные и кассетные вентиляторные доводчики от официального дилера мирового лидера в области высокотехнологичных систем отопления, кондиционирования и охлаждения — Carrier.</p>
      </div>
      <div className={styles.right_side}>
        <img className={styles.fancoil} src={fancoil} alt="image_fancoil"/>
      </div> */}
      <h2 className={styles.title}>Модели фанкойлов</h2>
      <div className={styles.cards_block}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>

      <Form />

    </div>
  )
}

export default FancoilsPage;