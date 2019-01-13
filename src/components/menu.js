import React from 'react';
// import { Link } from 'gatsby';

const menuItems = [ 'Home', 'Rooms', 'Photos', 'About' ];

const MenuItems = () => {
	return (
		<div
			style={{
				width: '40px',
				height: '30px',
				position: 'absolute',
				top: '10px',
				right: '25px',
				cursor: 'pointer'
			}}
		>
			<div style={{}}>
				<div style={{}} />
				<div style={{}} />
				<div style={{}} />
			</div>
			<nav>
				<ul
					role="navigation"
					class="hidden"
					style={{
						display: 'none'
					}}
				>
					{menuItems.map((menuItem) => {
						return (
							<li>
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
