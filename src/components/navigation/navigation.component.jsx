import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../context/context.api';

import './navigation.styles.css';

const Navigation = () => {
  const { inputSearch, handleSearch, type, handleType } =
    useContext(GlobalContext);
  return (
    <div className='navigation'>
      <div className='logo'>
        <Link to='/'>
          <i className='fa-brands fa-blogger-b'></i>
        </Link>
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

        <div className='select-filter'>
          <label htmlFor='Type'>Type: </label>
          <select name='Type' id='Type' value={type} onChange={handleType}>
            <option value=''>select</option>
            <option value='tech'>Tech</option>
            <option value='entertainment'>Entertainment</option>
            <option value='community'>Community</option>
          </select>
        </div>

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
