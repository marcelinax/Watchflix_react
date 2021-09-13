import React from 'react';
import WatchflixTile from './WatchflixTile';

const WatchflixTilesBox = ({ movies }) => {


	const getMoviesByDescendingPopularity = () => {
		return movies.length > 0 ? movies.sort((a, b) => a.usersRating > b.usersRating ? -1 : 1) : null;
	};

	const returnMovies = () => {
		const lastThreeMovies = [];
		for (let i = 2; i < movies.length; i++) {
			lastThreeMovies.push(
				<WatchflixTile isLarge={false} title={getMoviesByDescendingPopularity()[i].title} popularity={getMoviesByDescendingPopularity()[i].usersRating}
											 duration={getMoviesByDescendingPopularity()[i].durationMinutes || getMoviesByDescendingPopularity()[i].averageDurationMinutes}
											 genre={getMoviesByDescendingPopularity()[i].genre}
											 bgImg={getMoviesByDescendingPopularity()[i].thumbnailUrl} trailerUrl={getMoviesByDescendingPopularity()[i].trailerVideoUrls[0]}/>
			);
		}
		return lastThreeMovies;
	};

	return (
		getMoviesByDescendingPopularity() !== null ?
			(
				<div className={'watchflix-tiles-box'}>

					<div className={'watchflix-tiles-box-row'}>
						<WatchflixTile isLarge={true} title={getMoviesByDescendingPopularity()[0].title} popularity={getMoviesByDescendingPopularity()[0].usersRating}
													 duration={getMoviesByDescendingPopularity()[0].durationMinutes || getMoviesByDescendingPopularity()[0].averageDurationMinutes}
													 genre={getMoviesByDescendingPopularity()[0].genre}
													 bgImg={getMoviesByDescendingPopularity()[0].thumbnailUrl} trailerUrl={getMoviesByDescendingPopularity()[0].trailerVideoUrls[0]}/>
						<WatchflixTile isLarge={false} title={getMoviesByDescendingPopularity()[1].title} popularity={getMoviesByDescendingPopularity()[1].usersRating}
													 duration={getMoviesByDescendingPopularity()[1].durationMinutes || getMoviesByDescendingPopularity()[1].averageDurationMinutes}
													 genre={getMoviesByDescendingPopularity()[1].genre}
													 bgImg={getMoviesByDescendingPopularity()[1].thumbnailUrl} trailerUrl={getMoviesByDescendingPopularity()[1].trailerVideoUrls[0]}/>
					</div>
					<div className={'watchflix-tiles-box-row'}>
						{returnMovies()}
					</div>
				</div>
			) : null


	)
		;
};

export default WatchflixTilesBox;