---
layout: page
title: Writing
title_zh: 文章
excerpt: "Essays and notes by Jin Shang."
---
<ul>
{% for post in site.categories.blog %}{% unless post.hidden %}
<li><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time> <a href="{{ post.url }}">{% include post-title.html post=post %}</a></li>
{% endunless %}{% endfor %}
</ul>
