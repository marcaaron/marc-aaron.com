import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class ProjectItem extends Component {

  render() {
		const {project, _onProjectClick} = this.props;
	  return [
			<MediaQuery key="_mW767" maxWidth={574}>
				<li onClick={()=>_onProjectClick(project)} className="project-item">
					{project.name}
					<i className="fas fa-chevron-right" style={{color:'#c1c1c1'}}></i>
				</li>
			</MediaQuery>,
			<MediaQuery key="_mW768" minWidth={575}>
				<li onClick={()=>_onProjectClick(project)} className="project-item">
					<span className="project-name-tag">{project.name}</span>
					<div className="img-container">
						<img src={project.img} alt={project.imgAlt}/>
					</div>
				</li>
			</MediaQuery>
    ];
  }
}

export default ProjectItem;
