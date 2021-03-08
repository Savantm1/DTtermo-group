import React from 'react';
import styles from './FancoilRow.module.scss';
import cogoToast from "cogo-toast";
import delete_icon from "../../../assets/img/delete.svg";
import minus from "../../../assets/img/minus.svg";
import plus from "../../../assets/img/plus.svg";


let FancoilRow = (props) => {
  
  let Input = React.createRef();

  let DeleteFromSpec = () => {
    props.DeletePositionFromSpec(props.index,props.tableName);
    props.DeletePositionFromSpecCounter(props.kol);
    cogoToast.success("Удалено из спецификации", {
      position: "top-right",
    });
  };

  let IncrementPosition = () => {
    props.AddProduct();
    props.IncrementPosition(props.index, props.tableName, props.kol);
  }

  let DecrementPosition = () => {
    props.DecrementProduct(props.kol);
    props.DecrementPosition(props.index, props.tableName, props.kol);
  }

  let ChangeQuantity = () => {
    let pervValue = props.kol;
    props.ChangeQuantity(props.index, props.tableName, Input.current.value);
    props.ChangeProduct(pervValue, Input.current.value);

  }
  

  


  return (

    <div className={styles.row}>
      <div className={styles.param}>{props.art} </div>
      <div className={styles.param}>{props.type} </div>
      <div className={styles.param}>{props.model} </div>
      <div className={styles.param}>
        <span className={styles.decrement} onClick={DecrementPosition}>
          <img
            className={styles.item_img}
            src={minus}
            width="20px"
            height="20px"
            alt="decrement"
          ></img>
        </span>
        <input type="text" className={styles.number_input}  value={props.kol}
         onChange={ChangeQuantity} ref={Input}/>
        <span className={styles.increment} onClick={IncrementPosition }>
          <img
            className={styles.item_img}
            src={plus}
            width="20px"
            height="20px"
            alt="increment"
          ></img>
        </span>
      </div>
      <div className={styles.param}>
        <button className={styles.btn}
          onClick={DeleteFromSpec}
        >
          <img
            className={styles.delete_img}
            src={delete_icon}
            alt="удалить"
          />
        </button>
      </div>
    </div>
    
  )
}

export default FancoilRow;