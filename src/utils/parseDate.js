const moment = require('moment');
const parseDate = (date) => {
	console.log(new Date(date));
	const splitDate = date.split('.');
	const newDate = `${splitDate[2]},${splitDate[1]},${splitDate[0]}`;
	return moment(newDate).format('D MMM, YYYY');
};
export default parseDate;