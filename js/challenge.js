const counterElement = document.getElementById('counter');
const pauseButton = document.getElementById('pause');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const likeButton = document.getElementById('heart');
const counterLikesList = document.querySelector("ul.likes")
const counterLikes = {}

document.addEventListener("DOMContentLoaded", () => {
	startIncrementingCounter();
	plusButton.addEventListener('click', incrementCounter);
	minusButton.addEventListener('click', decrementCounter);
	likeButton.addEventListener('click', heartClick);
});

// Check if counter has been paused.
let isCounterRunning = () => { return (pauseButton.innerText === "pause") ? true : false }

// Starts incrementing counter every second when page has been loaded.
let startIncrementingCounter = () => { setInterval(incrementCounter, 1000) }

// Increments current value if counter has not been paused.
let incrementCounter = () => {
	if (isCounterRunning()) { counterElement.innerText = parseInt(counterElement.innerText) + 1 }
}

// Decrements current value if counter has not been paused.
let decrementCounter = () => {
	if (isCounterRunning()) { counterElement.innerText = parseInt(counterElement.innerText) - 1 }
}

// Likes an individual number of the counter. And displays the number of 'likes' associated with that number.
let heartClick = () => {
	let counter = parseInt(counterElement.innerText);
	counterLikes[counter] ? counterLikes[counter] += 1 : counterLikes[counter] = 1
	if (document.getElementById(`like-${counter}`)){
		document.getElementById(`like-${counter}`).innerText = `${counter} was liked ${counterLikes[counter]} times`
	} 
	else {
		const li = document.createElement("li")
		li.id = `like-${counter}`
		li.innerText = `${counter} was liked 1 time`
		counterLikesList.appendChild(li)
	}
	
}