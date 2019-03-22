import React, { useState } from 'react';
import './menu.css';

const menuItems = [ 'Home', 'Rooms', 'Photos', 'About' ];

const MenuItems = () => {
	const [ toggle, setToggle ] = useState(false);

	function toggleOnMenu(event) {
		setToggle(!toggle);
		event.preventDefault();
	}
	return (
		// menu-section
		<div onClick={(event) => toggleOnMenu(event)} className={(toggle ? 'on' : '') + ' menu-section'} style={{}}>
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
					{menuItems.map((menuItem) => {
						return (
							<li key={menuItem}>
								<a href="/">{menuItem}</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default MenuItems;
