---
layout: page
title: Writing
title_zh: 文章
excerpt: "Essays and notes by Jin Shang."
---
{% for post in site.categories.blog %}{% unless post.hidden %}
<p class="e"><a href="{{ post.url }}">{% include post-title.html post=post %}</a><br><span class="m"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time></span></p>
{% endunless %}{% endfor %}
