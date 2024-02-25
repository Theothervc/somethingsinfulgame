/** CONSTS */
var root = document.querySelector(":root");
var rootStyles = getComputedStyle(root);
var themeButton = document.getElementById("theme-switch");
var canvas = document.queryselector('canvas');

var darkMode = true;
/** Might improve the way to switch themes */
function switchTheme(darkMode) {
	if darkMode {
		root.style.setProperty("--ptextcolor", "black")
		root.style.setProperty("--stextcolor", "grey")
		root.style.setProperty("--textcolorchange", "purple")
		root.style.setProperty("--backgroundcolor", "white")
		root.style.setProperty("--sbackgroundcolor", "lightgrey")
		darkMode = false;
	}
	else {
		root.style.setProperty("--ptextcolor", "white")
		root.style.setProperty("--stextcolor", "lightgrey")
		root.style.setProperty("--textcolorchange", "green")
		root.style.setProperty("--backgroundcolor", "rgb(10, 10, 20)")
		root.style.setProperty("--sbackgroundcolor", "rgb(20, 20, 40)")
		darkMode = false;
	}
};

themeButton.addEventListener("click", switchTheme(darkMode);
