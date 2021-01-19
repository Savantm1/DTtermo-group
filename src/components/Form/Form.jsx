import styles from "./Form.module.scss";
import React, { createRef } from "react";
import cogoToast from "cogo-toast";
import { NavLink } from "react-router-dom";
import { API } from "../../api/api";

class Form extends React.Component {

  constructor(props) {
    debugger
    super(props);
    this.state = {
      adress: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      submitDisable: "disabled",
      PrivacyChecked: false,
      deliveryChecked: "false",
      nameValid: false,
      phoneValid: false
    };

    this.Delivery = React.createRef();
    this.DeliveryWithAdress = React.createRef();
    this.PrivateValue = React.createRef();
    this.InputChange = this.InputChange.bind(this);
    this.Submit = this.Submit.bind(this);

  }

  InputChange(event) {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
    this.setState({ checked: this.PrivateValue.current.checked });

    if (this.state.name.length > 1) {
      this.state.nameValid = true;
    }

    if (this.state.phone.length > 1) {
      this.state.phoneValid = true;
    }

    
    if ((this.state.name.length > 1) &&
        (this.state.phone.length > 1) &&
        (this.PrivateValue.current.checked == true) &&
        (this.Delivery.current.checked == true) ||
        (this.DeliveryWithAdress.current.checked == true && this.state.adress.length > 5)
    ) {

      this.setState({ submitDisable: "" });
    } else {

      this.setState({ submitDisable: "disabled" });
    }
  }

  Submit() {
    let FancoilsTable = this.props.tablesData.fancoils;
    let AccessoriesTable = this.props.tablesData.accessories;
    
    let IdentificationData = this.state;


    API.PostSpecification({
      IdentificationData,
      FancoilsTable,
      AccessoriesTable,
    });
    console.log(
      this.state.name,
      this.state.email,
      this.state.phone,
      this.state.message,
      this.state.adress
    );
    this.setState({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      adress: "",
      PrivacyChecked: false,
    });
    this.PrivateValue.current.checked = false;
    this.DeliveryWithAdress.current.checked = false;
    this.Delivery.current.checked = false;
    // cogoToast.success("Спасибо. Ваш вопрос передан в службу поддержки.", {
    //   position: "top-right",
    // });
    this.props.DeleteAll();
  }

  render() {
    
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
              onChange={this.InputChange}
              ref={this.DeliveryWithAdress}
            />
            <label htmlFor={styles.delivery} className={styles.radio}>
              Доставка
            </label>
            <input
              className={styles.show_input}
              type="text"
              name="adress"
              onChange={this.InputChange}
              value={this.state.adress}
              placeholder="Введите адрес доставки"
            />
          </div>
          <div className={styles.row}>
            <input
              type="radio"
              id="pickup"
              value="Самовывоз"
              name="delivery"
              onChange={this.InputChange}
              ref={this.Delivery}
              checked

            />
            <label htmlFor="pickup" className={styles.radio}>
              Самовывоз
            </label>
          </div>

          <div className={styles.row}>
            <input className={ this.state.nameValid? styles.current : styles.required}
              type="text"
              placeholder="Имя*"
              name="name"
              value={this.state.name}
              onChange={this.InputChange}
            ></input>
          </div>
          <div className={styles.row}>
            <input
              type="text"
              name="company"
              placeholder="Компания"
              value={this.state.company}
              onChange={this.InputChange}
            ></input>
          </div>
          <div className={styles.row}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.InputChange}
            ></input>
          </div>
          <div className={styles.row}>
            <input
              className={ this.state.phoneValid ? styles.current : styles.required}
              type="phone"
              name="phone"
              placeholder="Телефон*"
              // pattern="[^([9]{1}[0-9]{9})?$]"
              value={this.state.phone}
              onChange={this.InputChange}
            ></input>
          </div>
          <div className={styles.row}>
            <textarea
              className={styles.textarea}
              name=""
              id=""
              cols="30"
              rows="10"
              value={this.state.message}
              onChange={this.InputChange}
              name="message"
              placeholder="Введите Ваше сообщение"
            ></textarea>
          </div>
          <div className={styles.row}>
            <p className={styles.text}>Приватность:</p>

            <input
             
              type="checkbox"
              className={this.state.PrivacyChecked ? `${styles.checkbox} ${styles.current}` : `${styles.checkbox} ${styles.required}`}
              ref={this.PrivateValue}
              name="agree_privacy"
              id="checkbox"
              onChange={this.InputChange}
            />
            <label for="checkbox">
              Я даю свое согласие на обработку моих персональных данных, в
              соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О
              персональных данных» *
            </label>
          </div>
          <NavLink to="/modal">
          <button
            className={styles.btn}
            type="submit"
            onClick={this.Submit}
            disabled={this.state.submitDisable}
          >
            Отправить
          </button>
          </NavLink>
        </form>
      </div>
    );
  }
}

export default Form;
