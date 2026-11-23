---
layout: page
title: Search
title_zh: 搜索
search_omit: true
sitemap: false
---
<form action="/search/" method="get" role="search">
<label for="q">{% include t.html en="Search titles and summaries:" zh="搜索标题和摘要：" %}</label>
<input type="search" id="q" name="q" autofocus>
<button type="submit">{% include t.html en="Search" zh="搜索" %}</button>
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
      var text = (it.title + ' ' + (it.title_translated || '') + ' ' + it.excerpt).toLowerCase();
      return words.every(function (w) { return text.indexOf(w) !== -1; });
    });
    status.textContent = document.documentElement.getAttribute('data-ui') === 'zh'
      ? '“' + q + '”共 ' + hits.length + ' 条结果。'
      : hits.length + (hits.length === 1 ? ' result' : ' results') + ' for "' + q + '".';
    hits.forEach(function (it) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = it.link;
      var zhUi = document.documentElement.getAttribute('data-ui') === 'zh';
      a.textContent = (it.title_translated && (it.lang === 'zh') !== zhUi) ? it.title_translated : it.title;
      li.appendChild(a);
      list.appendChild(li);
    });
  }).catch(function () { status.textContent = 'Search is unavailable right now.'; });
})();
</script>
