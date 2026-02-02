/**
 * Daniel Cherutti · Site 2026
 * Typing effect, scroll, menu
 */

(function () {
  'use strict';

  // ----- Ano no footer -----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Header scroll -----
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 80) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ----- Menu mobile -----
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // ----- Typing effect (rotating words) -----
  const typingWrap = document.querySelector('.typing');
  if (typingWrap) {
    let dataWords = typingWrap.getAttribute('data-words');
    if (dataWords) {
      try {
        const words = JSON.parse(dataWords);
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typeSpeed = 80;
        const deleteSpeed = 50;
        const pauseAfterWord = 1500;
        const pauseAfterDelete = 600;

        function type() {
          const currentWord = words[wordIndex];
          if (isDeleting) {
            typingWrap.textContent = currentWord.slice(0, charIndex - 1);
            charIndex--;
          } else {
            typingWrap.textContent = currentWord.slice(0, charIndex + 1);
            charIndex++;
          }

          let delay;
          if (isDeleting) {
            delay = deleteSpeed;
          } else {
            delay = typeSpeed;
            if (charIndex === currentWord.length) {
              isDeleting = true;
              delay = pauseAfterWord;
            }
          }
          if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = pauseAfterDelete;
          }
          setTimeout(type, delay);
        }

        type();
      } catch (_) {
        typingWrap.textContent = 'Daniel Cherutti';
      }
    }
  }

  // ----- Scroll reveal -----
  const sections = document.querySelectorAll('.section .container, .section .stats-box');
  const observerOptions = { rootMargin: '0px 0px -80px 0px', threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, observerOptions);
  sections.forEach((el) => observer.observe(el));
})();
