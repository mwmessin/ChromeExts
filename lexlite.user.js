// ==UserScript==
// @match http://*/*.coffee
// @match http://*/*.js
// @match http://*/*.css
// @match https://*/*.coffee
// @match https://*/*.js
// @match https://*/*.css
// ==/UserScript==

var pre = document.body.children[0];
var code = pre.innerHTML;

var keywords = new RegExp("\\b(" + [
	"function",
	"if",
	"else",
	"switch",
	"return",
	"this",
	"var",
	"new",
	"prototype",
	"debugger"
].join(")\\b|\\b(") + ")\\b", "g");

var numbers = new RegExp("\\b([-]?[0-9]+[\\.]?[0-9]+)\\b", "g");

code = code.replace(keywords, function (token) {
	return "<span style='color:blue'>" + token + "</span>";
});

code = code.replace(numbers, function (token) {
	return "<span style='color:red'>" + token + "</span>";
});

pre.innerHTML = code;
