import React from 'react';
import WatchflixTilesBox from './WatchflixTilesBox';
import { Link } from 'react-router-dom';

const WatchflixMovieSection = ({ sectionName, movies }) => {
	return (
		<div className={'watchflix-movie-section'}>
			<div className={'watchflix-movie-section-top'}>
				<h3>{sectionName}</h3>
				<Link to={''}>View More</Link>
			</div>
			<WatchflixTilesBox movies={movies}/>
		</div>
	);
};

export default WatchflixMovieSection;