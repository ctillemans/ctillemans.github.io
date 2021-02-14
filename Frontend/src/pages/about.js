import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../public/static/devicon-master/devicon.min.css';

const about = () => {
  const tools = [
    {
      toolName: 'HTML5',
      iconClass: ' fab fa-html5 fa-2x',
    },
    {
      toolName: 'Vanilla JavaScript',
      iconClass: 'fab fa-js fa-2x',
    },
    {
      toolName: 'Css',
      iconClass: 'fab fa-css3 fa-2x',
    },
    {
      toolName: 'React',
      iconClass: 'fab fa-react fa-2x',
    },
    {
      toolName: 'Vue',
      iconClass: 'fab fa-vuejs fa-2x',
    },
    {
      toolName: 'GatsbyJS',
      iconClass: 'devicon-gatsby-plain fa-2x',
    },
    {
      toolName: 'Sass',
      iconClass: 'fab fa-sass fa-2x',
    },

    {
      toolName: 'Styled Components',
      iconClass: 'fa fa-paint-brush fa-2x',
    },
    {
      toolName: 'MongoDB',
      iconClass: 'fa fa-database fa-2x',
    },
    {
      toolName: 'Sanity io',
      iconClass: 'sanity',
    },
    {
      toolName: 'Shopify',
      iconClass: 'fab fa-shopify fa-2x',
    },
    {
      toolName: 'GitHub',
      iconClass: 'fab fa-github-square fa-2x',
    },
    {
      toolName: 'Bit Bucket',
      iconClass: 'fab fa-bitbucket fa-2x',
    },
    {
      toolName: 'Jira',
      iconClass: 'fab fa-jira fa-2x',
    },
  ];
  return (
    <>
      {/* small bio */}
      <div className=' main-bio'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4 '>
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
            <div className='col-12 col-md-8 col'>
              <div className='main-bio__technologies'>
                <h2>Toolkit</h2>

                <ul className='main-bio__tools-list'>
                  {tools.map((tool) => {
                    return (
                      <li className='main-bio__tool' key={tool.toolName}>
                        <i className={`${tool.iconClass} `}></i>
                        {tool.toolName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* technologies */}
      {/* some images */}
    </>
  );
};

export default about;
