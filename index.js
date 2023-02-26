

let hourHand = document.getElementsByClassName("hr-hand")[0];
let minHand = document.getElementsByClassName("min-hand")[0];
let secHand = document.getElementsByClassName("sec-hand")[0];

setInterval(() => {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let msec = date.getMilliseconds();
    console.log(hour, min, sec);

    hourHand.style.transform = `rotate(${hour*30 + min/2}deg)`;
    minHand.style.transform = `rotate(${min*6 + sec/10}deg)`;
    secHand.style.transform = `rotate(${sec*6 + msec/166.6666666667}deg)`;
}, 1);