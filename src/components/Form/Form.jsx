import styles from "./Form.module.scss";
import React, { createRef } from "react";
import cogoToast from "cogo-toast";
import { NavLink } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    };

    this.PrivateValue = React.createRef();

    this.NameChange = this.NameChange.bind(this);
    this.CompanyChange = this.CompanyChange.bind(this);
    this.EmailChange = this.EmailChange.bind(this);
    this.PhoneChange = this.PhoneChange.bind(this);
    this.MessageChange = this.MessageChange.bind(this);

    this.Submit = this.Submit.bind(this);
  }

  NameChange(event) {
    this.setState({ name: event.target.value });
  }

  CompanyChange(event) {
    this.setState({ company: event.target.value });
  }

  EmailChange(event) {
    this.setState({ email: event.target.value });
  }
  PhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  MessageChange(event) {
    this.setState({ message: event.target.value });
  }

  Submit(event) {
    event.preventDefault();
    if (
      this.state.name.length > 2 &&
      this.state.company.length > 2 &&
      this.state.email.length > 2 &&
      this.state.message.length > 2 &&
      this.PrivateValue.current.checked === true
    ) {
      console.log(
        this.state.name,
        this.state.email,
        this.state.phone,
        this.state.message
      );
      this.setState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      this.PrivateValue.current.checked = false;
      cogoToast.success("Спасибо. Ваш вопрос передан в службу поддержки.", {
        position: "top-right",
      });
    } else {
      cogoToast.error(
        "Для рассмотрения Вашего вопроса необходимо заполнить все поля.",
        {
          position: "top-right",
        }
      );
    }
  }

  render() {
    return (
      <div className={styles.block}>
        <h1 className={styles.title}> Оформление заказа</h1>
        <form
          className={styles.form}
          method="POST"
          id="form"
          onSubmit={this.handleSubmit}
        >
          <div className={styles.row}>
            <input type="radio" id={styles.delivery} name="delivery" value="Доставка" />
            <label htmlFor={styles.delivery} className={styles.radio}>
              Доставка
            </label>
            <input className={styles.show_input} type="text" placeholder="Введите адрес доставки"/>
          </div>
          <div className={styles.row}>
            <input type="radio" id="pickup" value="Самовывоз" name="delivery" />
            <label htmlFor="pickup" className={styles.radio}>
              Самовывоз
            </label>
          </div>
         
          <div className={styles.row}>
            <input
              type="text"
              placeholder="Имя"
              value={this.state.name}
              required
              onChange={this.NameChange}
            ></input>
          </div>
          <div className={styles.row}>
            <input
              type="text"
              placeholder="Компания"
              value={this.state.company}
              required
              onChange={this.CompanyChange}
            ></input>
          </div>
          <div className={styles.row}>
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              required
              onChange={this.EmailChange}
            ></input>
          </div>
          <div className={styles.row}>
            <input
              type="phone"
              placeholder="Телефон"
              value={this.state.phone}
              onChange={this.PhoneChange}
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
              onChange={this.MessageChange}
              placeholder="Введите Ваше сообщение"
            ></textarea>
          </div>
          <div className={styles.row}>
            <p className={styles.text}>Приватность:</p>

            <input
              type="checkbox"
              className={styles.checkbox}
              ref={this.PrivateValue}
              name="agree"
              id="checkbox"
            />
            <label for="checkbox">
              Я даю свое согласие на обработку моих персональных данных, в
              соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О
              персональных данных» *
            </label>
          </div>
          <NavLink to="/modal">
          <button className={styles.btn} type="submit" onClick={this.Submit}>
            Отправить
          </button>
          </NavLink>

        </form>
      </div>
    );
  }
}

export default Form;
