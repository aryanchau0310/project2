document.addEventListener("DOMContentLoaded", () => {
    // GSAP animations
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1.5, ease: "power4.out" });
    gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1.8, ease: "power4.out", delay: 0.3 });
    gsap.from(".cta-button", { opacity: 0, scale: 0.8, duration: 1.2, ease: "elastic.out(1, 0.5)", delay: 0.6 });
  });

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const hero = document.querySelector(".hero");
    const title = document.querySelector(".hero-title");
    const subtitle = document.querySelector(".hero-subtitle");
  
    const moveX = (mouseX / window.innerWidth) * 10 - 5;
    const moveY = (mouseY / window.innerHeight) * 10 - 5;
  
    gsap.to(hero, {
      duration: 0.3,
      backgroundPosition: `${50 + moveX}% ${50 + moveY}%`
    });
  
    gsap.to([title, subtitle], {
      duration: 0.5,
      x: moveX * 2,
      y: moveY * 2,
    });
  });
  
