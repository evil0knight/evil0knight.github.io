/* ========================================
   PROJECT CARDS - 3D TILT EFFECT
   ======================================== */

// Vanilla JavaScript implementation of 3D tilt effect

document.addEventListener('DOMContentLoaded', function() {

  // Get all project cards
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    // Set up tilt effect
    card.addEventListener('mousemove', handleTilt);
    card.addEventListener('mouseleave', resetTilt);
  });

  function handleTilt(e) {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;

    // Calculate rotation angles (max 15 degrees)
    const rotateX = (mouseY / (cardRect.height / 2)) * -15;
    const rotateY = (mouseX / (cardRect.width / 2)) * 15;

    // Apply 3D transform
    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
      scale(1.02)
    `;

    // Add subtle shadow movement
    const shadowX = (mouseX / cardRect.width) * 40;
    const shadowY = (mouseY / cardRect.height) * 40;

    card.style.boxShadow = `
      ${shadowX}px ${shadowY}px 60px rgba(185, 103, 255, 0.4),
      0 0 40px rgba(255, 43, 194, 0.3)
    `;
  }

  function resetTilt(e) {
    const card = e.currentTarget;

    // Smooth return to original position
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
      scale(1)
    `;

    card.style.boxShadow = '';

    // Remove transition after animation completes
    setTimeout(() => {
      card.style.transition = '';
    }, 500);
  }

});

// Lazy loading for project images
document.addEventListener('DOMContentLoaded', function() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;

        // If using data-src for lazy loading
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }

        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('.project-image').forEach(img => {
    imageObserver.observe(img);
  });
});
