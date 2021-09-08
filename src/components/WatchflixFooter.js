import React from 'react';
import { Link } from 'react-router-dom';

const WatchflixFooter = () => {
	return (
		<div className={'watchflix-footer'}>
			<div className={'watchflix-footer-left'}>
				<h2>Watchflix</h2>
				<p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
				<div className={'watchflix-footer-left-newsletters'}>
					<h6>Join Newsletters</h6>
					<div className={'watchflix-footer-left-newsletters-box'}>
						<input placeholder={'Insert your mail here'}/>
						<button><i className="bx bx-right-arrow-alt"></i></button>
					</div>
				</div>
			</div>
			<div className={'watchflix-footer-right'}>
				<div className={'watchflix-footer-right-links-box'}>
					<div className={'watchflix-footer-right-links-box-item'}>
						<Link className={'watchflix-footer-link-bold'}>Product</Link>
						<Link>Movies</Link>
						<Link>TV Show</Link>
						<Link>Videos</Link>
					</div>
					<div className={'watchflix-footer-right-links-box-item'}>
						<Link className={'watchflix-footer-link-bold'}>Media Group</Link>
						<Link>Nice Studio</Link>
						<Link>Nice News</Link>
						<Link>Nice TV</Link>
					</div>
					<div className={'watchflix-footer-right-links-box-item'}>
						<Link className={'watchflix-footer-link-bold'}>Site Map</Link>
						<Link>About</Link>
						<Link>Careers</Link>
						<Link>Press</Link>
					</div>
				</div>
				<div className={'watchflix-footer-right-info-box'}>
					<div className={'watchflix-footer-right-info-box-item'}>
						<i className="bx bx-map"></i>
						<p>8819 Ohio St. South Gate, California 90280</p>
					</div>
					<div className={'watchflix-footer-right-info-box-item'}>
						<i className="bx bx-envelope"></i>
						<p>ourstudio@hello.com</p>
					</div>
					<div className={'watchflix-footer-right-info-box-item'}>
						<i className="bx bx-phone"></i>
						<p>+271 386-647-3637</p>
					</div>
				</div>
				<p className={'copyright'}>
					© marcelinax
				</p>
			</div>

		</div>
	);
};

export default WatchflixFooter;