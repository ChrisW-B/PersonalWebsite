const relativeTimeDifference = (previous) => {
  // based on http://stackoverflow.com/a/6109105/6465731
  const current = new Date();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const elapsed = current - previous;
  let num = 0;
  let unit = '';
  if (elapsed < msPerMinute) {
    num = Math.round(elapsed / 1000);
    unit = 'second';
  } else if (elapsed < msPerHour) {
    num = Math.round(elapsed / msPerMinute);
    unit = 'minute';
  } else if (elapsed < msPerDay) {
    num = Math.round(elapsed / msPerHour);
    unit = 'hour';
  } else if (elapsed < msPerMonth) {
    num = `${Math.round(elapsed / msPerDay)}`;
    unit = 'day';
  } else if (elapsed < msPerYear) {
    num = `${Math.round(elapsed / msPerMonth)}`;
    unit = 'month';
  } else {
    num = `${Math.round(elapsed / msPerYear)}`;
    unit = 'year';
  }
  if (num !== 1) {
    unit += 's';
  }
  return `${num} ${unit} ago`;
};

module.exports = relativeTimeDifference;