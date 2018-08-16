import React, { Component, Fragment } from 'react';
import styles from './TabContainer.module.css';
import Tab from './Tab';
import  { FABriefcase, FAUser, FALink } from './icons';

class TabContainer extends Component {
	constructor(){
		super();
		this.state = {
			tabContainerWidth: 0,
		}
	}

	componentDidMount(){
		this.updateWidth();
		window.addEventListener('resize', this._onResize);
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this._onResize);
	}

	updateWidth = () =>{
		const tabContainerWidth = window.innerWidth;
		this.setState({tabContainerWidth});
	}

	_onResize = () => {
		this.updateWidth();
	}


  render() {
		const {selected, stickyTab, projectIsOpen, _onTabClick} = this.props;
		let tabContainerStyle = {};
		let triangleStyle;
		const tabs = {
			projects:{
				name:'projects',
				color:'#EC644B',
				icon: FABriefcase,
				text:'Projects',
				calcOffset:(offset)=>`${offset-20}px`
			},
			about:{
				name:'about',
				color:'#F5D76E',
				icon:FAUser,
				text:'About Me',
				calcOffset:(offset)=>`${(offset*3)-20}px`
			},
			links:{
				name:'links',
				color:'#81CFE0',
				icon:FALink,
				text:'Links',
				calcOffset:(offset)=>`${(offset*5)-20}px`
			}
		};

		if(selected !== ''){
			const third = this.state.tabContainerWidth/3;
			const midpoint = third/2;
			const offset = tabs[`${selected}`].calcOffset(midpoint);
			const color = tabs[`${selected}`].color;
			tabContainerStyle.borderBottom = `3px solid ${color}`;
			triangleStyle = {display:'inline-block', borderColor: `${color} transparent transparent transparent`, opacity:'1', transform:`translateX(${offset})`}
		}
		if(stickyTab){
			triangleStyle.position = 'fixed';
			triangleStyle.top = '64px';
			tabContainerStyle.position = 'fixed';
			tabContainerStyle.top = '0';
			tabContainerStyle.width = '100%';
			// tabContainerStyle.display = 'none';
		}

		let tabArray = Object.keys(tabs).map(function(key) {
    	return tabs[key];
		});

    return (
      <Fragment>
  			<div key="t-container" className={styles.tabContainer} style={tabContainerStyle}>
  				{
  					tabArray.map(tab=>
  						<Tab
  							projectIsOpen={projectIsOpen}
  							key={tab.name}
  							handleClick={_onTabClick}
  							values={tab}
  							selected={selected}
  						/>)
  				}

  			</div>
  			<div key="tri" className={styles.triangle} style={triangleStyle} ></div>
      </Fragment>
    )
  }
}

export default TabContainer;
