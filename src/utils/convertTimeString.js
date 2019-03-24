const segmentTime = (timeString) => {
    const timeUnits = ['seconds', 'minutes', 'hours'];
    const segments = timeString.split(':').reverse().map(time => parseInt(time));
    const timeObject = {}

    if(segments.length > 0) {
        segments.forEach((duration, index) => {
            timeObject[timeUnits[index]] = duration
        });
    }

    return timeObject;
}

// Converts a time string like this '02:58' to seconds
const convertTimeString = (timeString) => {
    const { seconds, minutes, hours} = segmentTime(timeString);
    let totalTimeInSeconds = 0;
    
    totalTimeInSeconds += (seconds ? seconds : 0);
    totalTimeInSeconds += (minutes ? minutes*60 : 0);
    totalTimeInSeconds += (hours ? hours*60*60 : 0);

    return totalTimeInSeconds;
}

export default convertTimeString;