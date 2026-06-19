// ─── Events Data ──────────────────────────────────────────────────────────────
var EVENTS = [
  {
    id: 1,
    status: 'past',
    statusLabel: 'Past Event',
    statusColor: '#6b7280',
    date: 'October 2024',
    dateIcon: 'fa-calendar-check',
    location: 'Global Commons, Building 1, 3F',
    title: 'Halloween Party 🎃',
    description: 'An evening of cross-cultural fun where students learned about the history of Halloween and carved their own Jack-o\'-lanterns. Organized by the Global Commons team, this event brought together Japanese and international students in a festive, welcoming atmosphere.',
    image: 'https://sspark.genspark.ai/cfimages?u1=MXTd4eYOJq1dikf0Tes9%2Bso6Kab5Vrjdjmw9%2Bn4TwcnjSSVkV%2FKjOc9IMmhawrF6xrMR6kta9I6a6rmh%2FtyxX3uLnHAsugi35MFVnO1PHxkt0taTDrkbgAzZ&u2=I%2BiFAyn4LJHQV7a4&width=2560',
    imageAlt: 'Halloween Party 2024',
    tags: ['Cultural Exchange', 'Global Commons'],
    color: '#d97706',
    featured: true
  },
  {
    id: 2,
    status: 'upcoming',
    statusLabel: 'Upcoming',
    statusColor: '#1565a0',
    date: 'TBA',
    dateIcon: 'fa-calendar',
    location: 'Global Commons',
    title: 'International Exchange Program Kickoff',
    description: 'A welcome event for students participating in the upcoming international exchange programs. Meet your exchange partners, learn about the program schedule, and get ready for a global experience.',
    image: null,
    imageAlt: null,
    tags: ['Exchange Program', 'Information Session'],
    color: '#1565a0',
    featured: false
  },
  {
    id: 3,
    status: 'upcoming',
    statusLabel: 'Upcoming',
    statusColor: '#0891b2',
    date: 'TBA',
    dateIcon: 'fa-calendar',
    location: 'Global Commons',
    title: 'Cross-Cultural Communication Workshop',
    description: 'An interactive, hands-on workshop focused on building cross-cultural communication skills essential for studying and working abroad. Open to all Matsue Kosen students.',
    image: null,
    imageAlt: null,
    tags: ['Workshop', 'Cross-Cultural'],
    color: '#0891b2',
    featured: false
  },
  {
    id: 4,
    status: 'upcoming',
    statusLabel: 'Upcoming',
    statusColor: '#059669',
    date: 'TBA',
    dateIcon: 'fa-calendar',
    location: 'Global Commons',
    title: 'Language Proficiency Seminar',
    description: 'A targeted seminar to help students improve their TOEIC scores and engineering English vocabulary. Featuring tips from students who have completed overseas programs.',
    image: null,
    imageAlt: null,
    tags: ['Language', 'TOEIC', 'Seminar'],
    color: '#059669',
    featured: false
  },
  {
    id: 5,
    status: 'upcoming',
    statusLabel: 'Upcoming',
    statusColor: '#7c3aed',
    date: 'TBA',
    dateIcon: 'fa-calendar',
    location: 'Global Commons',
    title: 'Cultural Exchange Showcase',
    description: 'Students from partner countries will present their home cultures through food, performances, and displays. A celebration of diversity and international friendship at Matsue Kosen.',
    image: null,
    imageAlt: null,
    tags: ['Cultural Exchange', 'Showcase'],
    color: '#7c3aed',
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

// ─── Render events ────────────────────────────────────────────────────────────
function renderEvents() {
  var featured = EVENTS.find(function(e) { return e.featured; });
  var rest = EVENTS.filter(function(e) { return !e.featured; });

  // Featured event
  if (featured) {
    var featEl = document.getElementById('featured-event');
    var imgHtml = featured.image
      ? '<div class="md:w-80 flex-shrink-0 overflow-hidden"><img src="' + featured.image + '" alt="' + featured.imageAlt + '" class="w-full h-full object-cover" style="min-height:280px;"/></div>'
      : '<div class="md:w-80 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200" style="min-height:280px;"><i class="fas fa-calendar-star text-blue-400 text-6xl"></i></div>';

    var tagsHtml = featured.tags.map(function(t) {
      return '<span class="event-tag" style="background:' + featured.color + '15;color:' + featured.color + ';border-color:' + featured.color + '30;">' + t + '</span>';
    }).join('');

    featEl.innerHTML =
      imgHtml +
      '<div class="p-8 flex flex-col justify-center">' +
        '<div class="flex flex-wrap items-center gap-2 mb-3">' +
          '<span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style="background:' + featured.statusColor + '15;color:' + featured.statusColor + ';border:1px solid ' + featured.statusColor + '30">' + featured.statusLabel + '</span>' +
          '<span class="text-xs text-gray-400"><i class="fas ' + featured.dateIcon + ' mr-1"></i>' + featured.date + '</span>' +
          '<span class="text-xs text-gray-400"><i class="fas fa-map-marker-alt mr-1"></i>' + featured.location + '</span>' +
        '</div>' +
        '<h2 class="text-2xl font-black text-gray-800 mb-3">' + featured.title + '</h2>' +
        '<p class="text-gray-600 leading-relaxed mb-4">' + featured.description + '</p>' +
        '<div class="flex flex-wrap gap-2">' + tagsHtml + '</div>' +
      '</div>';
  }

  // Upcoming / other events grid
  var grid = document.getElementById('events-grid');
  grid.innerHTML = '';
  rest.forEach(function(ev) {
    var card = document.createElement('article');
    card.className = 'event-card reveal';

    var imgHtml = ev.image
      ? '<div class="overflow-hidden rounded-t-2xl" style="height:200px;"><img src="' + ev.image + '" alt="' + ev.imageAlt + '" class="w-full h-full object-cover"/></div>'
      : '<div class="flex items-center justify-center rounded-t-2xl" style="height:160px;background:linear-gradient(135deg,' + ev.color + '12,' + ev.color + '25);border-bottom:1px solid ' + ev.color + '20;">' +
          '<i class="fas fa-calendar-alt text-5xl" style="color:' + ev.color + '60;"></i>' +
        '</div>';

    var tagsHtml = ev.tags.map(function(t) {
      return '<span class="event-tag" style="background:' + ev.color + '15;color:' + ev.color + ';border-color:' + ev.color + '30;">' + t + '</span>';
    }).join('');

    card.innerHTML =
      imgHtml +
      '<div class="p-5">' +
        '<div class="flex items-center gap-2 mb-2">' +
          '<span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style="background:' + ev.statusColor + '15;color:' + ev.statusColor + '">' + ev.statusLabel + '</span>' +
          '<span class="text-xs text-gray-400"><i class="fas ' + ev.dateIcon + ' mr-1"></i>' + ev.date + '</span>' +
        '</div>' +
        '<h3 class="font-bold text-gray-800 text-base mb-2 leading-snug">' + ev.title + '</h3>' +
        '<p class="text-gray-500 text-sm leading-relaxed mb-3">' + ev.description + '</p>' +
        '<div class="flex flex-wrap gap-1.5">' + tagsHtml + '</div>' +
        '<p class="text-xs text-gray-400 mt-3"><i class="fas fa-map-marker-alt mr-1"></i>' + ev.location + '</p>' +
      '</div>';

    grid.appendChild(card);
    revealObs.observe(card);
  });
}

renderEvents();
