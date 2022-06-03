const lang = navigator.language;
const date = new Date();

const dayNumber = date.getDate();
const month = date.getMonth();
const dayName = date.toLocaleString(lang,{weekday: 'long'})
const monthName = date.toLocaleString(lang,{month: 'long'})
const year = date.getFullYear()

document.querySelector('.calendat__day_month').innerHTML = monthName;
document.querySelector('.calendar__day_name').innerHTML = dayName;
document.querySelector('.calendar__day_day').innerHTML = dayNumber;
document.querySelector('.calendar__day_year').innerHTML = year;