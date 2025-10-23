const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const menuList = document.querySelectorAll(".menu-list");
const exitBtn = document.getElementById("exitBtn");

// Contact Button
const contactNumber = "2069196886";
function call() {
  window.location.href = `tel:${contactNumber}`;
}
// Side Menu
menuBtn.addEventListener("click", () => {
  toggleMenu();
});

exitBtn.addEventListener("click", () => {
  toggleMenu();
});

overlay.addEventListener("touchstart", () => {
  toggleMenu();
});

overlay.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  if (menu.classList.contains("translate-x-full")) {
    overlay.classList.remove("hidden");

    menu.classList.remove("translate-x-full");
    menu.classList.add("translate-x-0");

    menuBtn.classList.add("hidden");
    exitBtn.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");

    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");

    menuBtn.classList.remove("hidden");
    exitBtn.classList.add("hidden");
  }

  console.log(menu);
}

menuList.forEach((item) => {
  item.addEventListener("click", () => toggleMenu());
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Leaflet API
var map = L.map("map").setView([36.208481695124156, -115.98891464631251], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([36.2084, -115.9889]).addTo(map);
