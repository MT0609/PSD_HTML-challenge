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

// --- //
let remarkNavBar = document.querySelectorAll(".remark__bar");
for (let i = 0; i < remarkNavBar.length; i++) {
  remarkNavBar[i].addEventListener("click", function () {
    for (let i = 0; i < remarkNavBar.length; i++) {
      remarkNavBar[i].classList.remove("remark__bar--selected");
    }
    remarkNavBar[i].classList.add("remark__bar--selected");
  });
}

let prevRemark = document.querySelector(".remark__btn--left");
let nextRemark = document.querySelector(".remark__btn--right");
let remarkSlides = document.querySelector(".remark__container > div");

prevRemark.addEventListener("click", () => {
  // remarkSlides.style.margin = "0 -50%";
  remarkSlides.style.transform = "translateX(-20%)";
});
nextRemark.addEventListener("click", () => {
  // ...
});

// --- //
let inputButton = document.querySelectorAll("input:not([type=submit])");
inputButton = [...inputButton];
inputButton.map((btn) =>
  btn.addEventListener("click", () => {
    inputButton.map((btn) => btn.classList.remove("input--selected"));
    btn.classList.add("input--selected");
    console.log(111);
  })
);

let submitButton = document.querySelectorAll("input[type=submit]");
submitButton = [...submitButton];
submitButton.map((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
  })
);
