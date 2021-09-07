import React from 'react';

const WatchflixTile = ({ isLarge }) => {
	return (
		<div className={`watchflix-tile ${isLarge ? 'watchflix-tile-large' : ''}`}>
			<div className={'watchflix-tile-box-shadow'}>
				<div className={'watchflix-tile-top'}>
					<div className={'watchflix-tile-top-category-box'}>
						<p>Fantasy</p>
					</div>
				</div>
				<div className={'watchflix-tile-bottom'}>
					<div className={'watchflix-tile-bottom-info'}>
						<div className={'watchflix-tile-bottom-info-item'}>
							<i className="bx bx-time-five"></i>
							<p>1hr 24mins</p>
						</div>
						<div className={'watchflix-tile-bottom-info-item'}>
							<i className="bx bx-show"></i>
							<p>21.3K views</p>
						</div>
					</div>
					<h1>Lo Lo Land</h1>

				</div>
			</div>
		</div>
	);
};

export default WatchflixTile;