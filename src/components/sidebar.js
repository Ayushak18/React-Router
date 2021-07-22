import React from 'react';
import '../sidebar.css';
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="list">
          <li>
            <NavLink activeClassName="selected" to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/articles">
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/people">
              People
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/books">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/support">
              Help and Support
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
