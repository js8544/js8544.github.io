---
layout: page
title: Search
search_omit: true
sitemap: false
---
<form action="/search/" method="get" role="search">
<label for="q">Search titles and summaries:</label>
<input type="search" id="q" name="q" autofocus>
<button type="submit">Search</button>
</form>
<p id="search-status" aria-live="polite"></p>
<ul id="search-results"></ul>
<noscript><p>Search needs JavaScript. The full list is on the <a href="/blog/">Writing</a> page.</p></noscript>
<script>
(function () {
  var q = (new URLSearchParams(location.search).get('q') || '').trim();
  var input = document.getElementById('q');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  input.value = q;
  if (!q) return;
  var words = q.toLowerCase().split(/\s+/);
  fetch('/search.json').then(function (r) { return r.json(); }).then(function (items) {
    var hits = items.filter(function (it) {
      var text = (it.title + ' ' + it.excerpt).toLowerCase();
      return words.every(function (w) { return text.indexOf(w) !== -1; });
    });
    status.textContent = hits.length + (hits.length === 1 ? ' result' : ' results') + ' for "' + q + '".';
    hits.forEach(function (it) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = it.link;
      a.textContent = it.title;
      li.appendChild(a);
      list.appendChild(li);
    });
  }).catch(function () { status.textContent = 'Search is unavailable right now.'; });
})();
</script>
