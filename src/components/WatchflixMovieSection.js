import React from 'react';
import WatchflixTilesBox from './WatchflixTilesBox';
import { Link } from 'react-router-dom';

const WatchflixMovieSection = () => {
	return (
		<div className={'watchflix-movie-section'}>
			<div className={'watchflix-movie-section-top'}>
				<h3>Top Movies</h3>
				<Link to={''}>View More</Link>
			</div>
			<WatchflixTilesBox/>
		</div>
	);
};

export default WatchflixMovieSection;