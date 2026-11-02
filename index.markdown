---
layout: default
title: Home
permalink: /
description: Platform and reliability engineering, cloud infrastructure, and things I learn along the way.
---
<section class="hero">
  <p class="eyebrow">Platform engineering · Cloud infrastructure · Reliability</p>
  <h1>Building systems that help teams <span>ship with confidence.</span></h1>
  <p class="lede">I’m Fade, a platform and reliability engineer in Indonesia. I work on cloud infrastructure, automation, and the foundations that make software dependable.</p>
  <div class="hero-actions">
    <a class="button" href="{{ '/projects/' | relative_url }}">Explore selected work <span aria-hidden="true">↗</span></a>
    <a class="button secondary" href="{{ '/curriculum-vitae/' | relative_url }}">View my CV</a>
  </div>
</section>
<div class="home-grid">
  <section>
    <div class="section-heading"><h2>Selected work</h2><a class="text-link" href="{{ '/projects/' | relative_url }}">All projects ↗</a></div>
    <ul class="project-list">
      {% for project in site.projects limit:3 %}
      <li class="project-item">
        <h3><a href="{{ project.url | relative_url }}">{{ project.title | escape }}</a></h3>
        <p>{{ project.description | escape }}</p>
        <div class="tag-row">{% for tag in project.tags limit:3 %}<span class="tag">{{ tag }}</span>{% endfor %}</div>
      </li>
      {% endfor %}
    </ul>
  </section>
  <section>
    <div class="section-heading"><h2>Recent writing</h2><a class="text-link" href="{{ '/writing/' | relative_url }}">All writing ↗</a></div>
    {% if site.posts.size > 0 %}<ul class="post-list">
      {% for post in site.posts limit:3 %}<li class="post-item"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></li>{% endfor %}
    </ul>{% else %}<p class="empty-note">I’m making space for notes and essays. Check back soon.</p>{% endif %}
  </section>
</div>
