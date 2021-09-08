import React from 'react';
import WatchflixMovieSection from './WatchflixMovieSection';
import WatchflixHomepageHero from './WatchflixHomepageHero';
import WatchflixVideoPlayer from './WatchflixVideoPlayer';
import WatchflixFooter from './WatchflixFooter';

const WatchflixHomepage = () => {
	return (
		<div className={'watchflix-homepage'}>
			<WatchflixHomepageHero/>
			<WatchflixMovieSection/>
			<WatchflixVideoPlayer/>
			<WatchflixFooter/>
		</div>
	);
};

export default WatchflixHomepage;