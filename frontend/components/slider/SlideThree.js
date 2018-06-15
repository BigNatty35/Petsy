
import React, { Component } from 'react';

const SlideThree = (props) => {
  let background = {
    // backgroundImage: 'url(aurora.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return <div style={background} className="slide">
    <img className="slidePic" src="https://s3-us-west-1.amazonaws.com/productpics35/desertjunk.jpeg" alt="" />
  </div>;
};

export default SlideThree;