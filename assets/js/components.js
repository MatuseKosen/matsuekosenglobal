/**
 * components.js
 * Injects the shared navbar and footer into every page.
 *
 * HOW TO USE IN ANY PAGE:
 *   1. Add <div id="navbar-placeholder"></div> at the top of <body>
 *   2. Add <div id="footer-placeholder"></div> at the bottom of <body>
 *   3. Include this script: <script src="../assets/js/components.js"></script>
 *      (adjust the relative path depth as needed)
 *   4. Set the active nav item by adding data-page="news" (or home/about/study/project/events/contact)
 *      on the <body> tag: <body data-page="news">
 */

(function () {
  // ── Detect path depth so relative links work from any subfolder ─────────────
  // pages/news/article.html  → prefix = ../../
  // pages/index.html         → prefix = ../
  // index.html (root)        → prefix = ./   (or empty)
  var path = window.location.pathname;
  var depth = (path.match(/\//g) || []).length - 1; // number of folders deep
  // Clamp: root = 0, pages/ = 1, pages/news/ = 2
  var prefix = depth <= 0 ? './' : depth === 1 ? '../' : '../../';

  // ── Active page detection ───────────────────────────────────────────────────
  var activePage = document.body.getAttribute('data-page') || '';

  function navLink(href, label, pageKey) {
    var isActive = activePage === pageKey ? ' active' : '';
    return '<a href="' + prefix + href + '" class="nav-link' + isActive + '">' + label + '</a>';
  }
  function mobileNavLink(href, label, pageKey) {
    var isActive = activePage === pageKey ? ' active' : '';
    return '<a href="' + prefix + href + '" class="block py-2 nav-link' + isActive + '">' + label + '</a>';
  }

  // ── Navbar HTML ─────────────────────────────────────────────────────────────
  var navbarHTML =
    '<nav class="navbar" id="navbar">' +
      '<div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">' +
        '<a href="' + prefix + 'index.html" class="flex items-center gap-3">' +
          '<div class="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-lg">' +
            '<i class="fas fa-globe-asia text-white text-sm"></i>' +
          '</div>' +
          '<div>' +
            '<div class="text-white font-bold text-sm leading-tight">Matsue College</div>' +
            '<div class="text-blue-300 text-xs leading-tight">Global Homepage</div>' +
          '</div>' +
        '</a>' +
        '<div class="hidden md:flex items-center gap-5">' +
          navLink('index.html',                          'Home',                    'home') +
          navLink('pages/about.html',                    'About',                   'about') +
          navLink('pages/global-engineer-project.html',  'Global Engineer Project', 'project') +
          navLink('pages/study-programs.html',           'Study Programs',          'study') +
          navLink('pages/news/index.html',               'News',                    'news') +
          navLink('pages/events/index.html',             'Events',                  'events') +
          '<a href="' + prefix + 'index.html#contact" class="nav-link' + (activePage === 'contact' ? ' active' : '') + '">Contact</a>' +
        '</div>' +
        '<button class="md:hidden text-white focus:outline-none" id="hamburger">' +
          '<i class="fas fa-bars text-xl"></i>' +
        '</button>' +
      '</div>' +
      '<div id="mobile-menu" class="md:hidden bg-gray-900 px-4 pb-4">' +
        mobileNavLink('index.html',                          'Home',                    'home') +
        mobileNavLink('pages/about.html',                    'About',                   'about') +
        mobileNavLink('pages/global-engineer-project.html',  'Global Engineer Project', 'project') +
        mobileNavLink('pages/study-programs.html',           'Study Programs',          'study') +
        mobileNavLink('pages/news/index.html',               'News',                    'news') +
        mobileNavLink('pages/events/index.html',             'Events',                  'events') +
        '<a href="' + prefix + 'index.html#contact" class="block py-2 nav-link">Contact</a>' +
      '</div>' +
    '</nav>';

  // ── Footer HTML ─────────────────────────────────────────────────────────────
  var footerHTML =
    '<footer style="background:linear-gradient(90deg,#0d2030,#0a1a28);" class="text-white pt-10 pb-6 px-4">' +
      '<div class="max-w-5xl mx-auto">' +
        '<div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">' +
          '<div class="flex items-center gap-3">' +
            '<div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">' +
              '<i class="fas fa-globe-asia text-white"></i>' +
            '</div>' +
            '<div>' +
              '<p class="text-white font-bold text-sm">Matsue Kosen</p>' +
              '<p class="text-blue-300 text-xs">Global Activities Homepage</p>' +
            '</div>' +
          '</div>' +
          '<div class="flex gap-5 flex-wrap justify-center">' +
            '<a href="' + prefix + 'index.html" class="text-blue-300 hover:text-white text-sm transition-colors">Home</a>' +
            '<a href="' + prefix + 'pages/about.html" class="text-blue-300 hover:text-white text-sm transition-colors">About</a>' +
            '<a href="' + prefix + 'pages/global-engineer-project.html" class="text-blue-300 hover:text-white text-sm transition-colors">Global Engineer Project</a>' +
            '<a href="' + prefix + 'pages/study-programs.html" class="text-blue-300 hover:text-white text-sm transition-colors">Study Programs</a>' +
            '<a href="' + prefix + 'pages/news/index.html" class="text-blue-300 hover:text-white text-sm transition-colors">News</a>' +
            '<a href="' + prefix + 'pages/events/index.html" class="text-blue-300 hover:text-white text-sm transition-colors">Events</a>' +
            '<a href="' + prefix + 'index.html#contact" class="text-blue-300 hover:text-white text-sm transition-colors">Contact</a>' +
          '</div>' +
          '<div class="flex gap-4">' +
            '<a href="#" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><i class="fab fa-instagram text-white text-sm"></i></a>' +
            '<a href="#" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><i class="fab fa-twitter text-white text-sm"></i></a>' +
            '<a href="#" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><i class="fab fa-facebook text-white text-sm"></i></a>' +
          '</div>' +
        '</div>' +
        '<div class="border-t border-white/10 pt-4 text-center">' +
          '<p class="text-blue-300 text-xs">Copyright &copy; 2024 &ndash; National Institute of Technology, Matsue College &ndash; All rights reserved.</p>' +
        '</div>' +
      '</div>' +
    '</footer>';

  // ── Inject into placeholders ────────────────────────────────────────────────
  var navSlot = document.getElementById('navbar-placeholder');
  if (navSlot) navSlot.innerHTML = navbarHTML;

  var footerSlot = document.getElementById('footer-placeholder');
  if (footerSlot) footerSlot.innerHTML = footerHTML;

  // ── Shared behaviour ────────────────────────────────────────────────────────
  window.addEventListener('scroll', function () {
    var nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  document.addEventListener('click', function (e) {
    var btn = document.getElementById('hamburger');
    if (e.target === btn || (btn && btn.contains(e.target))) {
      var menu = document.getElementById('mobile-menu');
      if (menu) menu.classList.toggle('open');
    }
  });

  // Scroll reveal
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

})();
