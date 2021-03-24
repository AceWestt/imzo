import React, { useRef, useEffect } from 'react';
import { gsap, Linear } from 'gsap';

const SectionForm = () => {
  const formRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current.children,
      {
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top center'
        },
        duration: 1,
        opacity: 1,
        stagger: 0.5,
        ease: Linear.easeNone
      }
    );
    gsap.fromTo(
      inputRef.current,
      {
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top center'
        },
        duration: 1,
        opacity: 1,
        ease: Linear.easeNone
      }
    );
  }, []);
  return (
    <section className="layout__wrapper home__form">
      <div className="layout__container home__form__container">
        <div className="home__form__container__form-holder">
          <div className="block left" ref={formRef}>
            <h4>Вызвать консультанта на дом</h4>
            <p>
              Не знаете с чего начать замену окон? Подайте заявку и наш менеджер свяжется с вами в
              удобное вам время!
            </p>
            <div className="btn-holder">
              <button className="btn blue">Перейти</button>
            </div>
          </div>
          <div className="block right" ref={inputRef}></div>
        </div>
      </div>
    </section>
  );
};

export default SectionForm;
