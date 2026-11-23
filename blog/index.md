---
layout: page
title: Writing
excerpt: "Essays and notes by Jin Shang."
---
<ul>
{% for post in site.categories.blog %}{% unless post.tags contains 'leetcode' or post.hidden %}
<li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time> <a href="{{ post.url }}"{% if post.lang %} lang="{{ post.lang }}"{% endif %}>{{ post.title }}</a></li>
{% endunless %}{% endfor %}
</ul>

<details id="leetcode">
<summary>LeetCode notes (2019)</summary>
<ul>
{% for post in site.categories.blog reversed %}{% if post.tags contains 'leetcode' %}<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endif %}{% endfor %}
</ul>
</details>
