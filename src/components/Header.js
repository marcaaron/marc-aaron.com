import React, { Component } from 'react';
import '../css/Header.css';
import MediaQuery from 'react-responsive';
import Links from './Links';

class Header extends Component {
  render() {
		const {onClick} = this.props;
		const name = ["M","a","r","c"," ","A","a","r","o","n"," ","G","l","a","s","s","e","r"];
		const role = ["W","e","b"," ","D","e","v","e","l","o","p","e","r"];
		const transX = Array.from({length:31},()=>Math.random()<0.5 ? Math.abs(Math.floor(Math.random() * Math.floor(400))) : -Math.abs(Math.floor(Math.random() * Math.floor(400))));
		const transY = Array.from({length:31},()=>Math.random()<0.5 ? Math.abs(Math.floor(Math.random() * Math.floor(400))) : -Math.abs(Math.floor(Math.random() * Math.floor(400))));
		const angles = Array.from({length:31},()=>Math.random()<0.5 ? Math.abs(Math.floor(Math.random() * Math.floor(360))) : -Math.abs(Math.floor(Math.random() * Math.floor(360))));
		const scale = Array.from({length:31},()=>Math.random());
		const killStyles = transX.map((distance,index)=>{
			return {opacity:'0',transform:`scale(${scale[index]},${scale[index]}) rotate(${angles[index]}deg) translate(${transX[index]}px,${transY[index]}px)`}
		});
		const baseStyle={};
		// {transform: 'scale(1,1) rotate(0deg) translate(0px,0px)'};
		return [
			<MediaQuery key="header-mobile" maxWidth={574}>
				<header onClick={()=>onClick('projects')}>
					<span className="name">Marc Aaron Glasser</span>
					<span className="role">Web Developer</span>
				</header>
			</MediaQuery>,
			<MediaQuery key="header-tablet" minWidth={575}>
				<header>
					<div onClick={()=>onClick('projects')} className="header-left">
						{this.props.killHeader?
							<div className="back-button" style={{transform:'scale(1,1)',opacity:'1'}}>
								<i className="fas fa-arrow-left" style={{color:'#EC644B'}}></i>
								<span>&nbsp; Projects</span>
							</div>
							:
							<div className="back-button" style={{transform:'scale(0,0)',opacity:'0'}}>
								<i className="fas fa-arrow-left" style={{color:'#EC644B'}}></i>
								<span>&nbsp; Back</span>
							</div>
						}

						<div className="name-box">
						{this.props.killHeader ?
							name.map((letter,index)=> letter===' ' ? <div className="name" style={killStyles[index]} key={`_letter${index}`}>&nbsp;</div> : <div className="name" style={killStyles[index]} key={`_letter${index}`}>{letter}</div>
						)
							:
							name.map((letter,index)=> letter===' ' ? <div className="dirt" style={baseStyle} key={`_letter${index}`}>&nbsp;</div> : <div className="dirt" style={baseStyle} key={`_letter${index}`}>{letter}</div>
						)

						}
					</div>
					<div className="role-box">
						{this.props.killHeader ?
							role.map((letter,index)=> letter===' ' ? <div className="role" style={killStyles[18+index]} key={`_letter${18+index}`}>&nbsp;</div> : <div className="role" style={killStyles[18+index]} key={`_letter${18+index}`}>{letter}</div>
						)
							:
							role.map((letter,index)=> letter===' ' ? <div className="dirt" style={baseStyle} key={`_letter${18+index}`}>&nbsp;</div> : <div className="dirt" style={baseStyle} key={`_letter${18+index}`}>{letter}</div>
						)

						}
					</div>
					</div>
					<div className="header-right">
						<Links/>
						<div onClick={()=>onClick('about')} className="about-me-link">About Me</div>
					</div>
				</header>
			</MediaQuery>
    ];
  }
}

export default Header;
