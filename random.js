export const randomInt = (min, max) => {
  return parseInt(Math.random() * (max - min) + min, 10);
};

export const randomColor = () => {
  return "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
};

const shapes = [
  "box",
  "circle",
  "cone",
  "dodecahedron",
  "icosahedron",
  "octahedron",
  "ring",
  "sphere",
  "tetrahedron",
  "torus-knot",
  "torus",
  "triangle"
];
export const randomShape = () => {
  return shapes[Math.floor(Math.random() * shapes.length)];
};

export const randomCoordinate = () => {
  const x = randomInt(-10, 10),
    y = randomInt(-10, 10),
    z = randomInt(-10, 10);

  return `${x} ${y} ${z}`;
};

export const randomAnimation = () => {
  const x = randomInt(1, 100);
  if (x > 1 && x <= 50) {
    return "property: rotation; to: 0 360 0; loop: true; dur: 10000;";
  }
  if (x > 50 && x <= 100) {
    return "property: scale; dir: alternate; dur: 200; easing: easeInSine; loop: true; to: 1.2 1 1.2;";
  }
};
