"use strict";

const questionEls = document.querySelectorAll(".content__question-container");

questionEls.forEach((questionEl) => {
  questionEl.addEventListener("click", function () {
    let answer = this.nextElementSibling;
    let questionEl = this.firstElementChild;
    let iconEl = this.lastElementChild;

    if (answer.style.display === "block") {
      answer.style.display = "none";
      questionEl.classList.remove("active");
      iconEl.classList.remove("rotate");
    } else {
      answer.style.display = "block";
      questionEl.classList.add("active");
      iconEl.classList.add("rotate");
    }
  });
});
