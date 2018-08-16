import React, { Component, Fragment, createRef } from 'react';
import styles from './Links.module.css';
import { GitHub, LinkedIn, Twitter, Mail } from './icons';

export default class LinkList extends Component {
  constructor(){
    super();
    this.modal = createRef();
    this.state = {
      modalIsOpen: false,
      modalStyles: [styles.modal, styles.before]
    }
  }

  handleModalClick = (e) => {
    e.preventDefault();
    this.setState({modalIsOpen:!this.state.modalIsOpen}, ()=>{
      this.openModal();
    });
  }

  openModal = () => {
    const modalStyles = [...this.state.modalStyles];
    if(this.state.modalIsOpen){
      this.modal.current.style.opacity='1';
      modalStyles.push(styles.after);
    }else{
      modalStyles.pop();
    }
    this.setState({modalStyles});
  }

  shouldModalHide = () => {
    if(!this.state.modalIsOpen){
      this.modal.current.style.opacity='0';
    }
  }

  render(){
    const { size } = this.props;
    const { modalStyles } = this.state;
    const { handleModalClick, shouldModalHide } = this;
    return(
    	<ul className={styles.linksContainer}>
    		<a href="http://github.com/marcaaron">
    			<li>
    				<GitHub size={size}/>
    			</li>
    		</a>
    		<a href="http://linkedin.com/in/marcaaron">
    			<li>
    				<LinkedIn size={size}/>
    			</li>
    		</a>
    		<a href="http://twitter.com/marcaarong">
    			<li>
    				<Twitter size={size}/>
    			</li>
    		</a>
    		<a onClick={handleModalClick}>
    		<li>
    			<Mail size={size}/>
    		</li>
    		</a>
        <div className={modalStyles.join(' ')}
          onTransitionEnd={shouldModalHide}
          ref={this.modal}
        >
          <div className={styles.modalHeader}>Contact Information</div>
          <div className={styles.modalBody}>marc dot aaron dot glasser AT gmail dot com</div>
          <button onClick={handleModalClick} className={styles.modalBtn}>Bye Felicia!</button>
        </div>
    	</ul>
    )
  }
}
