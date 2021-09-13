import React, { useState } from 'react';
import parseDuration from '../utils/parseDuration';
import ModalVideo from 'react-modal-video';

const WatchflixTile = ({ isLarge, genre, duration, popularity, title, bgImg, trailerUrl }) => {
	const [isOpen, setOpen] = useState(false);

	const getGenre = () => {
		return genre.split('/')[0];
	};


	return (
		<div className={`watchflix-tile ${isLarge ? 'watchflix-tile-large' : ''}`} style={{ backgroundImage: `url(${bgImg})` }}>
			<>
				<ModalVideo channel="custom" autoplay isOpen={isOpen} url={trailerUrl} onClose={() => setOpen(false)}/>
				<button className="btn-primary" onClick={() => setOpen(true)}><i className="bx bx-play"/></button>
			</>
			<div className={'watchflix-tile-box-shadow'}>
				<div className={'watchflix-tile-top'}>
					<div className={'watchflix-tile-top-category-box'}>
						<p>{getGenre()}</p>
					</div>
				</div>
				<div className={'watchflix-tile-bottom'}>
					<div className={'watchflix-tile-bottom-info'}>
						<div className={'watchflix-tile-bottom-info-item'}>
							<i className="bx bx-time-five"></i>
							<p>{parseDuration(duration)}</p>
						</div>
						<div className={'watchflix-tile-bottom-info-item'}>
							<i className="bx bx-show"></i>
							<p>{popularity}K views</p>
						</div>
					</div>
					<h1>{title}</h1>

				</div>
			</div>
		</div>
	);
};

export default WatchflixTile;