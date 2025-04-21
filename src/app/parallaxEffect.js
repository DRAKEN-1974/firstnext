export function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll(".parallax");
  
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
  
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed")) || 0.5;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    });
  }