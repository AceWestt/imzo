import React, { useRef, useEffect } from 'react';
import { gsap, Linear } from 'gsap';
import { Link } from 'react-router-dom';

const Article = ({ title_ru, text_ru, link, img, full }) => {
  const articleRef = useRef(null);

  useEffect(() => {
    const article = articleRef.current;
    gsap.fromTo(
      article,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: article,
          start: 'top center'
        },
        opacity: 1,
        duration: 0.5,
        ease: Linear.easeNone
      }
    );
  }, []);
  return (
    <article className={full ? 'article full' : 'article half'} ref={articleRef}>
      {img && (
        <div className="bg-img-holder">
          <img src={img} alt={title_ru} />
        </div>
      )}
      <div className="content">
        <h4>{title_ru}</h4>
        <p>{text_ru.substring(0, 200)}...</p>
        <div className="btn-holder">
          <Link className="btn blue" to={link}>
            Перейти
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Article;
