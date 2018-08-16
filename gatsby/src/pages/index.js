import React from 'react'
import Link from 'gatsby-link'
import Projects from '../components/Projects';

const IndexPage = ({data}) => {
  const { allProject: { edges } } = data;
  return(
    <div>
      <Projects projects={edges}/>
    </div>
  )
}

export const query = graphql`
  query Projects {
    allProject{
      edges{
        node {
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
    }
  }
`;

export default IndexPage
