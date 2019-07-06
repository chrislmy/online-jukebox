const padTime = time => (time < 10) ? `0${time}` : time;  

const convertSecondsToTimeString = (seconds) => {
    if(seconds < 60) {
        return `00:${padTime(seconds)}`;
    }

	const minutes = Math.floor(seconds/60);
	const secondsRemain = seconds % 60;
	let minutesRemain;
	let hours;
 
	if(minutes > 60) {
		hours = Math.floor(minutes/60);
		minutesRemain = minutes % 60;
    }

    return hours ?
        `${hours}:${padTime(minutesRemain)}:${padTime(secondsRemain)}` :
        `${padTime(minutes)}:${padTime(secondsRemain)}`;
};

export default convertSecondsToTimeString;