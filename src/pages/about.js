import React, { Component } from 'react';
import styles from './about.module.css';
const avatar = require('../assets/img/marc-aaron-avatar.gif');

class About extends Component {
  render() {
    return (
			<div className={styles.aboutMeParagraph}>
				<img className={styles.avatar} alt="Marc Glasser's Avatar" src={avatar}/>
				<p>DJ, Producer, Engineer, Teacher, Collaborator, Graphic Designer, Social Media Marketer, Small Business Owner, and Team-Member. These are some of the hats I’ve had to wear in my 10 year journey of pursuing a career in music. I’ve traveled around the world DJing, worked with people from all walks of life, and learned from my mistakes along the way.</p>
				<p>In 2017, I set out to become a web developer and I’ve been busy honing my skills in a variety of technologies including: HTML, CSS, JavaScript, React, Git, Node, Express, Photoshop, ThreeJS, 3D Modeling in Blender, and NoSQL databases (e.g. MongoDB).</p>
				<p>I’ve spent my life trying to understand how things work, why people do the things they do, and creating things for people. Nothing in life compares to the feeling of watching something you’ve worked on enter the world and have a tangible impact. To create things that move people has always been my raison d’être; whether that’s collaborating with others on a web experience or composing music that allows someone to transcend their personal struggles if even for a brief moment.</p>
			</div>
    );
  }
}

export default About;
