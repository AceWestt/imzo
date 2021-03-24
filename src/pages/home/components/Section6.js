import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, Linear } from 'gsap';
import images from '../section6images';

const Section6 = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const headerTitleRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;
    const index = { curr: 0 };

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

    gsap.to(index, {
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: true,
        pinSpacing: false
      },
      duration: 0.5,
      curr: images.size,
      roundProps: 'curr',
      repeat: 0,
      immediateRender: true,
      ease: Linear.easeNone,
      onUpdate: () => {
        img.src = images.obj[`${index.curr}.png`].default;
      }
    });
  }, []);

  return (
    <section className="layout__wrapper home__section-6">
      <div className="layout__container home__section-6__container" ref={containerRef}>
        <div className="home__section-6__container__img-holder">
          <img src={images.obj[`${0}.png`].default} alt="fasad" ref={imgRef} />
        </div>
        <header className="home__header__head" ref={headerTitleRef}>
          <h2>Фасадные системы</h2>
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
      </div>
    </section>
  );
};
export default Section6;
