$(() => {
  const scene = $('a-scene')
  const shapes = ['box', 'circle', 'cone', 'dodecahedron', 'icosahedron', 'octahedron', 'ring', 'sphere', 'tetrahedron', 'torus-knot', 'torus', 'triangle']
  const entities = []

  for (i = 0; i < 50; i++) {
    entities.push(false)
  }

  const randomInt = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  const randomColor = () => {
    return "#000000".replace(/0/g, () => (~~(Math.random()*16)).toString(16));
  }

  const randomShape = () => {
    return shapes[Math.floor(Math.random()*shapes.length)]
  }

  const randomCoordinate = () => {
    const
      x = randomInt(-500, 500),
      y = randomInt(-500, 500),
      z = randomInt(-500, 500);

    return `${x} ${y} ${z}`
  }

  const entityString = (id) => {
    const shape = randomShape()
    return `<a-${shape} id='${id}' width="${randomInt(1, 50)}" height="${randomInt(1, 50)}" radius="${randomInt(1, 50)}" color="${randomColor()}" position="${randomCoordinate()}"></a-${shape}>`
  }

  setInterval(() => {
    entities.forEach((x, i) => {
      scene.find(`#${i}`).remove()
      scene.append(entityString(i))
    })
  }, 1000)
});
