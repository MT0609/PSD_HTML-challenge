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

// ---- //
let techChoice = document.querySelectorAll(".technology__choice");
techChoice = [...techChoice];

techChoice[0].classList.add("technology__choice--selected"); // initialize the development tools to be selected

techChoice.forEach((item, i) => {
  techChoice[i].addEventListener("click", function () {
    techChoice.map((label) =>
      label.classList.remove("technology__choice--selected")
    );
    techChoice[i].classList.add("technology__choice--selected");
  });
});
