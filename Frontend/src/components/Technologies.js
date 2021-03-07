import React from 'react';
// const tools = [
//   {
//     toolName: 'HTML5',
//     iconClass: ' fab fa-html5 fa-2x',
//   },
//   {
//     toolName: 'Vanilla JavaScript',
//     iconClass: 'fab fa-js fa-2x',
//   },
//   {
//     toolName: 'Css',
//     iconClass: 'fab fa-css3 fa-2x',
//   },
//   {
//     toolName: 'React',
//     iconClass: 'fab fa-react fa-2x',
//   },
//   {
//     toolName: 'Vue',
//     iconClass: 'fab fa-vuejs fa-2x',
//   },
//   {
//     toolName: 'GatsbyJS',
//     iconClass: 'devicon-gatsby-plain fa-2x',
//   },
//   {
//     toolName: 'Sass',
//     iconClass: 'fab fa-sass fa-2x',
//   },

//   {
//     toolName: 'Styled Components',
//     iconClass: 'fa fa-paint-brush fa-2x',
//   },
//   {
//     toolName: 'MongoDB',
//     iconClass: 'fa fa-database fa-2x',
//   },
//   {
//     toolName: 'Sanity io',
//     iconClass: 'sanity',
//   },
//   {
//     toolName: 'Shopify',
//     iconClass: 'fab fa-shopify fa-2x',
//   },
//   {
//     toolName: 'GitHub',
//     iconClass: 'fab fa-github-square fa-2x',
//   },
//   {
//     toolName: 'Bit Bucket',
//     iconClass: 'fab fa-bitbucket fa-2x',
//   },
//   {
//     toolName: 'Jira',
//     iconClass: 'fab fa-jira fa-2x',
//   },
// ];

const Technologies = ({ tools }) => {
  console.log(tools);

  return (
    <>
      <div className='main-bio__technologies'>
        <h2>Toolkit</h2>
        <ul className='main-bio__tools-list'>
          {tools.nodes.map((tool) => {
            return (
              <li className='main-bio__tool' key={tool.technologyName}>
                <i className={`${tool.iconClasses} `}></i>
                {tool.technologyName}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Technologies;
