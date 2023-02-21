"use strict";

const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let load = 0;
let interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load === 100) {
    clearInterval(interval);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = loadBlur(load, 0, 100, 1, 0);

  background.style.filter = `blur(${loadBlur(load, 0, 100, 30, 0)}px)`;
}

const loadBlur = (num, minValueLoad, maxValueLoad, minOpacity, maxOpacity) => {
  return (
    ((num - minValueLoad) * (maxOpacity - minOpacity)) /
      (maxValueLoad - minValueLoad) +
    minOpacity
  );
};
