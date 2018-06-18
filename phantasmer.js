$(() => {
  const scene = $('a-scene')

  const randomInt = (limit) => {
    return Math.floor(Math.random() * limit)
  }

  const randomCoordinate = () => {
    const
      x = randomInt(100),
      y = randomInt(100),
      z = randomInt(100);

    return `${x} ${y} ${z}`
  }

  setInterval(() => {
    scene.append(`<a-box color="#EF2D5E" position="${randomCoordinate()}"></a-box>`)
  }, 10)
});
