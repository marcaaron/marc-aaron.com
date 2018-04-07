import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TabContainer from './components/TabContainer';
import Projects from './components/Projects';
import About from './components/About';
import Links from './components/Links';
import Project from './components/Project';
import MediaQuery from 'react-responsive';

class App extends Component {
	constructor(){
		super();
		this.state = {
			selected:'projects',
			projectIsOpen:false,
			currentProject:{},
			stickyTab: false,
			killHeader: false
		};
	}

	componentDidMount(){
		window.addEventListener('resize',this._onResize);
		window.addEventListener('scroll', this.isScrolling);
	}

	_onResize = () => {
		if(window.innerWidth>575 && this.state.selected==='links'){
			const selected = 'projects';
			this.setState({selected});
		}
	}

	isScrolling = () => {
		if(window.scrollY>=80 && this.state.stickyTab === false){
			const stickyTab = true;
			this.setState({stickyTab});
		}else if(window.scrollY<80 && this.state.stickyTab === true){
			const stickyTab = false;
			this.setState({stickyTab});
		}
	}

	_onTabClick = (selected) => {
		window.scrollTo(0,0);
		let {projectIsOpen, currentProject, killHeader} = this.state;
		if(projectIsOpen){
			killHeader = !killHeader;
			projectIsOpen = !projectIsOpen;
			currentProject = {};
		}
		if(selected==='about'){
			killHeader=true;
		}
		if(selected==='projects' && !projectIsOpen){
			killHeader = false;
		}
		this.setState({selected, currentProject, killHeader, projectIsOpen});
	}

	_onProjectClick = (project) => {
		const projectIsOpen = true;
		const currentProject = project;
		const killHeader = true;
		this.setState({killHeader, projectIsOpen, currentProject});
	}

  render() {
		const {selected, currentProject, killHeader, stickyTab, projectIsOpen} = this.state;
		const trapezoidStyle = {};
		const cardStyle = {};
		if(stickyTab && window.innerWidth<575){
			trapezoidStyle.position='fixed';
			trapezoidStyle.width=`${window.innerWidth-11}px`;
			trapezoidStyle.top='64px';
			cardStyle.marginTop = '79px';
		}

    return (
      <div className="App"
			>
			<div className="content-container">
				<Header killHeader = {killHeader} onClick={this._onTabClick}/>
				<MediaQuery maxWidth={574}>
					<TabContainer
						projectIsOpen={projectIsOpen}
						_onTabClick={this._onTabClick}
						selected={selected}
						stickyTab={stickyTab}
					/>
				<div className="trapezoid" style={trapezoidStyle}></div>

				</MediaQuery>

				<div
					className="card" style={cardStyle}
				>
					{selected==='projects' && !projectIsOpen &&
						<Projects _onProjectClick={this._onProjectClick}/>
					}

					{projectIsOpen &&
						<Project project={currentProject}/>
					}

					{selected==='about' &&
						<About />
					}
					{selected==='links' &&
						<Links />
					}
				</div>
				</div>
				<Footer/>
      </div>
    );
  }
}

export default App;
