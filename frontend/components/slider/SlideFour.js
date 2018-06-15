import React, { Component } from 'react';

const SlideFour = (props) => {
  let background = {
    // backgroundImage: 'url(aurora.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return <div style={background} className="slide">
    <img className="slidePic" src="https://s3-us-west-1.amazonaws.com/productpics35/oldphone.jpeg" alt="" />
  </div>;
};

export default SlideFour;



  