// Uppgift 1
function showMeal(meal) {
	document.querySelector('#meal').innerHTML = meal;
}

// Uppgift 2
function setOperator(operator) {
	document.querySelector('#operator').textContent = operator;
}

function calculate() {
	const a = Number(document.querySelector('#a').value);
	const b = Number(document.querySelector('#b').value);
	const operator = document.querySelector('#operator').textContent;

	switch (operator) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '/':
			return a / b;
		case '*':
			return a * b;
		case '%':
			return a % b;
	}
}

function showResult(result) {
	document.querySelector('#resultat').textContent = result;
}

// Uppgift 3
function getDate() {
	const today = new Date()
	document.querySelector('#date').textContent = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds();
}

// Uppgift 4
function onLoadTime() {
	const time = new Date()
	document.querySelector('#loadtime').textContent = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
}

window.onload = onLoadTime;

// Uppgift 5
function monthAndYear() {
	const months = ['', 'januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'november', 'december'];

	const today = new Date();

	document.querySelector('#month-and-year').textContent = months[Number(today.getMonth())] + ', ' + today.getFullYear();
}