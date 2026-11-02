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
<section class="career-section" aria-labelledby="career-title">
  <div class="section-heading career-heading">
    <div><p class="eyebrow">Where I’ve worked</p><h2 id="career-title">Career timeline</h2></div>
  </div>
  <div class="career-scroll" role="region" aria-label="Career timeline, scroll horizontally on small screens" tabindex="0">
    <ol class="career-list">
      <li><span class="career-year">2019–2020</span><span class="career-marker" aria-hidden="true"></span><span class="career-company">Advotics</span></li>
      <li><span class="career-year">2020–2024</span><span class="career-marker" aria-hidden="true"></span><span class="career-company">ByOrange</span></li>
      <li><span class="career-year">2024</span><span class="career-marker" aria-hidden="true"></span><span class="career-company">Pintu</span></li>
      <li><span class="career-year">2024–2025</span><span class="career-marker" aria-hidden="true"></span><span class="career-company">CFX Group</span></li>
    </ol>
  </div>
</section>
<section class="tech-stack" aria-labelledby="tech-stack-title">
  <div class="section-heading tech-stack-heading">
    <div><p class="eyebrow">Tools I work with</p><h2 id="tech-stack-title">Tech stack</h2></div>
    <p>Technologies I’ve used to build, deliver, and operate production systems.</p>
  </div>
  <div class="tech-grid">
    <section class="tech-group" aria-labelledby="tech-cloud-title">
      <h3 id="tech-cloud-title">Cloud</h3>
      <ul class="tech-icons">
        <li><img src="https://devicons.io/devicons/icons/aws.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>AWS</span></li>
        <li><img src="https://devicons.io/devicons/icons/google-cloud.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Google Cloud</span></li>
      </ul>
    </section>
    <section class="tech-group" aria-labelledby="tech-platform-title">
      <h3 id="tech-platform-title">Platform &amp; infrastructure</h3>
      <ul class="tech-icons">
        <li><img src="https://devicons.io/devicons/icons/kubernetes.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Kubernetes</span></li>
        <li><img src="https://devicons.io/devicons/icons/terraform.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Terraform</span></li>
        <li><img src="https://devicons.io/devicons/icons/ansible.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Ansible</span></li>
        <li><img src="https://devicons.io/devicons/icons/docker.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Docker</span></li>
        <li><img src="https://raw.githubusercontent.com/istio/istio/master/logo/istio-bluelogo-whitebackground-unframed.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Istio</span></li>
      </ul>
    </section>
    <section class="tech-group" aria-labelledby="tech-delivery-title">
      <h3 id="tech-delivery-title">Delivery</h3>
      <ul class="tech-icons">
        <li><img src="https://devicons.io/devicons/icons/github-actions.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>GitHub Actions</span></li>
        <li><img src="https://devicons.io/devicons/icons/gitlab.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>GitLab CI/CD</span></li>
        <li><img src="https://devicons.io/devicons/icons/argo.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Argo CD</span></li>
      </ul>
    </section>
    <section class="tech-group" aria-labelledby="tech-observability-title">
      <h3 id="tech-observability-title">Observability &amp; data</h3>
      <ul class="tech-icons">
        <li><img src="https://devicons.io/devicons/icons/prometheus.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Prometheus</span></li>
        <li><img src="https://devicons.io/devicons/icons/grafana.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Grafana</span></li>
        <li><img src="https://devicons.io/devicons/icons/datadog.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Datadog</span></li>
        <li><img src="https://devicons.io/devicons/icons/vault.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Vault</span></li>
        <li><img src="https://devicons.io/devicons/icons/postgresql.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>PostgreSQL</span></li>
        <li><img src="https://devicons.io/devicons/icons/mysql.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>MySQL</span></li>
        <li><img src="https://devicons.io/devicons/icons/bash.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.hidden=true"><span>Bash</span></li>
      </ul>
    </section>
  </div>
</section>
<div class="home-grid">
  <section>
    <div class="section-heading"><h2>Selected work</h2><a class="text-link" href="{{ '/projects/' | relative_url }}">All projects ↗</a></div>
    {% assign ordered_projects = site.projects | sort: "order" %}
    <ul class="project-list">
      {% for project in ordered_projects %}
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
    <p class="empty-note">I publish essays and notes on Medium.</p>
    <p class="medium-home-links"><a class="button secondary" href="https://medium.com/@faderosyad" rel="me">Visit my Medium profile <span aria-hidden="true">↗</span></a> <a class="text-link" href="https://medium.com/feed/@faderosyad">RSS feed ↗</a></p>
  </section>
</div>
