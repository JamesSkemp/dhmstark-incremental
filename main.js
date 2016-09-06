var cookies = 0;
var cursors = 0;

function cookieClick(number) {
	cookies += number;

	document.getElementById('cookies').innerHTML = cookies;
}

function buyCursor() {
	// Cursors cost = 10 * 1.1^(cursors)
	var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));

	cursors++;

	document.getElementById('cursors').innerHTML = cursors;
	document.getElementById('cursorCost').innerHTML = cursorCost;
}