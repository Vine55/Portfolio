const moreButtons = document.querySelectorAll(".more-btn");

moreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const description = button.nextElementSibling;
    description.classList.toggle("hidden");
    if(button.textContent=='More') {
      button.textContent='Hide'
    }
    else {
      button.textContent='More'

    }
  });
});
