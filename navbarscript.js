const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

let currentSection = "";
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    console.log("top", top);
    console.log("offset", offset);
    console.log("height", top);
    console.log("id", id);

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        // link.classList.add("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
