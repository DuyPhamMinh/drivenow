
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".mobile-menu-toggle");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      alert("Menu di động sẽ được hiển thị ở đây");

    });
  }

  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
