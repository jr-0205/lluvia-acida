// Contador animado
const counters = document.querySelectorAll('.stat-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target.getAttribute('data-target');
      let count = 0;
      const increment = target / 80;
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          entry.target.querySelector('h3').textContent = target > 10 ? target + '%' : (target > 1 ? target : 'pH < 5.6');
          clearInterval(timer);
        } else {
          entry.target.querySelector('h3').textContent = target > 10 ? Math.floor(count) + '%' : (target > 1 ? Math.floor(count) : 'pH < ' + (5.6 - count/100).toFixed(1));
        }
      }, 30);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => observer.observe(c));

// Animaciones al hacer scroll
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.3 });
  observer.observe(el);
});