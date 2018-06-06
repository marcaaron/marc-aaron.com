import React, { Component } from 'react';

const Defs = () => {
  return(
    <defs>
      <linearGradient x1='100%' y1='100%' id='gradient-0'>
          <stop offset='100%' stopColor='#add8e6' stopOpacity='1'>
            <animate
              attributeName='stop-color' values='#ef3e3e;#ef9f3e;#efdd3e;#aeef3e;#3eefe9;#d489f4;#ef3e3e;'
              dur='5s'
              repeatCount='indefinite'
            />
            <animate
              attributeName='offset'
              values='.9;.6;.3;0;.3;0;.6;.9'
              dur='5s' repeatCount='indefinite'
            />
        </stop>
      </linearGradient>
    </defs>
  );
};

class FaHeart extends Component{
  state = {
    innerStyle: {},
    outerStyle: {transition:'fill 0.8s'},
    svgStyle: {width:'100%',maxWidth:'20px'},
    isHovering: false
  };

  handleMouseEnter = () => {
    const svgStyle = {width:'100%', maxWidth:'40px', transition:'max-width 0.3s'};
    const innerStyle = {};
    const outerStyle = {fill:'black', transition:'fill 0.8s'};
    const isHovering = true;
    this.setState({svgStyle, innerStyle, outerStyle, isHovering});
  }

  handleMouseLeave = () => {
    const innerStyle = {};
    const outerStyle = {transition:'fill 0.8s'};
    const svgStyle = {width:'100%',maxWidth:'20px', transition:'max-width 0.3s'};
    const isHovering = false;
    this.setState({ svgStyle, innerStyle, outerStyle, isHovering});
  }

  render(){
    const { svgStyle, innerStyle, outerStyle, isHovering } = this.state;
    return(
      <svg
        style={svgStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        viewBox='0 0 512 512'
        xmlns='http://www.w3.org/2000/svg'
        color='tomato'>
        <path
          style={outerStyle}
          fill='currentColor'
          d='M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z'
        />

        <path
          style={innerStyle}
          d='M 436.448 251.151 L 259.135 431.8 C 256.709 434.226 254.687 434.226 252.261 431.8 L 74.948 251.151 C 38.049 213.545 30.568 142.377 82.327 98.807 C 121.652 65.75 182.306 70.703 220.316 109.421 L 255.698 145.511 L 291.08 109.421 C 329.292 70.501 389.947 65.75 429.069 98.705 C 480.727 142.276 473.044 213.848 436.448 251.151 Z'
          fill={isHovering ? 'url(#gradient-0)' : 'tomato'}
        />
        { isHovering && <Defs/> }
      </svg>
    );
  }
}

export default FaHeart;
