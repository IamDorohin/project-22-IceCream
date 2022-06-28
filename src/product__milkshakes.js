(() => {
  const shakesBtnRef = document.querySelector("[milkshakes-menu-button]");
  const shakesMenuRef = document.querySelector("[milkshakes-menu]");
  const milkMenuRef = document.querySelector("[milkmenu]");
  
  shakesBtnRef.addEventListener("click", () => {
    const expanded =
      shakesBtnRef.getAttribute("aria-expanded") === "true" || false;

    shakesBtnRef.classList.toggle("is-open");
    shakesBtnRef.setAttribute("aria-expanded", !expanded);

      shakesMenuRef.classList.toggle("is-open");
       milkMenuRef.classList.toggle("befmob-is-open");
  });
})();