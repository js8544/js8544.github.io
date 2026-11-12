---
layout: page
title: Writing
lede: "Essays on AI products, agents, and how teams work with them, plus older engineering notes."
excerpt: "Essays and notes by Jin Shang."
---
{% assign year = '' %}
<div class="archive">
{% for post in site.categories.blog %}{% unless post.tags contains 'leetcode' %}
{% assign y = post.date | date: "%Y" %}
{% if y != year %}{% unless year == '' %}</ol>{% endunless %}{% assign year = y %}<h2 class="archive__year">{{ y }}</h2><ol class="entries">{% endif %}
<li class="entry">
  <a href="{{ post.url }}">
    <time class="meta" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d" }}</time>
    <span class="entry__title"{% if post.lang %} lang="{{ post.lang }}"{% endif %}>{{ post.title }}</span>
    {% assign ex = post.excerpt | strip_html | strip %}{% if post.lang != 'zh' and ex != '' and y > '2023' %}<span class="entry__excerpt">{{ ex | truncate: 200 }}</span>{% endif %}
  </a>
</li>
{% endunless %}{% endfor %}
</ol>

<h2 class="archive__year" id="leetcode">LeetCode notes · 2019</h2>
<p class="archive__note">Short solution notes from interview practice, kept for the links that point here.</p>
<ul class="chips">
{% for post in site.categories.blog reversed %}{% if post.tags contains 'leetcode' %}<li><a href="{{ post.url }}">{{ post.title }}</a></li>{% endif %}{% endfor %}
</ul>
</div>
