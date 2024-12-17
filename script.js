const scroll = document.getElementById("scroll");
const scrollContainer = document.getElementById("scrollContainer");

scroll.addEventListener("click", () => {
  scrollContainer.scrollLeft += 150;
});

const burgerBtn = document.querySelector(".burger__btn");
const burgerClose = document.querySelector(".burger__close");
const burgerList = document.querySelector(".burger__list");

burgerBtn.addEventListener("click", () => {
  burgerList.classList.toggle("active");
  burgerBtn.classList.toggle("active");
});

burgerClose.addEventListener("click", () => {
  burgerList.classList.remove("active");
  burgerBtn.classList.toggle("active");
});
