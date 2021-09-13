import React from 'react';
import parseDate from '../utils/parseDate';
import parseDuration from '../utils/parseDuration';

const WatchflixVideoPlayerEpisodeTile = ({ episodeId, episodeTitle, episodeDuration, episodePremiere, episodeDescription, episodeBg }) => {
	return (

		<div className={'watchflix-video-player-episode-tile'}>
			<div className={'watchflix-video-player-episode-tile-left'} style={{ backgroundImage: `url(${episodeBg})` }}>
				<div className={'watchflix-video-player-episode-tile-left-button'}>
					<i className="bx bx-play"></i>
				</div>
			</div>
			<div className={'watchflix-video-player-episode-tile-right'}>
				<p className={'episode'}>Episode {episodeId}</p>
				<h5>{episodeTitle}</h5>
				<p className={'episode-description'}>{episodeDescription}</p>
				<div className={'watchflix-video-player-episode-tile-right-info-box'}>
					<div className={'watchflix-video-player-episode-tile-right-info-box-item'}>
						<i className="bx bx-time-five"></i>
						<p>{parseDuration(episodeDuration)}</p>
					</div>
					<div className={'watchflix-video-player-episode-tile-right-info-box-item'}>
						<i className="bx bx-calendar-alt"></i>
						<p>{parseDate(episodePremiere)}</p>
					</div>
				</div>
			</div>
		</div>

	)
		;
};

export default WatchflixVideoPlayerEpisodeTile;