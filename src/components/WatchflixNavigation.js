import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WatchflixNavigation = () => {

	const [navigationClass, setNavigationClass] = useState('');

	const updateNavigationClass = () => {
		setNavigationClass(window.scrollY > 100 ? '#1E1E1E' : 'transparent');
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			updateNavigationClass();
		});
	}, []);

	return (
		<div className={'watchflix-navigation'} style={{ backgroundColor: navigationClass }}>
			<h4>Watchflix</h4>
			<div className={'watchflix-navigation-box'}>
				<Link>Home</Link>
				<Link>Movies</Link>
				<Link>TV Show</Link>
				<Link>Video</Link>
				<Link>FAQ</Link>
				<Link>Pricing</Link>
				<Link>Contact Us</Link>
			</div>
			<div className={'watchflix-navigation-search'}>
				<input/>
				<i className="bx bx-search"></i>
			</div>
			<div className={'watchflix-navigation-user'}>
				<div className={'watchflix-navigation-user-avatar'}></div>
				<p>John Glich</p>
			</div>
		</div>
	);
};

export default WatchflixNavigation;