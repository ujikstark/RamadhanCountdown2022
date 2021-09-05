const secondsElement = document.querySelector('.seconds h3');
const minutesElement = document.querySelector('.minutes h3');
const hoursElement = document.querySelector('.hours h3');
const daysElement = document.querySelector('.days h3');

const secondsBar = document.getElementById('seconds');
const minutesBar = document.getElementById('minutes');
const hoursBar = document.getElementById('hours');
const daysBar = document.getElementById('days');


var destinationDate = new Date("April 2, 2022 08:00:00").getTime();

var circle = document.querySelectorAll('.progress-ring__circle');


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

    // get all circle
    circle.forEach(c => {
        var radius = c.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        c.style.strokeDasharray = `${circumference} ${circumference}`;
        c.style.strokeDashoffset = `${circumference}`;
        
        
        if (c.id == 'seconds') {
            const secondsToPercent = (seconds*100/60); // 100% to 0%
            // const secondsToPercent = (100-(seconds+40))*100/60; // 0% to 100% 
            const offset = circumference - secondsToPercent / 100 * circumference;
            c.style.strokeDashoffset = offset;
        } else if (c.id == 'minutes') {
            const minutesToPercent = (minutes*100/60);
            const offset = circumference - minutesToPercent / 100 * circumference;
            c.style.strokeDashoffset = offset;
        } else if (c.id == 'hours') {
            const hoursToPercent = (hours*100/24);
            const offset = circumference - hoursToPercent / 100 * circumference;
            c.style.strokeDashoffset = offset;
        } else {
            const daysToPercent = Math.ceil(days*100/356);
            const offset = circumference - daysToPercent / 100 * circumference;
            c.style.strokeDashoffset = offset;
        }
        
    })

}, 1000);

