import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, Linear } from 'gsap';
import img from '../images/section-3/img.png';

const Section3 = () => {
  const sectionParentRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const img = imgRef.current;

    gsap.fromTo(
      header.children,
      {
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: section,
          start: 'top center'
        },
        duration: 1,
        opacity: 1,
        stagger: 0.5,
        ease: Linear.easeNone
      }
    );

    gsap.fromTo(
      img,
      { scale: 4 },
      {
        scrollTrigger: {
          trigger: section,
          scrub: true,
          pin: section,
          pinSpacing: false
        },
        duration: 3,
        immediateRender: false,
        scale: 1,
        ease: Linear.easeNone
      }
    );
  }, []);

  return (
    <section className="layout__wrapper home__section-3" ref={sectionParentRef}>
      <div className="layout__container home__section-3__container" ref={sectionRef}>
        <header className="home__header__head" ref={headerRef}>
          <h2>Альюминевые окна</h2>
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
        <div className="home__section-3__container__img-holder" ref={imgRef}>
          <img src={img} alt="alu" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
