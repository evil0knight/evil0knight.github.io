/* ========================================
   CYBER EFFECTS - PARTICLES & PARALLAX
   ======================================== */

// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {

  // Only initialize if particles container exists
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#b967ff', '#ff2bc2', '#01d4ff']
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#b967ff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 0.8
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Parallax scrolling effect for sections
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');

    parallaxElements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Add scroll reveal animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-card, .project-card, .blog-card').forEach(el => {
    observer.observe(el);
  });

});

// Add fade-in-up animation styles dynamically
const style = document.createElement('style');
style.textContent = `
  .fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .skill-card, .project-card, .blog-card {
    opacity: 0;
  }
`;
document.head.appendChild(style);

// Navbar color change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(26, 26, 46, 0.98)';
      navbar.style.boxShadow = '0 2px 30px rgba(185, 103, 255, 0.6)';
    } else {
      navbar.style.background = 'rgba(26, 26, 46, 0.95)';
      navbar.style.boxShadow = '0 2px 20px rgba(185, 103, 255, 0.5)';
    }
  }
});

// Mouse cursor effect (optional advanced feature)
document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.custom-cursor');
  if (cursor) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
});
