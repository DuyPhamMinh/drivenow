const menuLinks = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".admin-section");

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    sections.forEach((sec) => sec.classList.remove("active"));

    const id = link.getAttribute("href").replace("#", "");
    document.getElementById(id).classList.add("active");
  });
});
