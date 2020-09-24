let buttons = document.querySelectorAll(".clients__btn");
let slides = document.querySelectorAll(".clients__slide");

for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

buttons[1].classList.add("clients__btn--selected");
slides[1].style.display = "flex";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("clients__btn--selected");
    }
    buttons[i].classList.add("clients__btn--selected");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[i].style.display = "flex";
  });
}
