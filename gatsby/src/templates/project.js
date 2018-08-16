import React, {Component} from "react";
import Helmet from "react-helmet";
import styles from './project.module.css';
import Media from "react-media";

const ProjectTemplate = ({data}) => {
  const { project } = data;
  return (
		<div className={styles.projectSingleContainer}>
      <Helmet title={`Marc Aaron Glasser - ${project.title}`} />
			<div className={styles.projectName}>
				{project.name}
			</div>
      <img className={`${styles.projectImage} ${styles.projectImageMobile}`} alt={`A screenshot of the ${project.name} application.`} src={project.img.url}/>
      <img className={`${styles.projectImage} ${styles.projectImageDesktop}`} alt={`A screenshot of the ${project.name} application.`} src={project.imgMock.url}/>
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

export default ProjectTemplate;
