import React from 'react';

import ImageGallery from 'react-image-gallery';
import "./image-gallery.scss";
import styles from './Slider.module.scss';
import slide_1 from "../../../assets/img/slide_1.jpg";
import slide_2 from "../../../assets/img/slide_2.jpg";
import slide_3 from "../../../assets/img/slide_3.jpg";
import slide_4 from "../../../assets/img/slide_4.jpg";
import slide_5 from "../../../assets/img/slide_5.jpg";

const images = [
  {
    original: slide_1,
    thumbnail: slide_1,
  },
  {
    original: slide_2,
    thumbnail: slide_2,
  },
  {
    original: slide_3,
    thumbnail: slide_3,
  },
  {
    original: slide_4,
    thumbnail: slide_4,
  },
  {
    original: slide_5,
    thumbnail: slide_5,
  },
];
 
class MyGallery extends React.Component {
  render() {
    return <ImageGallery className={styles.gallery} items={images}
      
      showPlayButton={false} autoPlay={false} />;
    
  }
}

export default MyGallery;