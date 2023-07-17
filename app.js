const clock = document.getElementsByClassName("clock");
const secondsHand = document.getElementsByClassName("seconds-hand");
const minutesHand = document.getElementsByClassName("minutes-hand");
const hoursHand = document.getElementsByClassName("hours-hand");
const digitalclock = document.getElementsByClassName("digitalClock");
const secondsDG = document.getElementsByClassName("seconds");
const minutesDG = document.getElementsByClassName("minutes");
const hoursDG = document.getElementsByClassName("hours");

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const timeInterval = 6;
  secondsHand[0].style.transform = "rotate(" + seconds * timeInterval + "deg)";
  minutesHand[0].style.transform =
    "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)";
  hoursHand[0].style.transform =
    "rotate(" + (hours * 30 + minutes / 2) + "deg)";

  secondsDG[0].innerHTML = seconds > 10 ? seconds : "0" + seconds;
  minutesDG[0].innerHTML = minutes > 10 ? minutes : "0" + minutes;
  hoursDG[0].innerHTML = hours != 0 ? hours : "0" + hours;
}

setInterval(getTime, 100);
