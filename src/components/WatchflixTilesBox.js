import React from 'react';
import WatchflixTile from './WatchflixTile';

const WatchflixTilesBox = () => {
	return (
		<div className={'watchflix-tiles-box'}>
			<div className={'watchflix-tiles-box-row'}>
				<WatchflixTile isLarge={true}/>
				<WatchflixTile isLarge={false}/>
			</div>
			<div className={'watchflix-tiles-box-row'}>
				<WatchflixTile isLarge={false}/>
				<WatchflixTile isLarge={false}/>
				<WatchflixTile isLarge={false}/>
			</div>
		</div>
	);
};

export default WatchflixTilesBox;