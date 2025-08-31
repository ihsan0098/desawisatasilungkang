
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
  }

  // Home: load 3 featured destinations
  const homeGrid = document.getElementById('destinasiGridHome');
  if (homeGrid) {
    axios.get('./data/destinasi.json').then(res => {
      const items = (res.data || []).slice(0, 3);
      homeGrid.innerHTML = items.map(cardTemplate).join('');
    }).catch(() => {});
  }

  // Destinasi page
  const grid = document.getElementById('destinasiGrid');
  const search = document.getElementById('searchDest');
  const filter = document.getElementById('facilityFilter');
  if (grid) {
    let all = [];
    axios.get('../data/destinasi.json').then(res => {
      all = res.data || [];
      render(all);
    });
    function render(items) {
      grid.innerHTML = items.map(cardTemplate).join('');
    }
    function apply() {
      let term = (search?.value || '').toLowerCase();
      let fac = filter?.value || '';
      let items = all.filter(x => (x.name.toLowerCase().includes(term) || x.desc.toLowerCase().includes(term)));
      if (fac) items = items.filter(x => x.facilities?.includes(fac));
      render(items);
    }
    search?.addEventListener('input', apply);
    filter?.addEventListener('change', apply);
  }

  // UMKM page
  const umkmGrid = document.getElementById('umkmGrid');
  if (umkmGrid) {
    axios.get('../data/umkm.json').then(res => {
      const items = res.data || [];
      umkmGrid.innerHTML = items.map(x => `
        <article class="card">
          <img src="${x.image}" alt="${x.name}">
          <div class="body">
            <h3 class="font-semibold">${x.name}</h3>
            <p class="text-sm text-gray-600">${x.category} — ${x.contact}</p>
          </div>
        </article>`).join('');
    });
  }

  // Paket page
  const paketGrid = document.getElementById('paketGrid');
  if (paketGrid) {
    axios.get('../data/paket.json').then(res => {
      const items = res.data || [];
      paketGrid.innerHTML = items.map(p => `
        <article class="card">
          <img src="${p.image}" alt="${p.title}">
          <div class="body">
            <h3 class="font-semibold">${p.title}</h3>
            <p class="text-sm text-gray-600 mb-2">${p.desc}</p>
            <div class="text-sm">Durasi: ${p.duration}</div>
            <div class="text-sm">Harga mulai: ${p.price}</div>
          </div>
        </article>
      `).join('');
    });
  }
});

function cardTemplate(x) {
  return `<article class="card">
    <img src="${x.image}" alt="${x.name}">
    <div class="body">
      <h3 class="font-semibold">${x.name}</h3>
      <p class="text-sm text-gray-600 mb-2">${x.desc}</p>
      <div class="text-xs text-gray-500">Fasilitas: ${(x.facilities||[]).join(', ')}</div>
      <div class="text-xs text-gray-500">Jarak: ${x.distance || '-'}</div>
    </div>
  </article>`;
}
