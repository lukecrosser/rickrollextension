$(document).ready(function() {
	var chance = Math.floor(Math.random() * 100);
	if(chance == 82) {
		nevergonnagive();
	}
});

var generateHTML = function() {
	var html = "<video autoplay loop style='height: 100vh; width: 100vw'><source src='https://raw.githubusercontent.com/lukecrosser/rickrollextension/vid.webm' type='video/webm'><source src='https://raw.githubusercontent.com/lukecrosser/rickrollextension/vid.mp4' type='video/mp4'></video>";
	return html;
};

var nevergonnagive = function() {
	setTimeout(function() {
		var html = generateHTML();
		$('body').html(html);
		document.body.style.backgroundColor = "black";
		setTimeout(function() {
			window.location.replace(document.URL);
		}, 20000);
	}, 3000);
};
