const formatMilliseconds = (milliseconds) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  seconds = seconds % 60;
  minutes = minutes % 60;
  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds
  )}`;
};
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

const convertMinuteToMs = (minute) => {
  if (!isNaN(minute) && parseInt(minute) > 0) {
    return minute * 60000;
  }
  return 0;
};

module.exports = { formatMilliseconds, convertMinuteToMs };
