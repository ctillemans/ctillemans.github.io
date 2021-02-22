import * as React from 'react';
import '../styles/main.scss';
import Header from '../components/Header';
import GridTest from '../components/GridTest';

// markup
const IndexPage = () => {
  return (
    <main>
      <Header></Header>
      <GridTest></GridTest>
      {/* TODO: 
          add social links to header
          Build testimonials section 
          Build contact form 
          What I am currently working on (current projects also with links to those projects)
          Footer with social links
      */}
    </main>
  );
};

export default IndexPage;
