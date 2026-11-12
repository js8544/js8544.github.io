(function () {
  var root = document.documentElement;
  var btn = document.querySelector('[data-theme-toggle]');
  if (btn) {
    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
  // Draft-only style switcher; removed before launch.
  document.querySelectorAll('.draft-bar a').forEach(function (a) {
    if (a.getAttribute('data-s') === root.getAttribute('data-style')) a.classList.add('on');
  });
  // Wide tables scroll inside their own box instead of the page.
  document.querySelectorAll('.prose table').forEach(function (t) {
    var box = document.createElement('div');
    box.className = 'table-scroll';
    t.parentNode.insertBefore(box, t);
    box.appendChild(t);
  });
})();
