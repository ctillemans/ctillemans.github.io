import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function FadeInWrapper({ children, wrapperElement = 'div', direction = null, ...props }) {
  const Component = wrapperElement;
  const fadeElementRef = useRef(null);
  const distance = 200;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      fadeElementRef.current,
      {
        x: -distance,
        autoAlpha: 0,
      },
      {
        x: 0,
        duration: 0.4,
        autoAlpha: 1,
        ease: 'ease',
        scrollTrigger: {
          trigger: fadeElementRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // gsap.to(fadeElementRef.current, {
    //
    //   opacity: 0,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: fadeElementRef.current,
    //     start: 'top top',
    //     end: 'bottom bottom', // start the animation when ".box" enters the viewport (once)
    //   },
    // });
  }, [fadeElementRef]);
  return (
    <Component style={{ height: '100%' }} ref={fadeElementRef}>
      {children}
    </Component>
  );
}

export default FadeInWrapper;
