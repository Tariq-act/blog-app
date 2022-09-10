import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../context/context.api';

import './navigation.styles.css';

const Navigation = () => {
  const { inputSearch, handleSearch } = useContext(GlobalContext);
  return (
    <div className='navigation'>
      <div className='logo'>
        <i className='fa-brands fa-blogger-b'></i>
      </div>
      <div className='controls'>
        <ul className='nav-links'>
          <li>
            <NavLink exact='true' activeclassname='active' to={'/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to={'/create-post'}>
              Create Post
            </NavLink>
          </li>
        </ul>
        <div className='search'>
          <i className='fa fa-search'></i>
          <input
            type='search'
            placeholder='Search...'
            value={inputSearch}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
