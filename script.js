var body = document.getElementsByTagName('body')[0];

body.style.margin = "0";

var i = 0;

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

while (i<81) {
	var square = document.createElement('div');
	square.style.width = "11.11%";
	square.style.float = "left";
	square.style.margin = "0";
	square.style.paddingBottom = "11.11%";
	square.style.backgroundColor = getRandomColor();
	document.body.appendChild(square);
	i++;
}