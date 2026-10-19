/* Public contact address. Change it here only. */
var SITE_EMAIL = "tolubabs4@outlook.com";

(function () {
  var mailto = "mailto:" + SITE_EMAIL;
  var nodes = document.querySelectorAll("[data-email]");
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.tagName === "A") {
      node.setAttribute("href", mailto);
      if (node.getAttribute("data-email") === "address") {
        node.textContent = SITE_EMAIL;
      }
    }
  }

  var data = document.querySelector('script[type="application/ld+json"]');
  if (!data) return;
  try {
    var person = JSON.parse(data.textContent);
    person.email = SITE_EMAIL;
    data.textContent = JSON.stringify(person);
  } catch (error) {
    /* Leave the structured data as written if it cannot be parsed. */
  }
})();
