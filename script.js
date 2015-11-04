var body = document.getElementsByTagName('body')[0];

body.style.margin = "0";

var i = 0;

while (i<81) {
	var square = document.createElement('div');
	square.style.width = "11.11%";
	square.style.float = "left";
	square.style.margin = "0";
	square.style.paddingBottom = "11.11%";
	if (i % 2 === 0) {
		square.style.backgroundColor = "black";
	} else {
		square.style.backgroundColor = "red";
	}
	document.body.appendChild(square);
	i++;
}