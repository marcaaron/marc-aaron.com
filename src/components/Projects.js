import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import hcimg from '../img/hcestimator.png';
import medicaidmap from '../img/medicaid-map.png';
import ppl from '../img/ppl.png';
import hcMock from '../img/hc-mock.png';
import medicaidMock from '../img/medicaid-mock.png';
import pplMock from '../img/linear-ppl.png';

import '../css/Projects.css';

class Projects extends Component {
  render() {

		const projects = {
			healthcare:{
				id: '1',
				name:'Healthcare Estimator',
				title:'Yes on I-1600 Healthcare Savings Estimator (2018)',
				url:'github.com/marcaaron/ww-calc-2.0',
				description:'A survey and calculator tool featuring customizable form inputs, calculated results page, and dynamically generated screenshots of those results. Developed for use by the Whole Washington Organization.',
				tools:'Tools Used: JavaScript, React, HTML2Canvas, CSS Flexbox',
				actions:['Authored original source code and designed front end user interface.','Collaborated with volunteers to meet organization requirements.',
'Generated issue reports, assigned them to volunteer developers, and approved modifications to codebase.'],
				img:hcimg,
				imgMock:hcMock
			},
			medicaidMaps:{
				id: '2',
				name:'Medicaid Maps',
				title:'Medicaid Maps (2018)',
				url:'github.com/marcaaron/medicaid-maps',
				description:'Prototypical interactive map application for connecting patients with medicaid providers in Clark County, WA. Proposal submitted to the Washington State Health Care Authority for review and potential incorporation.',
				tools:'Tools Used: JavaScript, React, Mapbox GL JS API',
				img:medicaidmap,
				imgMock:medicaidMock
			},
			linearPPL:{
				id: '3',
				name:'Linear PPL Workout',
				title:'Linear PPL Workout (2017)',
				url:'github.com/marcaaron/linear-ppl',
				description:'A web application designed to track personal progress for the notoriously complicated Linear PPL workout popularized by u/metallicadpa via Reddit.',
				tools:'Tools Used: JavaScript, React, MongoDB, NodeJS, Express, AJAX, CSS Flexbox',
				img:ppl,
				imgMock:pplMock
			}
		};

		const projectArray = Object.keys(projects).map(function(key) {
    	return projects[key];
		});
		const {_onProjectClick} = this.props;

    return (
			<ul className="project-container">
				{projectArray.map(project=>
					<ProjectItem _onProjectClick={_onProjectClick} key={project.id} project={project}/>
				)}
			</ul>
    );
  }
}

export default Projects;
