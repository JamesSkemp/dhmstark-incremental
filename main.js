var cookies = 0;

function cookieClick(number) {
	cookies += number;

	document.getElementById('cookies').innerHTML = cookies;
}