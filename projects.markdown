---
layout: default
title: Projects
permalink: /projects/
description: Selected infrastructure and reliability work by Fade Khalifah Rosyad.
---
<header class="page-header"><p class="eyebrow">Things I’ve worked on</p><h1>Selected work</h1><p>A few examples of infrastructure and delivery problems I’ve helped solve. These summaries focus on the work and outcomes; implementation details may be confidential.</p></header>
<div class="cards">
{% for project in site.projects %}
<article class="card">
  <span class="project-label">{{ project.context }}</span>
  <h2><a href="{{ project.url | relative_url }}">{{ project.title | escape }}</a></h2>
  <p>{{ project.description | escape }}</p>
  <div class="tag-row">{% for tag in project.tags %}<span class="tag">{{ tag }}</span>{% endfor %}</div>
</article>
{% endfor %}
</div>
