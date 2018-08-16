import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';
import styles from './Projects.module.css';
import { FAChevronRight } from './icons';
import Link from 'gatsby-link';

const ProjectItem = ({project}) => {
  return (
    <Fragment>
      <MediaQuery key="_mW767" maxWidth={574}>
        <Link to={`/${project.slug}`} className={styles.projectItem}>
          {project.name}
          <FAChevronRight size={20} color={'#c1c1c1'}/>
        </Link>
      </MediaQuery>
      <MediaQuery key="_mW768" minWidth={575}>
        <Link to={`/${project.slug}`} className={styles.projectItem}>
          <span className={styles.projectNameTag}>{project.name}</span>
          <div className={styles.imgContainer}>
            <img src={project.img.url} alt={project.name}/>
          </div>
        </Link>
      </MediaQuery>
    </Fragment>
  );
}
export default ProjectItem;
