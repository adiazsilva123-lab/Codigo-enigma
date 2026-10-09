document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menuBtn');
  const nav = document.getElementById('navLinks');

  // Menú de navegación para celulares
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');

      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
        menu.textContent = '☰';
      });
    });
  }

  // Buscador y filtros de expedientes
  const search = document.getElementById('caseSearch');
  const cards = [...document.querySelectorAll('.case-card')];
  const filters = [...document.querySelectorAll('.filter')];
  const empty = document.getElementById('emptyCases');

  let category = 'Todos';

  function update() {
    if (!cards.length) return;

    const q = (search?.value || '').trim().toLowerCase();
    let count = 0;

    cards.forEach(card => {
      const matchCategory =
        category === 'Todos' ||
        card.dataset.category === category;

      const matchText =
        !q ||
        (card.dataset.search || '').toLowerCase().includes(q) ||
        card.textContent.toLowerCase().includes(q);

      const show = matchCategory && matchText;

      card.classList.toggle('hidden', !show);

      if (show) count++;
    });

    if (empty) {
      empty.style.display = count ? 'none' : 'block';
    }
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      category = btn.dataset.filter || 'Todos';

      filters.forEach(b => {
        b.classList.toggle('active', b === btn);
      });

      update();
    });
  });

  if (search) {
    search.addEventListener('input', update);
  }

  update();
});
