import React from 'react';
import WatchflixVideoPlayerEpisodeTile from './WatchflixVideoPlayerEpisodeTile';

const WatchflixVideoPlayer = () => {
	return (
		<div className={'watchflix-video-player'}>
			<div className={'watchflix-video-player-top'}>
				<div className={'watchflix-video-player-top-shadow-box'}>
					<div className={'watchflix-video-player-button'}>
						<i className="bx bx-play"></i>
					</div>
					<div className={'watchflix-video-player-top-info-box'}>
						<h3>Her & Him</h3>
						<p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
					</div>
				</div>
			</div>
			<div className={'watchflix-video-player-bottom'}>
				<div className={'watchflix-video-player-bottom-episodes-box'}>
					<WatchflixVideoPlayerEpisodeTile episodeNumber={1} episodeTitle={'First Meet'}/>
					<WatchflixVideoPlayerEpisodeTile episodeNumber={2} episodeTitle={'At Coffee Shop'}/>
					<WatchflixVideoPlayerEpisodeTile episodeNumber={3} episodeTitle={'Amy Gift'}/>
				</div>
			</div>
		</div>
	);
};

export default WatchflixVideoPlayer;