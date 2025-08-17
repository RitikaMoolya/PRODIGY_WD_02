let startTime = 0;
let elapsedTime = 0;
let interval;
let isRunning = false;

const display = document.getElementById("display");
const lapsList = document.getElementById("laps");

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(update, 1000);
    isRunning = true;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(interval);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(interval);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00";
  lapsList.innerHTML = "";
}

function update() {
  elapsedTime = Date.now() - startTime;
  display.textContent = timeToString(elapsedTime);
}

function lap() {
  if (isRunning) {
    const li = document.createElement("li");
    li.textContent = timeToString(elapsedTime);
    lapsList.appendChild(li);
  }
}
