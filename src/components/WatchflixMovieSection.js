import React from 'react';
import WatchflixTilesBox from './WatchflixTilesBox';

const WatchflixMovieSection = () => {
	return (
		<div className={'watchflix-movie-section'}>
			<div className={'watchflix-movie-section-top'}>
				<h1>Top Movies</h1>
				<button>View More</button>
			</div>
			<WatchflixTilesBox/>
		</div>
	);
};

export default WatchflixMovieSection;