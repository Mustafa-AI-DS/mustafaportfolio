(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');

  if (!btn || !menu) return;

  const setState = (open) => {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    setState(!isOpen);
  });

  // Close menu when a link is clicked
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setState(false));
  });
    // Yellow spotlight hover (mouse-follow) for cards
  document
    .querySelectorAll('.proj, .hero__media, .panel, .card, .highlight, .note')
    .forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mx', `50%`);
        card.style.setProperty('--my', `30%`);
      });
    });
  // Contact form -> mailto (no backend needed)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();

      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

const gmailUrl =
  `https://mail.google.com/mail/?view=cm&fs=1&to=moustafaayoub2005@gmail.com` +
  `&su=${subject}&body=${body}`;
window.open(gmailUrl, '_blank');
    });
  }

})();
