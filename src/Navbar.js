import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar({loggedIn, loginMsg}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <NavLink to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavLink>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <NavLink to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li>
            <li>
        <NavLink exact activeClassName="active" to="/" className="nav-text">
        <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page1" className="nav-text">
        <span>About</span>
        </NavLink>
      </li>
      
      {loggedIn && (
        <>
          <li>
            <NavLink activeClassName="active" to="/top" className="nav-text">
              <span>Top Stories</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/page3" className="nav-text">
            <span>Reviews</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/userPage" className="nav-text">
            <span>Write Reviews</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/page4" className="nav-text">
            <span>Admin Page</span>
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink exact activeClassName="active" to="/login" className="nav-text">
        <span>{loginMsg}</span>
        </NavLink>
      </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;