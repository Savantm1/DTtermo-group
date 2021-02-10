import React from 'react'
import AccessoryItem from '../../AccessoryItem/AcessoryItem';
import styles from "./AccessoriesSection.module.scss";

let AccessoriesSection = (props) => {

  let AccessoriesTypesElements = props.data.accessoriesTypes.map((element) => {

    return (
      <AccessoryItem
        key = {element.id}
        title={element.name}
        image={element.images[0].path}      
        desc={element.decryption}
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