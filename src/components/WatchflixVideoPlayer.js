import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WatchflixVideoPlayerEpisodeTile from './WatchflixVideoPlayerEpisodeTile';
import ModalVideo from 'react-modal-video';

const WatchflixVideoPlayer = () => {

	const [series, setSeries] = useState([]);
	const [isOpen, setOpen] = useState(false);

	const getSeries = () => {
		return axios.get('https://my-json-server.typicode.com/marcelinax/Movies_db/series').then(res => setSeries(res.data));
	};


	useEffect(() => {
		getSeries();
	}, []);

	return (

		series.length > 0 ? (<div className={'watchflix-video-player'}>
			<div className={'watchflix-video-player-top'} style={{ backgroundImage: `url(${series[0].thumbnailUrl})` }}>
				<div className={'watchflix-video-player-top-shadow-box'}>
					<>
						<ModalVideo channel="youtube" videoId={'X63OsUG-KCg'} autoplay isOpen={isOpen} onClose={() => setOpen(false)}/>
						<div className={'watchflix-video-player-button'} onClick={() => setOpen(true)}>
							<i className="bx bx-play"></i>
						</div>
					</>

					<div className={'watchflix-video-player-top-info-box'}>
						<h3>{series[0].title}</h3>
						<p>{series[0].description}</p>
					</div>
				</div>
			</div>
			<div className={'watchflix-video-player-bottom'}>
				<div className={'watchflix-video-player-bottom-episodes-box'}>
					<WatchflixVideoPlayerEpisodeTile episodeTitle={series[0].episodes[0].title} episodeBg={series[0].episodes[0].thumbnailUrl}
																					 episodeDescription={series[0].episodes[0].description} episodePremiere={series[0].episodes[0].premiere}
																					 episodeId={series[0].episodes[0].id} episodeDuration={series[0].episodes[0].durationInMinutes}/>
					<WatchflixVideoPlayerEpisodeTile episodeTitle={series[0].episodes[1].title} episodeBg={series[0].episodes[1].thumbnailUrl}
																					 episodeDescription={series[0].episodes[1].description} episodePremiere={series[0].episodes[1].premiere}
																					 episodeId={series[0].episodes[1].id} episodeDuration={series[0].episodes[1].durationInMinutes}/>
					<WatchflixVideoPlayerEpisodeTile episodeTitle={series[0].episodes[2].title} episodeBg={series[0].episodes[2].thumbnailUrl}
																					 episodeDescription={series[0].episodes[2].description} episodePremiere={series[0].episodes[2].premiere}
																					 episodeId={series[0].episodes[2].id} episodeDuration={series[0].episodes[2].durationInMinutes}/>
				</div>
			</div>
		</div>) : null


	)
		;
};

export default WatchflixVideoPlayer;