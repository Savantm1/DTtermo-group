import React, { useState } from 'react';
import styles from './About.module.scss';
import features_1 from '../../assets/img/features_1.svg';
import features_2 from '../../assets/img/features_2.svg';
import features_3 from '../../assets/img/features_3.svg';
import features_4 from '../../assets/img/features_4.svg';
import features_5 from '../../assets/img/features_5.svg';
import features_6 from '../../assets/img/features_6.svg';
import certificate from "../../assets/img/certificate.jpg";
import { SRLWrapper } from "simple-react-lightbox";

import slide_1 from "../../assets/img/slide_1.jpg";
import slide_2 from "../../assets/img/slide_2.jpg";
import slide_3 from "../../assets/img/slide_3.jpg";
import slide_4 from "../../assets/img/slide_4.jpg";
import slide_5 from "../../assets/img/slide_5.jpg";

import about from "../../assets/img/about.jpg";
import Form from '../Form/Form';
import MyGallery from './Slider/Slider';
import LightboxGallery from '../LightboxGallery/LighboxGallery';

let About = (props) => {

  const options = {

    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false,
      showFullscreenButton: false
    }
  }

  // let slides = React.createRef();
  // let step = 320;
  // let maxRight = 640;
  // let minRight = 0;
  // let currentRight = 0;

  // let clickLeft = (e) => {
  //   e.preventDefault();
  //   // slides.current.style.right = currentRight;
  //   if (currentRight < maxRight) {
  //     currentRight += step;
  //     slides.current.style.right = currentRight + "px";
  //   } else {
  //     currentRight = minRight;
  //     slides.current.style.right = currentRight + "px";
  //   }
  // }

  // let clickRight = (e) => {
  //   e.preventDefault();
  //   // slides.current.style.right = currentRight;
  //   if (currentRight > minRight) {
  //     currentRight -= step;
  //     slides.current.style.right = currentRight + "px";
  //   } else {
  //     currentRight = maxRight;
  //     slides.current.style.right = currentRight + "px";
  //   }
  // }

  const [toggler, setToggler] = useState(false);


  return (

    <div className={styles.content}>

        <section className={styles.block}>
          <h2 className={styles.title}>О компании</h2>
          <p className={styles.description}>
            Компания ДТ ТЕРМО ГРУПП основана в 2001 году, на протяжении всего времени она занимает лидирующие позиции, как поставщик оборудования и материалов для систем ОВК и ВК на Российском рынке и в странах СНГ. 
          <img className={styles.about_img} src={about} alt="DTtermo"/>
            Мы всегда идем в ногу со временем, анализируем ситуацию на рынке и модернизируем свои внутренние рабочие процессы, исходя из потребностей покупателей на текущий момент. Мы постоянно проводим мониторинг нового и уже существующего оборудования и материалов для того, чтобы предоставить нашим клиентам наиболее обширную линейку только качественной продукции в различной ценовой категории.
            Создание выгодных условий для наших клиентов, построение долгосрочных партнерских отношений, постоянное повышение качества сервиса и обслуживания – это те принципы, на которых строится развитие нашей компании.
            За долгое время работы мы накопили бесценный опыт. Высокое качество, надежность и эффективность предлагаемых нами технических решений были подтверждены в условиях реальной эксплуатации на тысячах объектов по всей России, среди которых типовые объекты (торговые центры, офисные здания, гостиницы, жилые комплексы, автосалоны и т.п.) и объекты, отличающиеся узкой спецификой (объекты нефтяной промышленности, медицинские учреждения, фармацевтические комплексы, производственные объекты и т.п.). Многолетняя работа с данными объектами говорит о профессиональной компетентности нашей компании в направлении ОВК и ВК.
          </p>
        </section>
        <section className={styles.features}>
        <h2 className={styles.title}>Основные преимущества</h2>
          <div className={styles.item}>
            <img className={styles.features_img} src={features_1} alt="" />
            <p className={styles.text}>Постоянное наличие фанкойлов на складе в Москве</p>
          </div>
          <div className={styles.item}>
            <img className={styles.features_img} src={features_2} alt="" />
            <p className={styles.text}>Конкурентные цены и индивидуальный подход</p>
          </div>
          <div className={styles.item}>
            <img className={styles.features_img} src={features_3} alt="" />
            <p className={styles.text}>Профессиональная техническая поддержка</p>
          </div>
          <div className={styles.item}>
            <img className={styles.features_img} src={features_4} alt="" />
            <p className={styles.text}>Разработка и проектирование документации на Ваш объект</p>
          </div>
          <div className={styles.item}>
            <img className={styles.features_img} src={features_5} alt="" />
            <p className={styles.text}>Гарантийное и постгарантийное обслуживание</p>
          </div>
          <div className={styles.item}>
            <img className={styles.features_img} src={features_6} alt="" />
            <p className={styles.text}>Самый большой каталог запасных частей</p>
          </div>
        </section>
        {/* <section className={styles.certificate}>
        <h3 className={styles.title}>Официальный дилер</h3>
          <div className={styles.block}>

            <img className={styles.img} src={certificate} alt="certificate" onClick={() => setToggler(!toggler)} />
              <FsLightbox toggler={toggler} sources={[certificate]}/>
            <div className={styles.right_side}>

              <p className={styles.desc}>Компания "DTtermo GROUP" является сертифицированным официальным дилером продукции Carrier</p>
              <a className={styles.btn} href="#"> Проверить сертификат</a>
            </div>
          </div>
        </section> */}
        <section className={styles.sklad}>
          <div>
            <h3 className={styles.title}>Наши складские помещения</h3>
            <p className={styles.desc}>На удобно расположенном складе, постоянно в наличии широкий ассортимент фанкойлов, чиллеров, компрессорно-конденсаторных блоков (ККБ), гидромодулей, насосов, накопительных блоков, запорно-регулирующей арматуры, а также запасных частей. DTtermo GROUP гарантирует стабильные поставки, оптимальное ценообразование, мощную техническую и информационную поддержку дилеров.</p>
        </div>
        
        <SRLWrapper className={styles.wrapp_gallery} options={options} >
          <section className={styles.sklad_gallery}>
            <img className={styles.gallery_img} src={slide_1} alt="" />
            <img className={styles.gallery_img} src={slide_2} alt="" />
            <img className={styles.gallery_img} src={slide_3} alt="" />
            <img className={styles.gallery_img} src={slide_4} alt="" />
            <img className={styles.gallery_img} src={slide_5} alt=""/>
          </section>
        </SRLWrapper>
          {/* <div className={`${styles.arrow_block} ${styles.arr_left}`} onClick={clickLeft}>
            <img className={styles.arrow} src={arrow_left} alt="#" />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.container} ref={slides} id="bbb">
              <div className={styles.slide}>
                <img className={styles.img} src={slide_1} alt=""/>
              </div>
              <div className={styles.slide}>
                <img className={styles.img} src={slide_2} alt=""/>
              </div>
              <div className={styles.slide}>
                <img className={styles.img} src={slide_3} alt=""/>
              </div>
              <div className={styles.slide}>
                <img className={styles.img} src={slide_4} alt=""/>
              </div>
              <div className={styles.slide}>
                <img className={styles.img} src={slide_5} alt=""/>
              </div>
            </div>
          </div> */}
          {/* <div className={`${styles.arrow_block} ${styles.arr_right}`} onClick={clickRight}>
            <img className={styles.arrow} src={arrow_right} alt="#" />
          </div> */}
  {/* 
        <MyGallery/> */}
          
        </section>

        <section className={styles.form_section}>
        <Form />

         
      </section>
      
    </div>
  )
};

export default About;