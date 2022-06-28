(() => {
  const coffeBtnRef = document.querySelector("[coffe-button]");
  const coffeMenuRef = document.querySelector("[coffe-menu]");
  const icecoffeMenuRef = document.querySelector("[ice-coffe-menu]");

  coffeBtnRef.addEventListener("click", () => {
    const expanded =
      coffeBtnRef.getAttribute("aria-expanded") === "true" || false;

    coffeBtnRef.classList.toggle("is-open");
    coffeBtnRef.setAttribute("aria-expanded", !expanded);

      coffeMenuRef.classList.toggle("is-open");
     icecoffeMenuRef.classList.toggle("before-mobile-is-open");
    

  });
  
})();