import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, Linear } from 'gsap';
import images from '../section4images';

const Section4 = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const headerTitleRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;
    let index = { curr: 0 };
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
    <section className="layout__wrapper home__section-4">
      <div className="layout__container home__section-4__container" ref={containerRef}>
        <header className="home__header__head black" ref={headerTitleRef}>
          <h2>Пластиковые окна</h2>
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
        <div className="home__section-4__container__img-holder">
          <img src={images.obj[`${50}.png`].default} alt="pvx" ref={imgRef} />
        </div>
      </div>
    </section>
  );
};

export default Section4;
