import React, {Fragment} from 'react';
import Links from '../components/Links';
import LinkList from '../components/LinkList';
import Link from 'gatsby-link';
import styles from './links.module.css';

const LinkPage = ({history}) => (
  <Fragment>
    <div className={styles.listMobile}>
      <LinkList/>
      <Link to="/posts"><h2 style={{textAlign:'center', backgroundColor:'#fffefa', padding:20,margin:0}}>Recent Posts</h2></Link>
    </div>
    <div className={styles.listDesktop}>
      <LinkList/>
    </div>
  </Fragment>
)
export default LinkPage;
