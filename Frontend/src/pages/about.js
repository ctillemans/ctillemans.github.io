import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
// import '../../public/static/devicon-master/devicon.min.css';
import Technologies from '../components/Technologies';

export default function about({ data }) {
  console.log(data);
  return (
    <>
      {/* small bio */}
      <div className=' main-bio'>
        <div className='grid-container'>
          <div className='grid-container__row'>
            <div className='col-12 col-lg-6 '>
              <div className='main-bio__card'>
                <div className='main-bio__card-title'>
                  <h1>About Me</h1>
                </div>
                <div className='main-bio__card-description'>
                  <p>
                    Hi, my name is Cass. I am a full stack web developer with a passion for solving
                    problems and building things. I love working on teams and interacting with
                    designers and developers on projects.
                  </p>
                  <p>
                    I have had the opportunity to work with agencies, open source projects and
                    directly with business owners to build solutions to grow businesses in the
                    eccomerce sector.
                  </p>

                  <p>
                    My background in editing, marketing and motion graphics eventually led me into
                    the path of frontend web development.
                  </p>

                  <p>
                    When I am not sitting behind my laptop, I enjoy spending time outside with my
                    wife and dogs, mountain biking, surfing and being in the mountains.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6 col'>
              <Technologies tools={data.tools} />
            </div>
          </div>
        </div>
      </div>
      {/* technologies */}
      {/* some images */}
    </>
  );
}

export const query = graphql`
  query technologiesQuery {
    tools: allSanityTechnologies {
      nodes {
        id
        technologyName
        technologyType
        technologyDescription
        iconClasses
      }
    }
  }
`;
