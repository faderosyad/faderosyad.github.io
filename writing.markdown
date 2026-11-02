---
layout: default
title: Writing
permalink: /writing/
description: Notes and essays by Fade Khalifah Rosyad about infrastructure, reliability, and engineering.
---
<header class="page-header"><p class="eyebrow">Notes from the work</p><h1>Writing</h1><p>Essays, practical notes, and lessons learned about platform engineering, cloud infrastructure, and the craft of building dependable systems.</p><a class="button secondary" href="https://medium.com/@faderosyad" rel="me">Read my writing on Medium <span aria-hidden="true">↗</span></a></header>
<div class="content-narrow">
{% if site.posts.size > 0 %}
<ul class="post-list">{% for post in site.posts %}<li class="post-item"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>{% if post.description %}<p>{{ post.description | escape }}</p>{% endif %}</li>{% endfor %}</ul>
{% else %}
<p class="empty-note">I’m collecting ideas for future notes. There’s nothing published here yet.</p>
{% endif %}
</div>
