let timer;
let isRunning = false;
let startTime;

function start_stop() {
  if (!isRunning) {
    start();
    document.getElementById('start_stop').innerText = 'Stop';
  } else {
    stop();
    document.getElementById('start_stop').innerText = 'Start';
  }
}

function start() {
  isRunning = true;
  startTime = new Date().getTime();
  timer = setInterval(updateDisplay, 1000);
}

function stop() {
  isRunning = false;
  clearInterval(timer); // Stop the timer
}

function updateDisplay() {
  const currentTime = new Date().getTime(); // Get the current time
  const elapsedTime = currentTime - startTime; // Calculate elapsed time
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const formattedTime = formatTime(hours, minutes, seconds);
  document.getElementById('counter').innerText = formattedTime;
}

function formatTime(hours, minutes, seconds) {
  const formattedHours = addZero(hours);
  const formattedMinutes = addZero(minutes);
  const formattedSeconds = addZero(seconds);
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function addZero(num) {
  return (num < 10) ? `0${num}` : num;
}

function reset() {
  document.getElementById('start_stop').innerText = 'Start';
  document.getElementById('counter').innerText = '00:00:00';
}

reset();