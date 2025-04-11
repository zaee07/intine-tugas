// Toggle navbar on small screens
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Smooth scroll + atur active class
  document.querySelectorAll('.nav-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Hapus class active dari semua link
      document.querySelectorAll('.nav-scroll-link').forEach(el => el.classList.remove('active'));
      
      // Tambahkan class active ke yang diklik
      this.classList.add('active');
      
      // Scroll ke section
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
