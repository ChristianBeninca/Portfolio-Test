document.addEventListener('DOMContentLoaded', function () {
  highlightActiveNav();
});

function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-bar__link').forEach(function (link) {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPath) {
      link.classList.add('nav-bar__link--active');
    }
  });
}
