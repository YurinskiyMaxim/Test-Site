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
const chat_header = document.querySelector(".header__chat");
const support__SMS = document.querySelector(".support__SMS");
const support__SMS__close = document.querySelector(".support__SMS__close");

chat.addEventListener("click", () => {
  support__SMS.classList.add("support__SMS--opened");
  main__menu.classList.remove("main__menu--opened");
  support__SMS__close.addEventListener("click", () => {
    support__SMS.classList.remove("support__SMS--opened");
  });
});
chat_header.addEventListener("click", () => {
  support__SMS.classList.add("support__SMS--opened");
  main__menu.classList.remove("main__menu--opened");
  support__SMS__close.addEventListener("click", () => {
    support__SMS.classList.remove("support__SMS--opened");
  });
});



const call = document.querySelector(".main__menu--call");
const call_header = document.querySelector(".header__call");
const support__call = document.querySelector(".support__call");
const support__call__close = document.querySelector(".support__call__close");

call.addEventListener("click", () => {
  support__call.classList.add("support__call--opened");
  main__menu.classList.remove("main__menu--opened");
  support__call__close.addEventListener("click", () => {
    support__call.classList.remove("support__call--opened");
  });
});
call_header.addEventListener("click", () => {
  support__call.classList.add("support__call--opened");
  main__menu.classList.remove("main__menu--opened");
  support__call__close.addEventListener("click", () => {
    support__call.classList.remove("support__call--opened");
  });
});


const button_SMS = document.querySelector(".support__SMS--button");
const input_SMS = document.querySelectorAll(".support__SMS--input1, .support__SMS--input2");

button_SMS.addEventListener("click", () => {
    input_SMS.forEach((input) => (input.value = ""));
});




const button_call = document.querySelector(".support__call--button");
const input_call = document.querySelectorAll(".support__call--input1");

button_call.addEventListener("click", () => {
  input_call.forEach((input) => (input.value = ""));
});