import React from 'react'
import CardItem from '../../CardItem/CardItem';
import styles from "../FancoilsSection/FancoilSection.module.scss";

let FancoilSection = (props) => {

  let fancoilTypesElements = props.data.fancoilTypes.map((element) => {
    console.log('firstModelId', element.firsModelId)

    return (
      <CardItem
        key={element.id}
        id={element.id}
        title={element.title}
        series={element.series}
        active={props.data.currentId === element.id}
        image={element.images}
        firstModelId={element.firstModelId}
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