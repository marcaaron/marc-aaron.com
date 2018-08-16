import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import styles from './Projects.module.css';

const Projects = ({projects}) => {
  return (
		<ul className={styles.projectContainer}>
			{projects.map(({node})=>
				<ProjectItem key={node.id} project={node}/>
			)}
		</ul>
  );
}

export default Projects;
