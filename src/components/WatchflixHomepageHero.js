import React, { useEffect, useState } from 'react';
import axios from 'axios';
import parseDuration from '../utils/parseDuration';
import WatchflixHomepageHeroTile from './WatchflixHomepageHeroTile';

const WatchflixHomepageHero = () => {
	const [heroMovie, setHeroMovie] = useState({});


	const getHeroMovie = () => {
		return axios.get('https://my-json-server.typicode.com/mvtthew/movies-db/hero').then(res => setHeroMovie(res.data));
	};


	useEffect(() => {
		getHeroMovie();
	}, []);

	return (
		Object.keys(heroMovie).length > 0 ? (<div className={'watchflix-homepage-hero'} style={{ backgroundImage: `url(${heroMovie.thumbnailUrls[0]})` }}>
			{console.log(heroMovie.thumbnailUrls)}
			<div className={'watchflix-homepage-hero-main'}>
				<div className={'watchflix-homepage-hero-main-left'}>
					<div className={'watchflix-homepage-hero-main-left-button-box'}>
						<div className={'watchflix-homepage-hero-main-left-button'}>
							<i className="bx bx-play"></i>
						</div>
					</div>
				</div>
				<div className={'watchflix-homepage-hero-main-right'}>
					<h1>{heroMovie.title}</h1>
					<p>{heroMovie.description}</p>
					<div className={'watchflix-homepage-hero-main-right-info-box'}>
						<p>Genre : {heroMovie.genre.split('/')[0]}</p>
						<p>Duration : {parseDuration(heroMovie.averageDurationMinutes)}</p>
						<p>Ratings : {heroMovie.usersRating}</p>
					</div>
				</div>
			</div>
			<div className={'watchflix-homepage-hero-bottom'}>
				<h4>Trailers</h4>
				<div className={'watchflix-homepage-hero-bottom-trailers-box'}>
					<WatchflixHomepageHeroTile tileNumber={'01'} bgImg={heroMovie.thumbnailUrls[1]} trailerUrl={'Ab2YIbP5xw8'}/>
					<WatchflixHomepageHeroTile tileNumber={'02'} bgImg={heroMovie.thumbnailUrls[2]} trailerUrl={'tjskecW2BFQ'}/>
					<WatchflixHomepageHeroTile tileNumber={'03'} bgImg={heroMovie.thumbnailUrls[3]} trailerUrl={'FabgkDRdXSw'}/>
					<WatchflixHomepageHeroTile tileNumber={'04'} bgImg={heroMovie.thumbnailUrls[4]} trailerUrl={'bPYnXiOVTvQ'}/>
				</div>
			</div>

			<div className={'watchflix-homepage-hero-box-shadow'}>

			</div>


		</div>) : null

	);
};

export default WatchflixHomepageHero;