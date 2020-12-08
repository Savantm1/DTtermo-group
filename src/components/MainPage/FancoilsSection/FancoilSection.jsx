import React from 'react'
import CardItem from '../../CardItem/CardItem';
import styles from "../FancoilsSection/FancoilSection.module.scss";

let FancoilSection = (props) => {
debugger
  let fancoilTypesElements = props.data.fancoilTypes.map((element) => {
    return (
      <CardItem
        title={element.type}
        series={element.series}
        active={props.data.currentId === element.id}
      />
    );
  });


  return (
    <div className={styles.cards_block}>
    {fancoilTypesElements}
  </div>
  )
}

export default FancoilSection;