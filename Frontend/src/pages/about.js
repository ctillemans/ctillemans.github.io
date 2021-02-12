import React from 'react';

const about = () => {
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
                    designers and developers on projects. My background in editing, marketing and
                    motion graphics eventually led me into the path of frontend web development.
                    When I am not sitting behind my laptop, I enjoy spending time with my wife and
                    dogs, mountain biking, surfing and being in the mountains.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-8 col'>
              <div className='main-bio__technologies'></div>
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
