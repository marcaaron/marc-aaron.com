import React, {Fragment} from 'react';
import Links from '../components/Links';
import LinkList from '../components/LinkList';
import Link from 'gatsby-link';
import Media from "react-media";

const LinkPage = ({history}) => (
  <Fragment>
    <Media query="(max-width:574px)">
      {matches=>matches &&
        <Fragment>
          <LinkList size={40}/>
          <Link to="/posts"><h2 style={{textAlign:'center', backgroundColor:'#fffefa', padding:20,margin:0}}>Recent Posts</h2></Link>
        </Fragment>
      }
    </Media>
    <Media query="(min-width:575px)">
      <LinkList size={100}/>
    </Media>
  </Fragment>
)
export default LinkPage;
