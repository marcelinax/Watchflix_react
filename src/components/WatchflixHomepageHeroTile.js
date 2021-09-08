import React from 'react';

const WatchflixHomepageHeroTile = ({ tileNumber, bgImg }) => {
	return (
		<div className={'watchflix-homepage-hero-tile'} style={{ backgroundImage: `url(${bgImg})` }}>
			<h4>{tileNumber}</h4>
		</div>
	);
};

export default WatchflixHomepageHeroTile;