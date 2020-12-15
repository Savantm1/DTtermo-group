// import { YMaps, Map, Placemark } from 'react-yandex-maps';
// import styles from "./MapsContainer.module.scss";
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import map_mark from "../../assets/img/map_mark.png";

const AnyReactComponent = ({ text }) => <div><img src={map_mark} alt=""/></div>;

class MapsContainer extends Component {
  static defaultProps = {
    center: {
      lat: 55.7839505,
      lng: 37.7077057
    },
    zoom: 17.25
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '600px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACt_APP_GOOGLE_MAPS_API_KEY,
            language: 'ru',
            region: 'ru',
            libraries: ['places'],
            
          }}

          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={55.78434}
            lng={37.71040}
          />
        </GoogleMapReact>
      </div>
    );
  }
}



  // return (
  //   <YMaps query={{
  //     apikey: process.env.REACT_APP_YANDEX_API_KEY
      
  //   }}>
  //     <div className={styles.container}>
  //       <h2 className={styles.title}>Расположение главного офиса</h2>
  //       <Map className={styles.block}
  //         defaultState={{
  //           center: [55.784435, 37.709901],
  //           zoom: 16,
  //           controls: ['zoomControl', 'fullscreenControl']
  //         }}
  //         modules={['control.ZoomControl', 'control.FullscreenControl']}>
  //         <Placemark
  //           defaultGeometry={[55.784435, 37.709901]}
  //           properties={{
  //             balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system',
  //           }} />
  //       </Map>
  //     </div>
  //   </YMaps>
  // )



export default MapsContainer;
