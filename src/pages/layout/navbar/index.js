import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-white.svg';
import links from './menu-items';

const index = () => {
  return (
    <nav className="layout__wrapper navbar z--is1">
      <div className="layout__container navbar">
        <div className="logo-holder">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu-list-holder">
          {links.map(link_item => {
            const { id, val_ru, link } = link_item;
            return (
              <div className="link-item" key={id}>
                <Link to={link}>{val_ru}</Link>
              </div>
            );
          })}
        </div>
        <div className="search-holder">
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
    </nav>
  );
};

export default index;
