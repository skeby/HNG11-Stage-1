const currentDate = new Date();

const elementCurrentDay = document.getElementById("currentDay");
const elementCurrentTimeUTC = document.getElementById("currentTimeUTC");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getCurrentDay = () => {
  const currentDay = daysOfWeek[currentDate.getDay()];
  return currentDay;
};

const getCurrentTimeUTC = () => {
  const currentTimeUTC = currentDate.getUTCMilliseconds();
  return currentTimeUTC;
};

elementCurrentDay.textContent = getCurrentDay();
elementCurrentTimeUTC.textContent = getCurrentTimeUTC();
