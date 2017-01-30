import React, { Component } from 'react';
import Slider from 'react-slick';
import _ from 'lodash';
import './App.css';

class Slideshow extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 7000,
      pauseOnHover: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true
    };
    // adaptiveHeight not needed if there is no image with wrong ratio
    const { start, stop } = this.props;

    return (
      <Slider {...settings}>
        {
          _.range(start, stop + 1).map(i => {
            return (
                <img
                  key={i}
                  src={`markdown/images/${i}.jpg`}
                  role="presentation"
                  className="uk-margin-remove"
                />
            );
          })
        }
      </Slider>
    );
  }
}

export default Slideshow;
