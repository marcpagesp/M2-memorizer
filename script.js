let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"]

document.addEventListener("input", function() {
	let letterList = document.getElementById("letter-list")
	let max = document.getElementById("max-letter").value
	let min = document.getElementById("min-letter").value
	letterList.innerHTML = letters.slice(min, max).join(", ")
});

document.addEventListener("click", function(e) {
	e = String(e.target)
	if (e === "[object HTMLInputElement]" || e === "[object HTMLButtonElement]") { return }
	let max = document.getElementById("max-letter").value
	let min = document.getElementById("min-letter").value
	let letter = document.getElementById("letter")
	let lettersIncluded = letters.slice(min, max)
	let pos = Math.floor(Math.random() * (max - min))
	if (letter.innerHTML === lettersIncluded[pos] && pos != lettersIncluded.length - 1) { pos++ }
	else if (letter.innerHTML === lettersIncluded[pos] && pos === lettersIncluded.length - 1) { pos = 0 }
	letter.innerHTML = lettersIncluded[pos]
});

function showAllAlgorithms() {
	let button = document.getElementById("show-all-algorithms")
	if (button.innerHTML === "Hide all algorithms") {
		hideAllAlgorithms()
		return
	}
	let algorithms = document.getElementById("algorithms")
	let body = document.body 
	algorithms.style.display = "block"
	body.style.top = "0%"
	body.style.transform = "translate(-50%, 0%)"
	button.innerHTML = "Hide all algorithms"
}

function hideAllAlgorithms() {
	let button = document.getElementById("show-all-algorithms")
	let algorithms = document.getElementById("algorithms")
	let body = document.body 
	algorithms.style.display = "none"
	body.style.top = "50%"
	body.style.transform = "translate(-50%, -50%)"
	button.innerHTML = "Show all algorithms"
}
