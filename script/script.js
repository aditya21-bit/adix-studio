document.addEventListener("DOMContentLoaded", function () {

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // Smooth scrolling for navbar links
  const allNavLinks = document.querySelectorAll(".nav-links a");
  allNavLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          // Close mobile menu if open
          if (navLinks) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
          }
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  const videoCard = document.querySelector(".video-card");
  const previewVideo = document.querySelector(".preview-video");

  if (videoCard && previewVideo) {

    videoCard.addEventListener("mouseenter", function () {
      previewVideo.play().catch(error => {
        console.log("Autoplay blocked:", error);
      });
    });

    videoCard.addEventListener("mouseleave", function () {
      previewVideo.pause();
      previewVideo.currentTime = 0;
    });

  }

});

function openFullVideo() {
  const modal = document.getElementById("videoModal");
  const fullVideo = document.getElementById("fullVideo");

  modal.style.display = "flex";
  fullVideo.play();
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const fullVideo = document.getElementById("fullVideo");

  modal.style.display = "none";
  fullVideo.pause();
  fullVideo.currentTime = 0;
}
