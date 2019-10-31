import React, { useState } from 'react';
import './menu.css';
import { Link } from 'gatsby';

const menuItems = ['Home', 'Rooms', 'Booking', 'About', 'Contact'];

const MenuItems = () => {
  const [toggle, setToggle] = useState(false);
  function toggleOnMenu(event) {
    setToggle(!toggle);
    event.preventDefault();
  }
  return (
    // menu-section
    <div
      onClick={event => toggleOnMenu(event)}
      className={(toggle ? 'on' : '') + ' menu-section'}
    >
      {/* menu-toggle */}
      <div className={(toggle ? 'on' : '') + ' menu-toggle'} style={{}}>
        {/* one */}
        <div className="one" style={{}} />
        {/* two */}
        <div className="two" style={{}} />
        {/* three */}
        <div className="three" style={{}} />
      </div>
      <nav>
        <ul role="navigation" className={toggle ? '' : 'hidden'} style={{}}>
          {menuItems.map(menuItem => {
            return (
              <li key={menuItem}>
                <Link
                  to={
                    '/' +
                    (menuItem === 'Home' ? '' : menuItem.toLocaleLowerCase())
                  }
                >
                  {menuItem}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MenuItems;
