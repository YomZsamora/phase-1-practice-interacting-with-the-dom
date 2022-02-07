const pause = document.getElementById('pause');

document.addEventListener("DOMContentLoaded", () => {
	
});

let isCounterRunning = () => {
	return (pause.innerText === "pause") ? true : false
}

let startIncrementingCounter = () => {
	setInterval(checkPausedCounter, 1000)
}

let checkPausedCounter = () => {
	
}