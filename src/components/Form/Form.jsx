import styles from "./Form.module.scss";
import React, {  useState, useEffect } from "react";
import { API } from '../../api/api';
import { NavLink } from "react-router-dom";


let Form = (props)=> {
   
//изменение value 

  const [email, setEmail] = useState('');
  const [name,setName] = useState('');
  const [delivery,setDelivery] = useState(true);
  const [deliveryAdress,setDeliveryAdress] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

//фокус на поле

  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [deliveryDirty,setDeliveryDirty] = useState(false);

// ошибки
 
  const [emailError, setEmailError] = useState('Поле не может быть пустым');
  const [nameError, setNameError] = useState('Поле не может быть пустым');
  const [deliveryError,setDeliveryError] = useState('Введите адрес доставки');
  // const [privacyError, setPrivacyError] = useState('Необходимо дать согласие на обработку даных')
   // валидность формы 

  const [formValid,setFormValid] = useState(false);

// проверка валидности  для кнопки отправки

   useEffect(() => {
    if(emailError || nameError || (deliveryError && delivery) || !privacy ){
      setFormValid(false)
    }else{
      setFormValid(true)
    }  
  }, [emailError,nameError,deliveryError,delivery,privacy])


// пользователь убрал фокус с поля

  const BlurHandler = (evt) => {
    switch (evt.target.name){
      case 'email':
        setEmailDirty(true)
        break
      case 'name': 
        setNameDirty(true)
        break
      case 'adress':
        setDeliveryDirty(true)
        break
        default: break
    }
  };

  // функции валидации конкретного поля

  const EmailHandler = (evt) => {
    setEmail(evt.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(evt.target.value).toLowerCase())){
        setEmailError("Некорректный Email")
    }else {
        setEmailError("")
    }
  };

  const NameHandler = (evt) => {
    setName(evt.target.value)
    if(evt.target.value.length <= 2){
      setNameError('Введите не менее 3х символов')
    }else {
      setNameError('')
    }
  }

  const deliveryHandler = (evt) => {
    setDeliveryAdress(evt.target.value);
    if(evt.target.value.length < 5){
      setDeliveryError('Некорректный адрес')
    }else {
      setDeliveryError('')
    }
  }

  const privacyHandler = () => {
    setPrivacy(!privacy);
  }

  const deliveryCheckedHandler = () => {
    setDelivery(!delivery);
  }

  const messageHandler = (evt) => {
    setMessage(evt.target.value);
  }

  const phoneHandler = (evt) => {
    setPhone(evt.target.value)
  }

  const companyHandler = (evt) => {
    setCompany(evt.target.value)
  }


  const submitHandler = () => {
    let Fancoins = props.tablesData.fancoils;
    let Accessories = props.tablesData.accessories; 
    let personData = {
      'delivery' : delivery,
      'adress' : deliveryAdress,
      'mail' : email,
      'name' : name,
      'company' : company,
      'phone' : phone,
      'privacy' : privacy,
      'message': message,
    }

    let data = [Fancoins,Accessories,personData]
    API.PostSpecification(data);
    console.log(JSON.stringify(data));
  }
  



    return (
      <div className={styles.block}>
        <h1 className={styles.title}> Оформление заказа</h1>
        <form className={styles.form} id="form">
          <div className={styles.row}>   
            <input
              type="radio"
              id={styles.delivery}
              name="delivery"
              value="Доставка"
              onClick={deliveryCheckedHandler}
              defaultChecked={delivery}
            />
            <label htmlFor={styles.delivery} className={styles.radio}>
              Доставка
            </label>
            <input
              className={deliveryError.length === 0 ? `${styles.show_input} ${styles.current}`  : styles.show_input}
              type="text"
              name="adress"
              placeholder="Введите адрес доставки"
              onChange={deliveryHandler}
              onBlur={BlurHandler}
              value={deliveryAdress}
            />
            {(deliveryDirty) && <div className={styles.error} >{deliveryError}</div>}
          </div>
          <div className={styles.row}>
            <input
              
              type="radio"
              id="pickup"
              value="Самовывоз"
              name="delivery"
              defaultChecked={!delivery}
              onClick={deliveryCheckedHandler}
            />
            <label htmlFor="pickup" className={styles.radio}>
              Самовывоз
            </label>
          </div>

          <div className={styles.row}>
          {(nameDirty) && <div className={styles.error} >{nameError}</div>}
            <input 
              className={nameError.length === 0 ? styles.current : null }
              type="text"
              placeholder="Имя*"
              name="name"
              value={name}
              onChange={NameHandler}
              onBlur={BlurHandler}
            />
          </div>
          <div className={styles.row}>
            <input
              type="text"
              name="company"
              placeholder="Компания"
              onChange={companyHandler}
              value={company}
            ></input>
          </div>
          <div className={emailError.length ? styles.row : `${styles.row} ${styles.current}`}>
          {(emailDirty) && <div className={styles.error}>{emailError}</div>}
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className={emailError.length === 0 ? styles.current : null }
              onBlur={ evt => BlurHandler(evt)}
              onChange={evt => EmailHandler(evt)}
              value={email}
            ></input>
          </div>
          <div className={styles.row}>
            <input
              
              type="phone"
              name="phone"
              placeholder="Телефон"
              onChange={phoneHandler}
              value={phone}
            ></input>
          </div>
          <div className={styles.row}>
            <textarea
              className={styles.textarea}
              id=""
              cols="30"
              rows="10"
              name="message"
              placeholder="Введите Ваше сообщение"
              onChange={messageHandler}
              value={message}
            ></textarea>
          </div>
          <div className={styles.row}>
            <p className={styles.text} onClick={submitHandler}>Приватность:</p>

            <input
              type="checkbox"
              className={ styles.checkbox }
              name="agree_privacy"
              id="checkbox"
              onClick={privacyHandler}
            />
            <label htmlFor="checkbox">
              Я даю свое согласие на обработку моих персональных данных, в
              соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О
              персональных данных» *
            </label>
          </div>
          <NavLink to="/modal">
          <button
            className={styles.btn}
            type="submit"
            disabled={!formValid}
            onClick={submitHandler}
          >
            Отправить
          </button>
          </NavLink>
        </form>
      </div>
    );
  }


export default Form;
