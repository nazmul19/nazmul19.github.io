(function () {
    'use strict';

    // Mobile nav toggle
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
            var open = navLinks.classList.contains('open');
            navToggle.innerHTML = open
                ? '<i class="fas fa-xmark"></i>'
                : '<i class="fas fa-bars"></i>';
        });
        navLinks.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                navLinks.classList.remove('open');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // Navbar shadow on scroll
    var navbar = document.getElementById('navbar');
    function onScroll() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Scroll reveal
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        reveals.forEach(function (el) { observer.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('in'); });
    }

    // Active nav link on scroll
    var sections = document.querySelectorAll('section[id]');
    var menuLinks = document.querySelectorAll('.nav-links a');
    function setActive() {
        var pos = window.scrollY + 120;
        sections.forEach(function (sec) {
            var top = sec.offsetTop;
            var bottom = top + sec.offsetHeight;
            var id = sec.getAttribute('id');
            var link = document.querySelector('.nav-links a[href="#' + id + '"]');
            if (!link) return;
            if (pos >= top && pos < bottom) {
                menuLinks.forEach(function (l) { l.classList.remove('active'); });
                if (!link.classList.contains('nav-cta')) link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', setActive, { passive: true });

    // Typed rotating roles
    var typedEl = document.getElementById('typed');
    if (typedEl) {
        var roles = [
            'AI Engineer',
            'GenAI Systems Architect',
            'Director of Engineering',
            'LLM & Agentic AI Builder',
            'Full-Stack Engineer'
        ];
        var roleIdx = 0, charIdx = 0, deleting = false;
        function tick() {
            var current = roles[roleIdx];
            if (deleting) {
                charIdx--;
            } else {
                charIdx++;
            }
            typedEl.textContent = current.substring(0, charIdx);
            var delay = deleting ? 45 : 90;
            if (!deleting && charIdx === current.length) {
                delay = 1600;
                deleting = true;
            } else if (deleting && charIdx === 0) {
                deleting = false;
                roleIdx = (roleIdx + 1) % roles.length;
                delay = 350;
            }
            setTimeout(tick, delay);
        }
        tick();
    }
})();
