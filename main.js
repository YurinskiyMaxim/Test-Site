const burger = document.querySelector(".burger");
const main__menu = document.querySelector(".main__menu");
const burger__close = document.querySelector(".burger__close");

burger.addEventListener("click", () => {
  main__menu.classList.add("main__menu--opened");
  burger__close.addEventListener("click", () => {
    main__menu.classList.remove("main__menu--opened");
  });
});

const chat = document.querySelector(".main__menu--chat");
const support__SMS = document.querySelector(".support__SMS");
const support__SMS__close = document.querySelector(".support__SMS__close");

chat.addEventListener("click", () => {
  support__SMS.classList.add("support__SMS--opened");
  main__menu.classList.remove("main__menu--opened");
  support__SMS__close.addEventListener("click", () => {
    support__SMS.classList.remove("support__SMS--opened");
  });
});

