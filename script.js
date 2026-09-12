/**
 * Minimal Academic Portfolio Scripts
 * Handles: Theme toggle (Dark/Light), BibTeX dropdown & copy, dynamic year
 */

(function () {
  'use strict';

  // --- Theme Toggle ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme;
    }
    return prefersDarkScheme.matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      const iconSpan = themeToggleBtn.querySelector('.theme-icon');
      const textSpan = themeToggleBtn.querySelector('.theme-text');
      if (iconSpan) {
        iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
      }
      if (textSpan) {
        textSpan.textContent = theme === 'dark' ? 'Light' : 'Dark';
      }
    }
  }

  // Initialize theme
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', newTheme);
      applyTheme(newTheme);
    });
  }

  // Listen for OS preference changes
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // --- BibTeX Toggle & Copy ---
  document.querySelectorAll('.bibtex-toggle').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = button.getAttribute('data-target');
      const box = document.getElementById(targetId);
      if (box) {
        const isShown = box.classList.toggle('show');
        button.setAttribute('aria-expanded', isShown);
      }
    });
  });

  document.querySelectorAll('.copy-bibtex-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const targetId = button.getAttribute('data-target');
      const codeElement = document.querySelector(`#${targetId} code`);
      if (codeElement) {
        try {
          await navigator.clipboard.writeText(codeElement.textContent.trim());
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy BibTeX: ', err);
        }
      }
    });
  });

  // --- Set Current Year in Footer ---
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // --- Highlight Active Nav Item on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
})();
