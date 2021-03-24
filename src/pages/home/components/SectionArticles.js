import React from 'react';
import Article from './Article';
import artilces from '../articles';

const SectionArticles = () => {
  return (
    <section className="layout__wrapper home__articles">
      <div className="layout__container home__articles__container">
        <div className="content-holder">
          {artilces.map(article => {
            const { id, title_ru, text_ru, link, img, full } = article;
            return <Article key={id} {...article} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionArticles;
