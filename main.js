var cookies = 0;
var cursors = 0;
var prestige = 0;

var saveInfo = {
	cookies: cookies,
	cursors: cursors,
	prestige: prestige
}

function cookieClick(number) {
	cookies += number;

	document.getElementById('cookies').innerHTML = cookies;
}

function buyCursor() {
	// Cursors cost = 10 * 1.1^(cursors)
	var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));

	if (cookies >= cursorCost) {
		cursors++;
		cookies -= cursorCost;

		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('cookies').innerHTML = cookies;
	}

	var nextCursorCost = Math.floor(10 * Math.pow(1.1, cursors));
	document.getElementById('cursorCost').innerHTML = nextCursorCost;
}

function saveData() {
	localStorage.setItem('save', JSON.stringify(saveInfo));
}

function removeData() {
	localStorage.removeItem('save');
}

window.setInterval(function () {
	cookieClick(cursors);
}, 1000);
