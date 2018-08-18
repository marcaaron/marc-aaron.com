import React, { Fragment } from 'react';
import styles from './Projects.module.css';
import { FAChevronRight } from './icons';
import Link from 'gatsby-link';
import Media from "react-media";

const ProjectItem = ({project}) => {
  return (
    <Fragment>
      <Link to={`/${project.slug}`} className={`${styles.projectItem} ${styles.projectItemMobile}`}>
        {project.name}
        <FAChevronRight size={20} color={'#c1c1c1'}/>
      </Link>
      <Link to={`/${project.slug}`} className={`${styles.projectItem} ${styles.projectItemDesktop}`}>
        <span className={styles.projectNameTag}>{project.name}</span>
        <div className={styles.imgContainer}>
          <img src={project.img.url} alt={project.name}/>
        </div>
      </Link>
    </Fragment>
  );
}
export default ProjectItem;
