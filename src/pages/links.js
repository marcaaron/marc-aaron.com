import React, {Fragment} from 'react';
import Links from '../components/Links';
import MediaQuery from 'react-responsive';
import LinkList from '../components/LinkList';
import Link from 'gatsby-link';

const LinkPage = ({history}) => (
  <Fragment>
    <MediaQuery key="_mW767" maxWidth={574}>
      <LinkList size={40}/>
      <Link to="/posts"><h2 style={{textAlign:'center', backgroundColor:'#fffefa', padding:20,margin:0}}>Recent Posts</h2></Link>
    </MediaQuery>
    <MediaQuery key="_mW768" minWidth={575}>
      <LinkList size={100}/>
    </MediaQuery>
  </Fragment>
)
export default LinkPage;
