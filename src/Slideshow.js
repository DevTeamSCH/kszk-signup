import React, { Component } from 'react';
import Slider from 'react-slick';
import _ from 'lodash';
import './App.css';

class Slideshow extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      adaptiveHeight: true
    };
    const { start, stop } = this.props;

    return (
      <Slider {...settings}>
        {
          _.range(start, stop + 1).map(i => {
            console.log(i);
            return (
                <img
                  src={`markdown/images/${i}.JPG`}
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
