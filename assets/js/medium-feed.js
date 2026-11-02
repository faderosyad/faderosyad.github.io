(() => {
  const feed = document.querySelector('[data-medium-feed]');
  if (!feed) return;

  const status = feed.querySelector('[data-feed-status]');
  const list = feed.querySelector('[data-feed-posts]');
  const fallback = feed.querySelector('[data-feed-fallback]');
  const feedUrl = feed.dataset.feedUrl;

  const excerptFrom = (markup) => {
    const parsed = new DOMParser().parseFromString(markup || '', 'text/html');
    const text = (parsed.body.textContent || '').replace(/\s+/g, ' ').trim();
    if (text.length <= 220) return text;
    return `${text.slice(0, 220).replace(/\s+\S*$/, '')}…`;
  };

  const addText = (parent, tagName, className, value) => {
    const node = document.createElement(tagName);
    if (className) node.className = className;
    node.textContent = value;
    parent.append(node);
    return node;
  };

  const showFallback = () => {
    status.hidden = true;
    fallback.hidden = false;
  };

  fetch(feedUrl, { mode: 'cors', cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error(`Medium feed returned ${response.status}`);
      return response.text();
    })
    .then((xmlText) => {
      const xml = new DOMParser().parseFromString(xmlText, 'application/xml');
      if (xml.querySelector('parsererror')) throw new Error('Medium returned invalid RSS');

      const posts = Array.from(xml.querySelectorAll('channel > item')).slice(0, 3);
      if (!posts.length) throw new Error('Medium feed has no posts');

      for (const post of posts) {
        const title = post.querySelector('title')?.textContent?.trim();
        const rawUrl = post.querySelector('link')?.textContent?.trim();
        if (!title || !rawUrl) continue;

        const url = new URL(rawUrl);
        if (url.protocol !== 'https:' || url.hostname !== 'medium.com') continue;

        const card = document.createElement('li');
        card.className = 'medium-story';
        const rawDate = post.querySelector('pubDate')?.textContent?.trim();
        const date = rawDate ? new Date(rawDate) : null;
        if (date && !Number.isNaN(date.valueOf())) {
          const time = addText(card, 'time', '', new Intl.DateTimeFormat(undefined, {
            year: 'numeric', month: 'short', day: 'numeric'
          }).format(date));
          time.dateTime = date.toISOString();
        }

        const heading = document.createElement('h3');
        const link = addText(heading, 'a', '', title);
        link.href = url.href;
        link.rel = 'external';
        card.append(heading);

        const description = post.querySelector('description')?.textContent || '';
        const excerpt = excerptFrom(description);
        if (excerpt) addText(card, 'p', '', excerpt);
        list.append(card);
      }

      if (!list.children.length) throw new Error('Medium feed has no displayable posts');
      status.hidden = true;
    })
    .catch((error) => {
      console.info('Medium RSS feed could not be loaded.', error);
      showFallback();
    });
})();
