const moreButtons = document.querySelectorAll(".more-btn");
banner = document.querySelector('.banner')
cards = document.querySelectorAll('.project-card')

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


  window.addEventListener('scroll', () => {
    vh150 = window.innerHeight*0.9
    if (window.innerWidth>700) {
      vh80 = window.innerHeight*0.9
      if (window.scrollY>vh80) {
        banner.style.backgroundColor = "#000707"
      }  else if (window.scrollY<vh80) {
        banner.style.backgroundColor = "rgba(0,7,7,0)"
      }
    }
    else {banner.style.backgroundColor="rgba(0,7,7,0"}
    if (window.scrollY>vh150) {
      cards.forEach(card => {
        card.style.opacity = '1'
      })
    }
  })