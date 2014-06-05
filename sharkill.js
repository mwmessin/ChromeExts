// ==UserScript==
// @match http://www.grooveshark.com/
// @match http://grooveshark.com/
// ==/UserScript==

function $(selector) {
  return document.querySelectorAll(selector)[0];
}

function $E(tag) {
  return document.createElement(tag);
}

var styles = $E('style');
styles.innerHTML = '.decoupledCapital{opacity:0} #theme-header{position:absolute}';
$('head').appendChild(styles);

setInterval(function () {
  var stillThere = $('a.submit');
  if (stillThere) stillThere.click();
}, 2000)

setTimeout(function() {
  $('.play-button').click()
}, 2000);
