var d = new Date;
var hour = d.getHours();
var minute = d.getMinutes();
var day = []
day[0] = "Sunday"
day[1] = "Monday"
day[2] = "Tuesday"
day[3] = "Wednesday"
day[4] = "Thursday"
day[5] = "Friday"
day[6] = "Saturday"
var month = []
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December"

if (minute < 10) {
    minute = "0" + minute;
}
var time = document.getElementById("time");
time.textContent = `${hour}:${minute}`;
time.style.fontSize = "2rem"

var writeDay = document.getElementById("day");
writeDay.textContent = `${day[d.getDay()]}, ${month[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`;


function exitWidgetOne() {
    var widFour = document.getElementById("widget-one");
    widFour.style.display = "none"
}

function exitWidgetTwo() {
    var widFour = document.getElementById("widget-two");
    widFour.style.display = "none"
}

function exitWidgetThree() {
    var widFour = document.getElementById("widget-three");
    widFour.style.display = "none"
}

function exitWidgetFour() {
    var widFour = document.getElementById("widget-four");
    widFour.style.display = "none"
}