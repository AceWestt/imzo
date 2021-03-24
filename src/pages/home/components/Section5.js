import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, Linear } from 'gsap';
import imgBack from '../images/section-5/back.png';
import imgFront from '../images/section-5/front.png';

const Section5 = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const headerTitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerTitleRef.current.children,
      {
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center'
        },
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: Linear.easeNone
      }
    );
    gsap.fromTo(
      imgRef.current,
      {
        x: '-100vw'
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          pin: true,
          pinSpacing: false
        },
        x: 0,
        duration: 3,
        ease: Linear.easeNone
      }
    );
  }, []);
  return (
    <section className="layout__wrapper home__section-5">
      <div className="layout__container home__section-5__container" ref={containerRef}>
        <div className="home__section-5__container__img-holder">
          <img src={imgBack} alt="slide-back" />
        </div>
        <header className="home__header__head" ref={headerTitleRef}>
          <h2>Раздвижные системы</h2>
          <p>
            The Apple One free trial includes only services that you are not
            <br /> currently using through a free trial or a subscription. Plan automatically
            <br /> renews after trial until cancelled. Restrictions and other terms apply.
          </p>
          <div className="btn-holder center">
            <Link to="#" className="btn blue">
              Перейти
            </Link>
          </div>
        </header>
        <div className="home__section-5__container__img-holder" ref={imgRef}>
          <img src={imgFront} alt="slide-front" />
        </div>
      </div>
    </section>
  );
};

export default Section5;
