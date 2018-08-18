import React, { Component } from 'react';
import { ArrowLeft } from './icons';
import Link from 'gatsby-link';
import styles from './TabContainer.module.css';

class Tab extends Component {
  render() {
		const {values, selected, projectIsOpen, handleClick} = this.props;
		let textStyle
		let iconStyle = {color: values.color};
		let hide = {};
		let show = {};
		if(values.name===selected){
			textStyle = {fontWeight:'700',transform:'scale(1.1,1.1)'};
		}
    return (
			<div
        onClick={()=>handleClick(values.name)}
        className={styles.tab}
        >
          {values.icon({size:20, color: values.color})}
					<span key={`text_${values.name}`} style={textStyle} className={styles.tabText}>{values.text}</span>
			</div>
    );
  }
}

export default Tab;
