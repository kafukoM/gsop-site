const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcn = document.querySelector(".mnav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[280px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
  mobileNav.classList.toggle(navOpenedClass);
  mobileNav.classList.toggle(navClosedClass);

  closeBtnIcn.classList.toggle(arrowLeftClass);
  closeBtnIcn.classList.toggle(arrowRightClass);
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
