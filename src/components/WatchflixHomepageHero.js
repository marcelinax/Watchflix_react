import React from 'react';
import WatchflixHomepageHeroTile from './WatchflixHomepageHeroTile';

const WatchflixHomepageHero = () => {
	return (
		<div className={'watchflix-homepage-hero'}>
			<div className={'watchflix-homepage-hero-main'}>
				<div className={'watchflix-homepage-hero-main-left'}>
					<div className={'watchflix-homepage-hero-main-left-button-box'}>
						<div className={'watchflix-homepage-hero-main-left-button'}>
							<i className="bx bx-play"></i>
						</div>
					</div>
				</div>
				<div className={'watchflix-homepage-hero-main-right'}>
					<h1>The Legend of Sunrise</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam.</p>
					<div className={'watchflix-homepage-hero-main-right-info-box'}>
						<p>Genre : Adventure</p>
						<p>Duration : 2 hr 45 mins</p>
						<p>Ratings : 4.5</p>
					</div>
				</div>
			</div>
			<div className={'watchflix-homepage-hero-bottom'}>
				<h4>Trailers</h4>
				<div className={'watchflix-homepage-hero-bottom-trailers-box'}>
					<WatchflixHomepageHeroTile tileNumber={'01'}/>
					<WatchflixHomepageHeroTile tileNumber={'02'}/>
					<WatchflixHomepageHeroTile tileNumber={'03'}/>
					<WatchflixHomepageHeroTile tileNumber={'04'}/>
				</div>
			</div>

			<div className={'watchflix-homepage-hero-box-shadow'}>

			</div>


		</div>
	);
};

export default WatchflixHomepageHero;