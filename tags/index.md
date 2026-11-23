---
layout: page
title: Tags
title_zh: 标签
search_omit: true
---
{% assign tags = site.tags | sort %}
<p>{% for tag in tags %}<a href="#{{ tag[0] | slugify }}">{{ tag[0] }}</a> ({{ tag[1] | where_exp: 'p', 'p.hidden != true' | size }}){% unless forloop.last %} · {% endunless %}{% endfor %}</p>
{% for tag in tags %}
<h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
<ul>
{% for post in tag[1] %}{% unless post.hidden %}<li><a href="{{ post.url }}"{% if post.lang %} lang="{{ post.lang }}"{% endif %}>{{ post.title }}</a></li>
{% endunless %}{% endfor %}
</ul>
{% endfor %}
