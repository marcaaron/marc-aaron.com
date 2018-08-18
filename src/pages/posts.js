import React from 'react'
import Link from 'gatsby-link'
import Blogs from '../components/Blogs';

const IndexPage = ({data}) => {
  const { allPost: { edges } } = data;
  return(
    <div>
      <Blogs posts={edges}/>
    </div>
  )
}

export const query = graphql`
  query AllPost{
  allPost{
    edges{
      node{
        id
        title
        url
        source
        img{
          url
        }
        createdAt
      }
    }
  }
}
`;

export default IndexPage
