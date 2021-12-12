import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<Link className='nav__item' to='/'>
					<li>All users</li>
				</Link>
				<Link className='nav__item' to='/create'>
					<li>Create user</li>
				</Link>
				<Link className='nav__item' to='/settings'>
					<li>Settings</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
