let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function padStart(value) {
    return string(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}` ;
}

function timer() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    if (interval) resetClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    if (interval) stopClock()
    interval= setInterval(timer, 1000)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}