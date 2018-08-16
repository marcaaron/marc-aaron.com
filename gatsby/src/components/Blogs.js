import React, { Fragment } from 'react';
import styles from './Blogs.module.css';
import { dateToString } from '../util/functions';
import { FAClock } from './icons';

const PostLink = ({url,title, source, img, createdAt}) => (
  <a href={url} target="_blank">
    <div className={styles.linkWrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.dateTag}>
        <FAClock size={15}/> <span>{dateToString(createdAt)}</span>
      </p>
      <div className={styles.imageContainer}>
        <img className={styles.linkImage} src={img.url}/>
        <div className={styles.source}>via {source}</div>
      </div>

    </div>
  </a>
)

const Blogs = ({posts}) => {
  return(
    <div className={styles.pageWrapper}>
      <h2 className={styles.pageHeading}>Recent Posts</h2>
      <ul className={styles.linkList}>
        {posts.map(({node})=><PostLink key={node.id} {...node}/>)}
      </ul>
    </div>
  );
}

export default Blogs;
