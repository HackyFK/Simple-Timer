let timer = document.getElementById('timer');
let startTimerButton = document.getElementById('start-timer');
let stopTimerButton = document.getElementById('stop-timer');
let resetTimerButton = document.getElementById('reset-timer');
let intervalId;
let seconds = 0;
let centiseconds = 0;

startTimerButton.addEventListener('click', startTimer);
stopTimerButton.addEventListener('click', stopTimer);
resetTimerButton.addEventListener('click', resetTimer);

function startTimer() {
  intervalId = setInterval(() => {
    centiseconds++;
    if (centiseconds === 100) {
      seconds++;
      centiseconds = 0;
    }
    if (seconds === 999 && centiseconds === 59) {
      stopTimer();
    }
    timer.textContent = `${padZero(seconds)}:${padZero(centiseconds)}`;
  }, 10);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  centiseconds = 0;
  timer.textContent = '000:00';
}

function padZero(value) {
  return (value < 10 ? '0' : '') + value;
}