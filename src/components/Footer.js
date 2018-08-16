import React, { Component } from 'react';
import FaHeart from './fa-heart';

class Footer extends Component {
  render() {
    return (
			<footer>
				<span>Made with &nbsp;</span>
				<FaHeart/>
				<span>&nbsp; in Washington</span>
			</footer>
    );
  }
}

export default Footer;
