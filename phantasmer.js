import {
  randomInt,
  randomShape,
  randomAnimation,
  randomColor,
  randomCoordinate
} from "./random.js";

window.addEventListener("load", () => {
  const scene = document.querySelector("a-scene");
  const entities = [];

  for (var i = 0; i < 1000; i++) {
    entities.push(false);
  }

  const manageEntity = index => {
    const oldEntityEl = document.querySelector(`#A${index}`);
    console.log(oldEntityEl);
    if (oldEntityEl) {
      scene.removeChild(oldEntityEl);
    }
    const shape = randomShape();
    const newEntityEl = document.createElement(`a-${shape}`);
    newEntityEl.setAttribute("id", `A${index}`);
    // TODO: Do these based on shape
    // newEntityEl.setAttribute('width', randomInt(1, 50))
    // newEntityEl.setAttribute('radius', randomInt(1, 50))
    newEntityEl.setAttribute("animation__2", randomAnimation());
    newEntityEl.setAttribute("color", randomColor());
    newEntityEl.setAttribute("position", randomCoordinate());
    scene.appendChild(newEntityEl);
    const time = randomInt(1000, 5000);
    setTimeout(() => {
      manageEntity(index);
    }, time);
  };

  entities.forEach((x, i) => {
    manageEntity(i);
  });
});
