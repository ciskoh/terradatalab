// Platform section: module toggles and the combinations table.
// Contains no text: names are read from the page, so it works in every language.
(function () {
  var section = document.querySelector('[data-platform]');
  if (!section) return;

  var toggles = Array.from(section.querySelectorAll('[data-module]'));
  var matchOut = section.querySelector('[data-match]');
  var combos = Array.from(document.querySelectorAll('[data-combination]')).map(function (el) {
    return {
      includes: el.dataset.includes.split(' '),
      name: el.querySelector('.combo__name').textContent.trim(),
      button: el.querySelector('.combo__toggle'),
      detail: el.querySelector('.combo__detail')
    };
  });

  // Show the combination that matches the switched-on modules, or the closest one.
  function updateMatch() {
    var best = null, bestScore = -1, exact = null;
    combos.forEach(function (c) {
      var score = toggles.filter(function (t) {
        var on = t.getAttribute('aria-pressed') === 'true';
        return on === c.includes.includes(t.dataset.module);
      }).length;
      if (score === toggles.length) exact = c;
      if (score > bestScore) { bestScore = score; best = c; }
    });
    if (!matchOut || !best) return;
    matchOut.textContent = exact ? exact.name : (section.dataset.closestPrefix + ' ' + best.name).trim();
  }

  toggles.forEach(function (t) {
    t.addEventListener('click', function () {
      t.setAttribute('aria-pressed', t.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      updateMatch();
    });
  });

  // One table row open at a time; clicking the open row closes it.
  combos.forEach(function (c) {
    c.button.addEventListener('click', function () {
      var opening = c.button.getAttribute('aria-expanded') !== 'true';
      combos.forEach(function (o) {
        o.button.setAttribute('aria-expanded', 'false');
        o.detail.hidden = true;
      });
      c.button.setAttribute('aria-expanded', String(opening));
      c.detail.hidden = !opening;
    });
  });

  updateMatch();
})();
