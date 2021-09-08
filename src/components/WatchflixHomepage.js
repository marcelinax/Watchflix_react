import React, { useEffect, useState } from 'react';
import WatchflixMovieSection from './WatchflixMovieSection';
import WatchflixHomepageHero from './WatchflixHomepageHero';
import WatchflixVideoPlayer from './WatchflixVideoPlayer';
import WatchflixFooter from './WatchflixFooter';
import axios from 'axios';


const WatchflixHomepage = () => {

	const [movies, setMovies] = useState([]);
	const [tvShow, setTvShow] = useState([]);

	const getMovies = () => {
		return axios.get('https://my-json-server.typicode.com/mvtthew/movies-db/topMovies').then(res => setMovies(res.data));
	};
	const getTvShow = () => {
		return axios.get('https://my-json-server.typicode.com/mvtthew/movies-db/topTvShows').then(res => setTvShow(res.data));
	};

	useEffect(() => {
		getMovies();
		getTvShow();
	}, []);

	return (
		<div className={'watchflix-homepage'}>
			<WatchflixHomepageHero/>
			<WatchflixMovieSection sectionName={'Top Movies'} movies={movies}/>
			<WatchflixMovieSection sectionName={'Top TV Show'} movies={tvShow}/>
			<WatchflixVideoPlayer/>
			<WatchflixFooter/>
		</div>
	);
};

export default WatchflixHomepage;