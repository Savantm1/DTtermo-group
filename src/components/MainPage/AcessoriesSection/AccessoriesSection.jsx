import React from 'react'
import AccessoryItem from '../../AccessoryItem/AcessoryItem';
import styles from "./AccessoriesSection.module.scss";

let AccessoriesSection = (props) => {
debugger
  let AccessoriesTypesElements = props.data.accessoriesTypes.map((element) => {

    return (
      <AccessoryItem
        key = {element.id}
        title={element.name}
        image={element.images[0].path}
        // desc={element.description}
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