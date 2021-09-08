const parseDuration = (duration) => {

	if (duration >= 60) {
		const hours = Math.floor(duration / 60);
		const minutes = duration % 60;
		return `${hours}hr ${minutes}mins`;
	} else return `${duration}mins`;
};
export default parseDuration;