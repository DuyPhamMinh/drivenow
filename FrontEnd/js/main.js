// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".mobile-menu-toggle");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      alert("Menu di động sẽ được hiển thị ở đây");
      // Implement mobile menu functionality here
    });
  }

  // Tab switching for search box
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Add active class to clicked tab
      this.classList.add("active");
    });
  });
});
