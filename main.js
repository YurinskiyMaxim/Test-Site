const burger = document.querySelector(".burger");
const main__menu = document.querySelector(".main__menu");
const burger__close = document.querySelector(".burger__close");

burger.addEventListener("click", () => {
  main__menu.classList.add("main__menu--opened");
  burger__close.addEventListener("click", () => {
    main__menu.classList.remove("main__menu--opened");
  });
});
