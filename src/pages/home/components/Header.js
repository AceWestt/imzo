import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, Linear } from 'gsap';
import images from '../images.js';

const Header = () => {
  const homeHeaderRef = useRef(null);
  const headerImgRef = useRef(null);
  const headerTitleRef = useRef(null);

  const changeHeaderBG = () => {
    const homeHeader = homeHeaderRef.current;
    const headerImg = headerImgRef.current;
    let index = { curr: 0 };
    gsap.to(index, {
      scrollTrigger: {
        trigger: headerImg,
        scrub: true,
        pin: homeHeader,
        pinSpacing: false
      },
      duration: 0.5,
      curr: images.size,
      roundProps: 'curr',
      repeat: 0,
      immediateRender: true,
      ease: Linear.easeNone,
      onUpdate: () => {
        headerImg.src = images.obj[`${index.curr}.png`].default;
      }
    });
  };

  const animateHeaderTitle = () => {
    const headerTitle = headerTitleRef.current;
    document.body.classList.add('unscrollable');
    gsap.fromTo(
      headerTitle.children,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.2,
        stagger: 0.5,
        ease: Linear.easeNone,
        onComplete: () => {
          document.body.classList.remove('unscrollable');
          changeHeaderBG();
        }
      }
    );
  };

  useEffect(() => {
    animateHeaderTitle();
  }, []);

  return (
    <section className="layout__wrapper home__header">
      <div className="layout__container home__header__container" ref={homeHeaderRef}>
        <div className="bg-img-holder">
          <img
            src={images.obj[`${0}.png`].default}
            className="bg-img"
            alt="bg-img"
            ref={headerImgRef}
          />
        </div>
        <header className="home__header__head" ref={headerTitleRef}>
          <h1>Оконная система премиум класса</h1>
          <h2>Premium window BKT 98</h2>
          <div className="btn-holder center">
            <Link to="#" className="btn blue">
              Узнать больше
            </Link>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
