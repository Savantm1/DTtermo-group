import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class Slider extends Component {

   SlidesList = this.props.images.map((slide,index) => {
    return (
      <div key={index}>
        <img src={slide.path}  alt='slide_image' />
      </div>
    )
   })

  render() {

        return (
          <Carousel
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
          >
            {this.SlidesList}

                {/* <div>
                    <img src="http://testcarrier.dttermo.com/storage/fancoils/42ND1.jpg" />
                </div>
                <div>
                    <img src="http://testcarrier.dttermo.com/storage/fancoils/42ND1.jpg" />

                </div>
                <div>
                    <img src="http://testcarrier.dttermo.com/storage/fancoils/42ND1.jpg" />

                </div> */}
            </Carousel>
        );
    }
};

export default Slider;
