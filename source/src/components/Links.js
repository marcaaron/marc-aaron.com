import React, { Component } from 'react';
import '../css/Links.css';

class Links extends Component {

  state = {
    modalIsOpen: false
  }

  componentDidMount(){
  }

  handleModalClick = (e) => {
    e.preventDefault();
    this.setState({modalIsOpen:!this.state.modalIsOpen}, ()=>{
      this.openModal();
    });
  }

  openModal = () => {
    if(this.state.modalIsOpen){
      this.refs.modal.style.opacity='1';
      this.refs.modal.classList.add('after');
    }else{
      this.refs.modal.classList.remove('after');
    }
  }

  shouldModalHide = () => {
    if(!this.state.modalIsOpen){
      this.refs.modal.style.opacity='0';
    }
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
				<a onClick={this.handleModalClick}>
				<li>
					<i style={{margin:'10px'}} className="far fa-6x fa-envelope"></i>
				</li>
				</a>
        <div className="modal before"
          onTransitionEnd={this.shouldModalHide}
          ref="modal"
        >
          <div className="modal-header">Contact Information</div>
          <div className="modal-body">marc dot aaron dot glasser AT gmail dot com</div>
          <button onClick={this.handleModalClick} className="modal-btn">Bye Felicia!</button>
        </div>
			</ul>
    );
  }
}

export default Links;
