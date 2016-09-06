var cookies = 0;
var cursors = 0;
var prestige = 0;

function cookieClick(number) {
	cookies += number;

	updateText();
}

function buyCursor() {
	// Cursors cost = 10 * 1.1^(cursors)
	var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));

	if (cookies >= cursorCost) {
		cursors++;
		cookies -= cursorCost;
	}

	updateText();
}

function saveData() {
	var saveInfo = {
		cookies: cookies,
		cursors: cursors,
		prestige: prestige
	}

	localStorage.setItem('save', JSON.stringify(saveInfo));
}

function loadData() {
	var saveGame = JSON.parse(localStorage.getItem('save'));
	
	if (saveGame !== null) {
		if (typeof saveGame.cookies !== undefined) {
			cookies = saveGame.cookies;
		}
		if (typeof saveGame.cursors !== undefined) {
			cursors = saveGame.cursors;
		}
		if (typeof saveGame.prestige !== undefined) {
			prestige = saveGame.prestige;
		}

		updateText();
	}
}

function removeData() {
	localStorage.removeItem('save');
}

function prettify(input) {
	var output = Math.round(input * 1000000) / 1000000;
	return output;
}

function updateText() {
	document.getElementById('cursors').innerHTML = prettify(cursors);
	document.getElementById('cookies').innerHTML = prettify(cookies);

	var nextCursorCost = Math.floor(10 * Math.pow(1.1, cursors));
	if (nextCursorCost <= 0) {
		nextCursorCost = 10;
	}
	document.getElementById('cursorCost').innerHTML = prettify(nextCursorCost);
}

window.setInterval(function () {
	cookieClick(cursors);
}, 1000);
