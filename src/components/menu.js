import React from 'react';
import './menu.css';
// import { Link } from 'gatsby';

const menuItems = [ 'Home', 'Rooms', 'Photos', 'About' ];

// class MenuItems extends React.Component
const MenuItems = () => {
	// const MenuToggle = document.querySelector('.menu-toggle');
	// const menuSection = document.querySelector('.menu-section');
	// const MenuSection = document.createElement('div');
	// const MenuSection = () => {
	// 	return <div />;
	// };
	const MenuSection = React.createElement('div', null);
	// const MenuToggle = document.createElement('div');
	// const MenuToggle = () => {
	// 	return <div />;
	// };
	const MenuToggle = React.createElement('div', null);
	// const NavUl = document.createElement('ul');
	// const NavUl = () => {
	// 	return <ul />;
	// };
	// const NavUl = document.querySelector('nav').querySelector('ul');
	const NavUl = React.createElement('ul', null);
	console.log(MenuSection, MenuToggle, NavUl);
	function toggleOnMenu(event) {
		MenuToggle.classList.toggle('on');
		MenuSection.classList.toggle('on');
		navHide(event);
		// event.stopPropagation();
		// console.log(this);
	}

	function navHide(event) {
		NavUl.classList.toggle('hidden');
		console.log(event.target);
		event.preventDefault();
		// event.stopPropagation();
	}

	return (
		// menu-section
		<MenuSection onClick={toggleOnMenu} className="menu-section" style={{}}>
			{/* menu-toggle */}
			<MenuToggle className="menu-toggle" style={{}}>
				{/* one */}
				<div className="one" style={{}} />
				{/* two */}
				<div className="two" style={{}} />
				{/* three */}
				<div className="three" style={{}} />
			</MenuToggle>
			<nav>
				<NavUl
					role="navigation"
					className="hidden"
					style={{
						// display: 'none'
					}}
				>
					{menuItems.map((menuItem) => {
						return (
							<li key={menuItem}>
								<a href="/">{menuItem}</a>
							</li>
						);
					})}
				</NavUl>
			</nav>
		</MenuSection>
	);
};

// const MenuItems = () => {};

export default MenuItems;
