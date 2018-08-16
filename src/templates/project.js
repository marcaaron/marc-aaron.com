import React, {Component} from "react";
import Helmet from "react-helmet";
import MediaQuery from 'react-responsive';
import styles from './project.module.css';

export default class ProjectTemplate extends Component {
  render(){
    const { project } = this.props.data;
    return (
  		<div className={styles.projectSingleContainer}>
        <Helmet title={`Marc Aaron Glasser - ${project.title}`} />
  			<div className={styles.projectName}>
  				{project.name}
  			</div>
  			<MediaQuery maxWidth={574}>
  				<img className={styles.projectImage} alt={`A screenshot of the ${project.name} application.`} src={project.img.url}/>
  			</MediaQuery>
  			<MediaQuery minWidth={575}>
  				<img className={styles.projectImage} alt={`A screenshot of the ${project.name} application.`} src={project.imgMock.url}/>
  			</MediaQuery>
  			<div className={styles.projectInformation}>
  				<div className={styles.projectTitle}>
  					<em>{project.title}</em>
  				</div>
  				<div className={styles.projectDescription}>
  					{project.description}
  				</div>
  				<div className={styles.projectTools}>
  					<em>{project.tools}</em>
  				</div>
  				<i className="fas fa-code-branch fa-3x"></i>
  				<div className={styles.projectUrl}>
  					<a href={`http://${project.url}`}>{project.url}</a>
  				</div>
  			</div>
  		</div>
    );
  }
}

export const pageQuery = graphql`
  query projectBySlug($slug:String!){
    project(slug:{eq: $slug}){
      id
      name
      title
      url
      description
      tools
      slug
      img{
        url
      }
      imgMock{
        url
      }
    }
  }
`;
