const videos = document.querySelectorAll('.iframe-container[data-src]');

const obs = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const iframe = document.createElement('iframe');
    iframe.src = el.dataset.src;
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;

    el.appendChild(iframe);
    obs.unobserve(el);
  });
}, { rootMargin: "150px" });

videos.forEach(v => obs.observe(v));
