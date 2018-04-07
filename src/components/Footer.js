import React, { Component } from 'react';
import '../css/Header.css';

class Footer extends Component {
  render() {
    return (
			<footer>
				<span>Made with &nbsp;</span>
				<i style={{color:'tomato'}} className="far fa-heart"></i>
				<span>&nbsp; in Washington</span>
			</footer>
    );
  }
}

export default Footer;
