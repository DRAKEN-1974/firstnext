export function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
  
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth",
          });
        }
      });
    });
  }