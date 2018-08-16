import React, { Fragment } from 'react';
import styles from './Projects.module.css';
import { FAChevronRight } from './icons';
import Link from 'gatsby-link';
import Media from "react-media";

const ProjectItem = ({project}) => {
  return (
    <Fragment>
      <Media query="(max-width: 574px)">
        {matches => matches &&
          <Link to={`/${project.slug}`} className={styles.projectItem}>
            {project.name}
            <FAChevronRight size={20} color={'#c1c1c1'}/>
          </Link>
        }
      </Media>
      <Media query="(min-width: 575px)">
        {
          matches => matches &&
          <Link to={`/${project.slug}`} className={styles.projectItem}>
            <span className={styles.projectNameTag}>{project.name}</span>
            <div className={styles.imgContainer}>
              <img src={project.img.url} alt={project.name}/>
            </div>
          </Link>
        }
      </Media>
    </Fragment>
  );
}
export default ProjectItem;
