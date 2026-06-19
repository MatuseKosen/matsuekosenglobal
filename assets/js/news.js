// ─── News Data ────────────────────────────────────────────────────────────────
var NEWS = [
  {
    id: 1,
    date: 'October 2024',
    location: 'Global Commons',
    tag: 'Event',
    tagColor: '#d97706',
    title: '2024 Halloween Party 🎃',
    description: 'Students had the opportunity to learn about the origin of Halloween and its fascinating history. They were also able to carve their own Jack-o\'-lanterns! A wonderful evening of cross-cultural fun at the Global Commons.',
    image: 'https://sspark.genspark.ai/cfimages?u1=MXTd4eYOJq1dikf0Tes9%2Bso6Kab5Vrjdjmw9%2Bn4TwcnjSSVkV%2FKjOc9IMmhawrF6xrMR6kta9I6a6rmh%2FtyxX3uLnHAsugi35MFVnO1PHxkt0taTDrkbgAzZ&u2=I%2BiFAyn4LJHQV7a4&width=2560',
    imageAlt: '2024 Halloween Party – Jack-o-lanterns',
    featured: true
  },
  {
    id: 2,
    date: 'Coming Soon',
    location: 'Global Commons',
    tag: 'Upcoming',
    tagColor: '#1565a0',
    title: 'International Students Welcome Event',
    description: 'An upcoming welcome event for international exchange students arriving at Matsue Kosen. Details to be announced.',
    image: null,
    imageAlt: null,
    featured: false
  },
  {
    id: 3,
    date: 'Coming Soon',
    location: 'Global Commons',
    tag: 'Upcoming',
    tagColor: '#059669',
    title: 'English Presentation Workshop',
    description: 'A workshop helping students develop their academic English presentation skills for international conferences and exchanges.',
    image: null,
    imageAlt: null,
    featured: false
  },
  {
    id: 4,
    date: 'Coming Soon',
    location: 'Global Commons',
    tag: 'Upcoming',
    tagColor: '#7c3aed',
    title: 'Cultural Exchange Showcase',
    description: 'Students from partner countries will present their home cultures. A celebration of diversity at Matsue Kosen.',
    image: null,
    imageAlt: null,
    featured: false
  }
];

// ─── Navbar scroll & hamburger ────────────────────────────────────────────────
window.addEventListener('scroll', function() {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('open');
});

// ─── Scroll reveal ────────────────────────────────────────────────────────────
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(function(el) { revealObs.observe(el); });

// ─── Render news ──────────────────────────────────────────────────────────────
function renderNews() {
  var featured = NEWS.find(function(n) { return n.featured; });
  var rest = NEWS.filter(function(n) { return !n.featured; });

  // Featured article
  if (featured) {
    var featEl = document.getElementById('featured-article');
    var imgHtml = featured.image
      ? '<img src="' + featured.image + '" alt="' + featured.imageAlt + '" class="w-full h-full object-cover" style="min-height:260px;"/>'
      : '<div class="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200" style="min-height:260px;"><i class="fas fa-newspaper text-blue-400 text-6xl"></i></div>';

    featEl.innerHTML =
      '<div class="md:w-80 flex-shrink-0 overflow-hidden bg-gray-100">' + imgHtml + '</div>' +
      '<div class="p-8 flex flex-col justify-center">' +
        '<div class="flex items-center gap-3 mb-3">' +
          '<span class="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style="background:' + featured.tagColor + '18;color:' + featured.tagColor + ';border:1px solid ' + featured.tagColor + '40">' + featured.tag + '</span>' +
          '<span class="text-xs text-gray-400"><i class="fas fa-calendar-alt mr-1"></i>' + featured.date + ' &nbsp;·&nbsp; ' + featured.location + '</span>' +
        '</div>' +
        '<h2 class="text-2xl font-black text-gray-800 mb-3">' + featured.title + '</h2>' +
        '<p class="text-gray-600 leading-relaxed">' + featured.description + '</p>' +
      '</div>';
  }

  // Rest of the articles grid
  var grid = document.getElementById('news-grid');
  grid.innerHTML = '';
  rest.forEach(function(n) {
    var card = document.createElement('article');
    card.className = 'news-card reveal';

    var imgHtml = n.image
      ? '<div class="overflow-hidden" style="height:200px;"><img src="' + n.image + '" alt="' + n.imageAlt + '" class="w-full h-full object-cover"/></div>'
      : '<div class="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100" style="height:200px;border-bottom:1px solid #e5e7eb;"><i class="fas fa-newspaper text-gray-300 text-5xl"></i></div>';

    card.innerHTML =
      imgHtml +
      '<div class="p-6">' +
        '<div class="flex items-center gap-2 mb-2">' +
          '<span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style="background:' + n.tagColor + '15;color:' + n.tagColor + '">' + n.tag + '</span>' +
          '<span class="text-xs text-gray-400">' + n.date + '</span>' +
        '</div>' +
        '<h3 class="font-bold text-gray-800 text-base mb-2 leading-snug">' + n.title + '</h3>' +
        '<p class="text-gray-500 text-sm leading-relaxed">' + n.description + '</p>' +
      '</div>';

    grid.appendChild(card);

    // Observe for reveal
    revealObs.observe(card);
  });
}

renderNews();
