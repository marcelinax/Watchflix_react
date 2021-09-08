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
											 duration={getMoviesByDescendingPopularity()[i].durationMinutes} genre={getMoviesByDescendingPopularity()[i].genre}
											 bgImg={getMoviesByDescendingPopularity()[i].thumbnailUrl}/>
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
													 duration={getMoviesByDescendingPopularity()[0].durationMinutes} genre={getMoviesByDescendingPopularity()[0].genre}
													 bgImg={getMoviesByDescendingPopularity()[0].thumbnailUrl}/>
						<WatchflixTile isLarge={false} title={getMoviesByDescendingPopularity()[1].title} popularity={getMoviesByDescendingPopularity()[1].usersRating}
													 duration={getMoviesByDescendingPopularity()[1].durationMinutes} genre={getMoviesByDescendingPopularity()[1].genre}
													 bgImg={getMoviesByDescendingPopularity()[1].thumbnailUrl}/>
					</div>
					<div className={'watchflix-tiles-box-row'}>
						{returnMovies()}
						{/*<WatchflixTile isLarge={false}/>*/}
						{/*<WatchflixTile isLarge={false}/>*/}
						{/*<WatchflixTile isLarge={false}/>*/}
					</div>
				</div>
			) : null


	)
		;
};

export default WatchflixTilesBox;