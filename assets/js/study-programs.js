// ─── Program Data ─────────────────────────────────────────────────────────────
const PROGRAMS = {
  '392': {
    name: 'Japan', flag: '🇯🇵', type: 'home',
    subtitle: 'Matsue Kosen — Home Institution', color: '#ff7043',
    tags: [],
    desc: 'The National Institute of Technology, Matsue College is the starting point for all global activities. The Global Commons (Building 1, 3F) serves as the on-campus hub for international exchange.',
    institutes: [{ icon: '🏫', name: 'Matsue Kosen', detail: 'Global Commons, Bldg 1 · 3F, Matsue, Shimane' }],
    cta: null
  },
  '764': {
    name: 'Thailand', flag: '🇹🇭', type: 'program',
    subtitle: 'KOSEN Thailand Project Promotion School', color: '#1565a0',
    tags: ['Exchange', 'KOSEN Network'],
    desc: 'As a KOSEN Thailand Project promotion school, Matsue Kosen maintains active collaboration with Thai technical colleges. Students participate in joint projects and short-term exchange programs focused on engineering and SDGs.',
    institutes: [{ icon: '🏫', name: 'KOSEN Thailand', detail: 'Technical education exchange under the Japan–Thailand KOSEN programme' }],
    cta: { text: 'Contact Exchange Office', email: 'exchange@matsue-ct.jp' }
  },
  '702': {
    name: 'Singapore', flag: '🇸🇬', type: 'program',
    subtitle: 'Polytechnic Partnership', color: '#0891b2',
    tags: ['Exchange', 'Internship', 'Research'],
    desc: 'Temasek Polytechnic is one of Singapore\'s leading polytechnics. Students from Matsue Kosen can participate in academic exchange programs, research collaborations, and short-term technical internships in a multilingual, multicultural environment.',
    institutes: [{ icon: '🏛️', name: 'Temasek Polytechnic', detail: 'Singapore · Engineering & Technology programmes' }],
    cta: { text: 'Contact International Coordinator', email: 'intl@matsue-ct.jp' }
  },
  '158': {
    name: 'Taiwan', flag: '🇹🇼', type: 'program',
    subtitle: 'University Exchange Programme', color: '#7c3aed',
    tags: ['Exchange', 'Research', 'Language'],
    desc: 'Matsue Kosen has established partnerships with two Taiwanese universities offering student and faculty exchange programs. These programs emphasize engineering research collaboration and cross-cultural experience in an East Asian academic context.',
    institutes: [
      { icon: '🏛️', name: 'United University', detail: 'Taiwan · Engineering & Science exchange' },
      { icon: '🏛️', name: 'National Dong Hwa University', detail: 'Hualien, Taiwan · Research collaboration' }
    ],
    cta: { text: 'Enquire about Taiwan programs', email: 'intl@matsue-ct.jp' }
  },
  '276': {
    name: 'Germany', flag: '🇩🇪', type: 'program',
    subtitle: 'Technical University Research Exchange', color: '#059669',
    tags: ['Research', 'Graduate Level', 'Engineering'],
    desc: 'The partnership with TU Darmstadt — one of Germany\'s leading technical universities — offers Matsue Kosen Advanced Course students the opportunity to conduct research in world-class engineering labs and engage with European academic culture.',
    institutes: [{ icon: '🏛️', name: 'TU Darmstadt', detail: 'Darmstadt, Germany · Research exchange for Advanced Course students' }],
    cta: { text: 'Enquire about Germany programs', email: 'research@matsue-ct.jp' }
  },
  '410': {
    name: 'South Korea', flag: '🇰🇷', type: 'program',
    subtitle: 'University Exchange Programme', color: '#dc2626',
    tags: ['Exchange', 'Language', 'Culture'],
    desc: 'The exchange partnership with Yeungjin University in South Korea provides students with exposure to Korean engineering education and culture. Short-term programs and mutual student exchanges strengthen ties between the two institutions.',
    institutes: [{ icon: '🏛️', name: 'Yeungjin University', detail: 'Daegu, South Korea · Student exchange programme' }],
    cta: { text: 'Enquire about Korea programs', email: 'exchange@matsue-ct.jp' }
  },
  '840': {
    name: 'USA', flag: '🇺🇸', type: 'program',
    subtitle: 'Training & University Exchange', color: '#2563eb',
    tags: ['Training', 'Exchange', 'Immersive'],
    desc: 'The United States programs include an immersive Michigan training program designed to develop practical English communication skills in a real-world environment, as well as academic exchange with the University of Hawaii, which has a strong connection to Pacific-Asian engineering communities.',
    institutes: [
      { icon: '🎓', name: 'University of Hawaii', detail: 'Honolulu, Hawaii · Academic exchange' },
      { icon: '✈️', name: 'Michigan Training Program', detail: 'Michigan, USA · English immersion & engineering training' }
    ],
    cta: { text: 'Enquire about USA programs', email: 'abroad@matsue-ct.jp' }
  },
  '356': {
    name: 'India', flag: '🇮🇳', type: 'program',
    subtitle: 'IIT Research Collaboration', color: '#d97706',
    tags: ['Research', 'Graduate Level', 'SDGs'],
    desc: 'The Indian Institute of Technology Madras (IIT Madras) is one of India\'s most prestigious engineering institutions. This partnership focuses on research collaboration, particularly in areas aligned with the SDGs, offering Advanced Course students a truly challenging international research experience.',
    institutes: [{ icon: '🏛️', name: 'IIT Madras', detail: 'Chennai, India · Advanced research collaboration' }],
    cta: { text: 'Enquire about India programs', email: 'research@matsue-ct.jp' }
  },
  '36': {
    name: 'Australia', flag: '🇦🇺', type: 'program',
    subtitle: 'Immersive English Training', color: '#0891b2',
    tags: ['Training', 'Language', 'Immersive'],
    desc: 'The Australia Training Program provides an immersive English-language environment for students seeking to dramatically improve their communication skills. Combining language classes, cultural activities, and visits to local engineering facilities, this program accelerates both linguistic and professional development.',
    institutes: [{ icon: '✈️', name: 'Australia Training Program', detail: 'Australia · English immersion & cultural exchange' }],
    cta: { text: 'Enquire about Australia programs', email: 'abroad@matsue-ct.jp' }
  }
};

