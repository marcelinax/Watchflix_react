import React from 'react';
import WatchflixMovieSection from './WatchflixMovieSection';
import WatchflixHomepageHero from './WatchflixHomepageHero';
import WatchflixVideoPlayer from './WatchflixVideoPlayer';

const WatchflixHomepage = () => {
	return (
		<div className={'watchflix-homepage'}>
			<WatchflixHomepageHero/>
			<WatchflixMovieSection/>
			<WatchflixVideoPlayer/>
		</div>
	);
};

export default WatchflixHomepage;