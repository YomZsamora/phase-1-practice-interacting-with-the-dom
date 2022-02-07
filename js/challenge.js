const pause = document.getElementById('pause');
const counterElement = document.getElementById('counter');

document.addEventListener("DOMContentLoaded", () => {
	startIncrementingCounter();
});

// Check if counter has been paused.
let isCounterRunning = () => { return (pause.innerText === "pause") ? true : false }

// Starts incrementing counter when page has been loaded.
let startIncrementingCounter = () => { setInterval(incrementCounter, 1000) }

let incrementCounter = () => {
	if (isCounterRunning()){
		counterElement.innerText = parseInt(counterElement.innerText) + 1
	}
}

let checkPausedCounter = () => {
	
}