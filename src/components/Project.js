import React, { Component } from 'react';
import '../css/Project.css';
import MediaQuery from 'react-responsive';

class Project extends Component {
	render() {
		const {project} = this.props;
    return (
			<div className="project-single-container">
				<div className="project-name">
					{project.name}
				</div>

				<MediaQuery maxWidth={574}>
					<img className="project-image" alt={`A screenshot of the ${project.name} application.`} src={project.img}/>
				</MediaQuery>

				<MediaQuery minWidth={575}>
					<img className="project-image" alt={`A screenshot of the ${project.name} application.`} src={project.imgMock}/>
				</MediaQuery>
				<div className="project-information">
					<div className="project-title">
						<em>{project.title}</em>
					</div>
					<div className="project-description">
						{project.description}
					</div>
					<div className="project-tools">
						<em>{project.tools}</em>
					</div>
					<i className="fas fa-code-branch fa-3x"></i>

					<div className="project-url">
						<a href={`http://${project.url}`}>{project.url}</a>
					</div>
				</div>
			</div>
    );
  }
}

export default Project;
