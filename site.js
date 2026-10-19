/* YouTube channel. Tolu has not started it yet. Change the URL here only. */
var SITE_YOUTUBE = "https://www.youtube.com/@thbabs_yt";

(function () {
  var links = document.querySelectorAll("[data-youtube]");
  for (var i = 0; i < links.length; i++) {
    links[i].setAttribute("href", SITE_YOUTUBE);
  }
})();
