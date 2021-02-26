import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectList from '../components/ProjectList';

export default function projects({ data }) {
  console.log(data.projects.nodes);
  return (
    <>
      <PageHeader text='Projects' textPosition='center' bgColor='off-white' />
      {/* Projects Header -- make a more reusable header with image option, text, layout options, etc.*/}

      {/* projects filter-- filter by technology here*/}
      {/* Projects List-- will contain another component called project card */}
      <ProjectList projects={data.projects.nodes} />
    </>
  );
}

export const query = graphql`
  query projectsQuery {
    projects: allSanityProjects {
      nodes {
        featured
        projectTitle
        projectSubtitle
        projectDescription
        projectImages {
          image {
            asset {
              fluid {
                src
              }
              id
              title
            }
          }
        }
      }
    }
  }
`;

// run query here to get projects data and then pass it to  the projects list component
