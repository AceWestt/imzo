import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, Linear } from 'gsap';

import vid from '../videos/section_2.mp4';

const Section2 = () => {
  const headerTitleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerTitleRef.current.children,
      {
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center'
        },
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: Linear.easeNone
      }
    );
  }, []);

  return (
    <section className="layout__wrapper home__section-2">
      <div className="layout__container home__section-2__container" ref={sectionRef}>
        <div className="bg-img-holder">
          <video autoPlay muted loop>
            <source src={vid}></source>
          </video>
        </div>
        <div className="layout__wrapper">
          <header className="home__header__head" ref={headerTitleRef}>
            <h3>Оконная система премиум класса</h3>
            <h2 className="large">Premium window BKT 98</h2>
            <div className="btn-holder center">
              <Link to="#" className="btn">
                Узнать больше
              </Link>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Section2;
