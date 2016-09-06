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

	document.getElementById('cookies').innerHTML = prettify(cookies);
}

function buyCursor() {
	// Cursors cost = 10 * 1.1^(cursors)
	var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));

	if (cookies >= cursorCost) {
		cursors++;
		cookies -= cursorCost;

		document.getElementById('cursors').innerHTML = prettify(cursors);
		document.getElementById('cookies').innerHTML = prettify(cookies);
	}

	var nextCursorCost = Math.floor(10 * Math.pow(1.1, cursors));
	document.getElementById('cursorCost').innerHTML = prettify(nextCursorCost);
}

function saveData() {
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
	}
}

function removeData() {
	localStorage.removeItem('save');
}

function prettify(input) {
	var output = Math.round(input * 1000000) / 1000000;
	return output;
}

window.setInterval(function () {
	cookieClick(cursors);
}, 1000);
