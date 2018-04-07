import React, { Component } from 'react';
import '../css/Links.css';

class Links extends Component {

	alertBox = () =>{
		alert('marc dot aaron dot glasser at g mail dot com');
	}
  render() {
    return (
			<ul className="links-container">
				<a href="http://github.com/marcaaron">
					<li>
						<i style={{margin:'10px'}} className="fab fa-6x fa-github"></i>
					</li>
				</a>
				<a href="http://linkedin.com/in/marcaaron">
					<li>
						<i style={{margin:'10px'}} className="fab fa-6x fa-linkedin"></i>
					</li>
				</a>
				<a href="http://twitter.com/marcaarong">
					<li>
						<i style={{margin:'10px'}} className="fab fa-6x fa-twitter"></i>
					</li>
				</a>
				<a onClick={this.alertBox}>
				<li>
					<i style={{margin:'10px'}} className="far fa-6x fa-envelope"></i>
				</li>
				</a>
			</ul>
    );
  }
}

export default Links;
