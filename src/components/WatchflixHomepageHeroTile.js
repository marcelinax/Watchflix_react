import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const WatchflixHomepageHeroTile = ({ tileNumber, bgImg, trailerUrl }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className={'watchflix-homepage-hero-tile'} style={{ backgroundImage: `url(${bgImg})` }}>
			<>
				<ModalVideo channel="youtube" videoId={trailerUrl} autoplay isOpen={isOpen} onClose={() => setOpen(false)}/>
				<button className="btn-primary" onClick={() => setOpen(true)}><i className="bx bx-play"/></button>
			</>
			<h4>{tileNumber}</h4>
		</div>
	);
};

export default WatchflixHomepageHeroTile;