import React from 'react'
import AccessoryItem from '../../AccessoryItem/AcessoryItem';
import styles from "../FancoilsSection/FancoilSection.module.scss";

let AccessoriesSection = (props) => {

  let AccessoriesTypesElements = props.data.accessoriesTypes.map((element) => {

    return (
      <AccessoryItem
        title={element.name}
        desc={element.description}
      />
    );
  });


  return (
    <div className={styles.cards_block}>
    {AccessoriesTypesElements}
  </div>
  )
}

export default AccessoriesSection;