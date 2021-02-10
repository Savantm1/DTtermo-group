import React from 'react'
import CardItem from '../../CardItem/CardItem';
import styles from "../FancoilsSection/FancoilSection.module.scss";

let FancoilSection = (props) => {

  let fancoilTypesElements = props.data.fancoilTypes.map((element,index) => {

    if (index < 3) {
      return (
        <CardItem
          key={element.id}
          id={element.id}
          title={element.type}
          series={element.series}
          active={props.data.currentId === element.id}
          image={element.images}
          firstModelName={element.firstModelName}
          available={"В наличии"}
        />
      );
    } else {
      return (
        <CardItem
          key={element.id}
          id={element.id}
          title={element.type}
          series={element.series}
          active={props.data.currentId === element.id}
          image={element.images}
          firstModelName={element.firstModelName}
          available={"Под заказ"}
        />
      );
    }
    
  });


  return (
    <div className={styles.cards_block}>
    {fancoilTypesElements}
  </div>
  )
}

export default FancoilSection;