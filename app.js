const secondsElement = document.querySelector('.seconds h3');
const minutesElement = document.querySelector('.minutes h3');
const hoursElement = document.querySelector('.hours h3');
const daysElement = document.querySelector('.days h3');

const secondsBar = document.getElementById('seconds');
const minutesBar = document.getElementById('minutes');
const hoursBar = document.getElementById('hours');
const daysBar = document.getElementById('days');

var destinationDate = new Date("April 2, 2022 08:00:00").getTime();

var x = setInterval(function() {

    // get time now with number of milliseconds
    var now = new Date().getTime();

    // find the distance between now and the destination time
    var distance = destinationDate - now;

    // calculation
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display the time
    secondsElement.innerHTML = seconds;
    minutesElement.innerHTML = minutes;
    hoursElement.innerHTML = hours;
    daysElement.innerHTML = days;
    
    // calculate the bar
    secondsBar.style.width = (seconds*100/60)+'%';
    minutesBar.style.width = (minutes*100/60)+'%';
    hoursBar.style.width = (hours*100/24)+'%';
    daysBar.style.width = Math.ceil(days*100/356)+'%';
    // console.log(d.getSeconds());
    
    // display the bar
    
}, 1000);

