import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from "react";
import styles from "./MapsContainer.module.scss";


const MapsContainer = (props) => {

  return (
    <YMaps query={{
      apikey: process.env.REACT_APP_YANDEX_API_KEY
      
    }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Расположение главного офиса</h2>
        <Map className={styles.block}
          defaultState={{
            center: [55.784435, 37.709901],
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}>
          <Placemark
            defaultGeometry={[55.784435, 37.709901]}
            properties={{
              balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system',
            }} />
        </Map>
      </div>
    </YMaps>
  )

}

export default MapsContainer;
