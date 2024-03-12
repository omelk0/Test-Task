document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const button = document.querySelector(".header__burger-menu");
  const headerMenu = document.querySelector(".header__right");
  const body = document.querySelector(".body");
  const logotype = document.querySelector(".header__logotype-image");
  const headerLinks = document.querySelectorAll(".header__navigation-link");
  const sendEmailButton = document.querySelector(".banner__button");
  const sendEmailPopup = document.querySelector(".send-email-popup__wrapper");
  const closeSendEmailPopup = document.querySelector(
    ".send-email-popup__icon-close"
  );
  const input = document.querySelector(".banner__contact-us-input");
  const inputWrapper = document.querySelector(
    ".banner__contact-us-input-wrapper"
  );

  // Open contact us popup
  sendEmailButton.addEventListener("click", () => {
    inputWrapper.classList.remove("error");

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    if (validateEmail(input.value)) {
      sendEmailPopup.classList.add("opened");
      body.classList.add("overlayed");
      inputWrapper.classList.remove("error");
      input.value = "";
    } else {
      input.value = "";
      inputWrapper.classList.add("error");
    }
  });

  // Remove error styles from input on focus
  input.addEventListener("focus", () => {
    inputWrapper.classList.remove("error");
  });

  // Close contact us popup
  closeSendEmailPopup.addEventListener("click", () => {
    sendEmailPopup.classList.remove("opened");
    body.classList.remove("overlayed");
  });

  // Toggle mobile menu
  button.addEventListener("click", () => {
    headerMenu.classList.toggle("opened");
    body.classList.toggle("overlayed");
    button.classList.toggle("closed");
  });

  // Close mobile menu on 'resize' event
  window.addEventListener("resize", () => {
    body.classList.remove("overlayed");
    headerMenu.classList.remove("opened");
    button.classList.remove("closed");
  });

  // Toggle sticky header on 'scroll' event
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      header.classList.remove("sticky");
      logotype.src = "img/header_logotype.svg";
      button.src = "img/header_burger-menu.svg";
      headerLinks.forEach((link) => {
        link.classList.remove("sticky");
      });
    } else {
      header.classList.add("sticky");
      logotype.src = "img/header_logotype-black.svg";
      button.src = "img/header_burger-menu-black.svg";
      headerLinks.forEach((link) => {
        link.classList.add("sticky");
      });
    }
  });
});
