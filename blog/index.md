---
layout: page
title: Writing
title_zh: 文章
excerpt: "Essays and notes by Jin Shang."
---
<ul>
{% for post in site.categories.blog %}{% unless post.tags contains 'leetcode' or post.hidden %}
<li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time> <a href="{{ post.url }}"{% if post.lang %} lang="{{ post.lang }}"{% endif %}>{{ post.title }}</a></li>
{% endunless %}{% endfor %}
</ul>

<details id="leetcode">
<summary>{% include t.html en="LeetCode notes (2019)" zh="LeetCode 笔记（2019）" %}</summary>
<ul>
{% for post in site.categories.blog reversed %}{% if post.tags contains 'leetcode' %}<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endif %}{% endfor %}
</ul>
</details>
