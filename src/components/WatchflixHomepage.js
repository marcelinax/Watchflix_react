import React from 'react';
import WatchflixMovieSection from './WatchflixMovieSection';
import WatchflixHomepageHero from './WatchflixHomepageHero';

const WatchflixHomepage = () => {
	return (
		<div className={'watchflix-homepage'}>
			<WatchflixHomepageHero/>
			<WatchflixMovieSection/>
		</div>
	);
};

export default WatchflixHomepage;