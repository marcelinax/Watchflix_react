import React from 'react';

const WatchflixVideoPlayerEpisodeTile = ({ episodeNumber, episodeTitle }) => {
	return (
		<div className={'watchflix-video-player-episode-tile'}>
			<div className={'watchflix-video-player-episode-tile-left'}>
				<div className={'watchflix-video-player-episode-tile-left-button'}>
					<i className="bx bx-play"></i>
				</div>
			</div>
			<div className={'watchflix-video-player-episode-tile-right'}>
				<p className={'episode'}>Episode {episodeNumber}</p>
				<h5>{episodeTitle}</h5>
				<p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit</p>
				<div className={'watchflix-video-player-episode-tile-right-info-box'}>
					<div className={'watchflix-video-player-episode-tile-right-info-box-item'}>
						<i className="bx bx-time-five"></i>
						<p>1hr 24mins</p>
					</div>
					<div className={'watchflix-video-player-episode-tile-right-info-box-item'}>
						<i className="bx bx-calendar-alt"></i>
						<p>June 2, 2021</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WatchflixVideoPlayerEpisodeTile;