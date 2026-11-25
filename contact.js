(() => {
  'use strict';
  const links = document.querySelector('[data-contact-links]');
  if (!links || !('popover' in HTMLElement.prototype)) return;

  const panel = document.createElement('nav');
  panel.id = 'floatingContactPanel';
  panel.setAttribute('popover', 'auto');
  panel.setAttribute('aria-label', 'Liên hệ UnDo');
  for (const link of links.querySelectorAll('a')) panel.append(link.cloneNode(true));

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn floating-contact';
  button.textContent = 'Liên hệ';
  button.setAttribute('popovertarget', panel.id);
  document.querySelector('footer').after(button, panel);
})();
