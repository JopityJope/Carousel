const btnRight = document.querySelector(".btn--right");

const btnLeft = document.querySelector(".btn--left");

const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");

let currentSlide = 1;

btnRight.addEventListener("click", function () {
  currentSlide++;
  if (currentSlide > slides.length) {
    currentSlide = 1;
  }
  console.log(currentSlide, slides.length);

  updateSlides();
  updateDots();
});

btnLeft.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = slides.length;
  }
  updateSlides();
  updateDots();
});

const updateSlides = function () {
  slides.forEach((slide) => {
    if (slide.classList.contains(`slide--${currentSlide}`)) {
      slide.classList.add("slide--active");
    } else {
      slide.classList.remove("slide--active");
    }
  });
};

const updateDots = function () {
  dots.forEach((dot) => {
    if (dot.classList.contains(`dot--${currentSlide}`)) {
      dot.classList.add("dot--active");
    } else {
      dot.classList.remove("dot--active");
    }
  });
};

/* dots.forEach((dot, index1) => {
  dot.addEventListener("click", function () {
    removeActiveDot(index1);

    dot.classList.toggle("dot--active");
  });
});

const removeActiveDot = function (index1) {
  dots.forEach((dot, index2) => {
    console.log(index2, index1);
    if (index2 != index1) {
      dot.classList.remove("dot--active");
    }
  });
};
 */

dots.forEach((dot, index1) => {
  dot.addEventListener("click", function () {
    removeActiveDot();
    dot.classList.add("dot--active");
    currentSlide = index1 + 1;
    updateSlides();
  });
});

const removeActiveDot = function (index1) {
  dots.forEach((dot) => {
    dot.classList.remove("dot--active");
  });
};
