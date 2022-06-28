(() => {
  const shakesBtnRef = document.querySelector("[milkshakes-menu-button]");
  const shakesMenuRef = document.querySelector("[milkshakes-menu]");

  shakesBtnRef.addEventListener("click", () => {
    const expanded =
      shakesBtnRef.getAttribute("aria-expanded") === "true" || false;

    shakesBtnRef.classList.toggle("is-open");
    shakesBtnRef.setAttribute("aria-expanded", !expanded);

      shakesMenuRef.classList.toggle("is-open");
     
  });
})();