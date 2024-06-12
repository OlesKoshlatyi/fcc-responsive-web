document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    if (index >= 0) {
      navLinks[index].classList.add("active");
    }
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink);

  // Smooth scrolling for anchor links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });

      console.log("link", link);

      navLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
