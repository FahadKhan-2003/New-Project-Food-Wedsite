let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// Close the navbar when a nav-link is clicked
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector("#navbarNav");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Ensure Bootstrap handles toggling correctly
let navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function () {
  let navCollapse = document.querySelector("#navbarNav");
  navCollapse.classList.toggle("show");
});