const TAG_COLORS = {
  'Exchange': '#1565a0', 'Research': '#059669', 'Training': '#7c3aed',
  'Language': '#0891b2', 'Internship': '#d97706', 'Culture': '#dc2626',
  'Immersive': '#db2777', 'Graduate Level': '#374151', 'SDGs': '#16a34a',
  'KOSEN Network': '#ea580c', 'Engineering': '#1565a0'
};

// ─── Navbar scroll ────────────────────────────────────────────────────────────
window.addEventListener('scroll', function() {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('open');
});

// ─── Scroll reveal ────────────────────────────────────────────────────────────
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(function(el) { revealObs.observe(el); });

// ─── Build program cards (below map) ─────────────────────────────────────────
function buildCards() {
  var container = document.getElementById('program-cards');
  Object.entries(PROGRAMS).forEach(function(entry) {
    var id = entry[0];
    var p = entry[1];
    if (p.type !== 'program') return;

    var card = document.createElement('div');
    card.className = 'country-card p-6';
    card.style.borderTopColor = p.color;

    var tagsHtml = p.tags.map(function(t) {
      var c = TAG_COLORS[t] || '#1565a0';
      return '<span class="program-tag" style="background:' + c + '18;color:' + c + ';border-color:' + c + '30;">' + t + '</span>';
    }).join('');

    var instsHtml = p.institutes.map(function(inst) {
      return '<span class="text-xs text-gray-400"><i class="fas fa-university mr-1"></i>' + inst.name + '</span>';
    }).join('<span class="text-gray-200 mx-1">·</span>');

    card.innerHTML =
      '<div class="flex items-center gap-3 mb-3">' +
        '<span class="text-3xl">' + p.flag + '</span>' +
        '<div>' +
          '<h3 class="font-black text-gray-800 text-lg leading-tight">' + p.name + '</h3>' +
          '<p class="text-xs font-semibold" style="color:' + p.color + '">' + p.subtitle + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-1 mb-3">' + tagsHtml + '</div>' +
      '<p class="text-gray-500 text-sm leading-relaxed line-clamp-3">' + p.desc + '</p>' +
      '<div class="mt-4 flex flex-wrap gap-2">' + instsHtml + '</div>' +
      '<div class="mt-3 text-xs font-semibold flex items-center gap-1" style="color:' + p.color + '">' +
        '<i class="fas fa-map-marker-alt"></i> View on map →' +
      '</div>';

    card.addEventListener('click', function() {
      document.getElementById('map-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function() { showPanel(id, p); }, 600);
    });
    container.appendChild(card);
  });
}

// ─── Show info panel ──────────────────────────────────────────────────────────
var activeId = null;

function showPanel(id, p) {
  if (activeId) {
    var prev = document.querySelector('[data-country-id="' + activeId + '"]');
    if (prev) prev.classList.remove('active');
  }
  activeId = id;

  var path = document.querySelector('[data-country-id="' + id + '"]');
  if (path) path.classList.add('active');

  document.getElementById('panel-flag').textContent = p.flag;
  document.getElementById('panel-country').textContent = p.name;
  document.getElementById('panel-subtitle').textContent = p.subtitle;

  var tagsEl = document.getElementById('panel-tags');
  tagsEl.innerHTML = p.tags.map(function(t) {
    var c = TAG_COLORS[t] || '#1565a0';
    return '<span class="program-tag" style="background:' + c + '18;color:' + c + ';border-color:' + c + '30;">' + t + '</span>';
  }).join('');

  document.getElementById('panel-desc').textContent = p.desc;

  var instEl = document.getElementById('panel-institutes');
  instEl.innerHTML = p.institutes.map(function(inst) {
    return '<div class="institute-row">' +
      '<div class="inst-icon bg-blue-50">' + inst.icon + '</div>' +
      '<div>' +
        '<div class="font-semibold text-gray-800 text-sm">' + inst.name + '</div>' +
        '<div class="text-xs text-gray-400 mt-0.5">' + inst.detail + '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  var ctaEl = document.getElementById('panel-cta');
  if (p.cta) {
    ctaEl.innerHTML = '<a href="mailto:' + p.cta.email + '" class="inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full" style="background:linear-gradient(135deg,' + p.color + ',' + p.color + 'cc)"><i class="fas fa-envelope"></i> ' + p.cta.text + '</a>';
  } else {
    ctaEl.innerHTML = '';
  }

  document.getElementById('info-panel').classList.add('visible');
}

function closePanel() {
  document.getElementById('info-panel').classList.remove('visible');
  if (activeId) {
    var prev = document.querySelector('[data-country-id="' + activeId + '"]');
    if (prev) prev.classList.remove('active');
    activeId = null;
  }
}

document.getElementById('close-panel').addEventListener('click', closePanel);

// ─── D3 World Map ─────────────────────────────────────────────────────────────
var projection = d3.geoNaturalEarth1()
  .scale(153)
  .translate([480, 250]);

var pathGen = d3.geoPath().projection(projection);
var tooltip = document.getElementById('map-tooltip');
var mapWrap = document.getElementById('map-wrap');
var mapSVG  = document.getElementById('world-map');

fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
  .then(function(r) { return r.json(); })
  .then(function(world) {
    var countries = topojson.feature(world, world.objects.countries);
    var g = d3.select('#countries-group');

    // Define ocean gradient first
    var defs = d3.select('#world-map').insert('defs', ':first-child');
    var grad = defs.append('linearGradient')
      .attr('id', 'ocean-gradient')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '100%').attr('y2', '100%');
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#c5dff0');
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#d8ecf8');

    // Ocean sphere
    g.insert('path', ':first-child')
      .datum({ type: 'Sphere' })
      .attr('d', pathGen)
      .attr('fill', 'url(#ocean-gradient)')
      .attr('stroke', '#b0cfe0')
      .attr('stroke-width', '0.5px');

    // Graticule
    g.insert('path', ':first-child')
      .datum(d3.geoGraticule()())
      .attr('d', pathGen)
      .attr('fill', 'none')
      .attr('stroke', '#c8dff0')
      .attr('stroke-width', '0.3px')
      .attr('opacity', '0.6');

    // Countries
    g.selectAll('path.country')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('class', 'country')
      .attr('d', pathGen)
      .attr('data-country-id', function(d) { return String(d.id); })
      .attr('class', function(d) {
        var id = String(d.id);
        if (id === '392') return 'country-home';
        if (PROGRAMS[id] && PROGRAMS[id].type === 'program') return 'country-program';
        return 'country-default';
      })
      .on('mousemove', function(event, d) {
        var id = String(d.id);
        var prog = PROGRAMS[id];
        var name = prog ? prog.name : (d.properties && d.properties.name ? d.properties.name : null);
        if (!name) return;

        var svgRect = mapSVG.getBoundingClientRect();
        var mouseX = event.clientX - svgRect.left;
        var mouseY = event.clientY - svgRect.top;

        document.getElementById('tt-flag').textContent = prog ? prog.flag : '';
        document.getElementById('tt-name').textContent = name;
        var tagEl = document.getElementById('tt-tag');
        if (prog && prog.type === 'program') {
          tagEl.textContent = 'Program';
          tagEl.style.background = 'rgba(91,197,224,.2)';
          tagEl.style.borderColor = 'rgba(91,197,224,.4)';
          tagEl.style.color = '#5bc5e0';
          tagEl.style.display = 'inline-block';
        } else if (prog && prog.type === 'home') {
          tagEl.textContent = 'Home';
          tagEl.style.background = 'rgba(255,112,67,.2)';
          tagEl.style.borderColor = 'rgba(255,112,67,.5)';
          tagEl.style.color = '#ff7043';
          tagEl.style.display = 'inline-block';
        } else {
          tagEl.style.display = 'none';
        }

        var tx = mouseX + 12;
        var ty = mouseY - 36;
        if (tx > svgRect.width - 180) tx = mouseX - 180;
        if (ty < 4) ty = mouseY + 16;

        tooltip.style.left = tx + 'px';
        tooltip.style.top  = ty + 'px';
        tooltip.classList.add('visible');
      })
      .on('mouseleave', function() {
        tooltip.classList.remove('visible');
      })
      .on('click', function(event, d) {
        var id = String(d.id);
        var prog = PROGRAMS[id];
        if (!prog || prog.type !== 'program') return;
        if (activeId === id) { closePanel(); return; }
        showPanel(id, prog);
      });

    // Pulse ring markers for partner countries
    var programIds = Object.keys(PROGRAMS).filter(function(k) { return PROGRAMS[k].type === 'program'; });
    programIds.forEach(function(id) {
      var feat = countries.features.find(function(f) { return String(f.id) === id; });
      if (!feat) return;
      var centroid = pathGen.centroid(feat);
      if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) return;

      g.append('circle')
        .attr('cx', centroid[0])
        .attr('cy', centroid[1])
        .attr('r', 0)
        .attr('fill', 'none')
        .attr('stroke', '#1e8fb5')
        .attr('stroke-width', '1.5px')
        .attr('opacity', 0.7)
        .attr('class', 'pulse-ring')
        .attr('data-cx', centroid[0])
        .attr('data-cy', centroid[1]);
    });

    // Start pulse animation
    setTimeout(animatePulse, 800);
  });

// ─── Animate pulse rings ──────────────────────────────────────────────────────
function animatePulse() {
  d3.selectAll('.pulse-ring')
    .each(function() {
      var ring = d3.select(this);
      var cx = +ring.attr('data-cx');
      var cy = +ring.attr('data-cy');
      ring
        .attr('cx', cx).attr('cy', cy)
        .attr('r', 4).attr('opacity', 0.8)
        .transition().duration(1800).ease(d3.easeLinear)
        .attr('r', 18).attr('opacity', 0)
        .on('end', animatePulse);
    });
}

buildCards();
