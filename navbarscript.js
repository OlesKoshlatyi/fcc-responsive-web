const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let scrollPosition = window.scrollY;
    let sectionOffset = section.offsetTop - 250;
    let sectionBottom = section.offsetHeight + sectionOffset;
    let id = section.getAttribute("id");

    if (scrollPosition >= sectionOffset && scrollPosition < sectionBottom) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
