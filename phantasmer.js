setTimeout(() => {
  Element.prototype.remove = function() {
      this.parentElement.removeChild(this);
  }
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
      for(var i = this.length - 1; i >= 0; i--) {
          if(this[i] && this[i].parentElement) {
              this[i].parentElement.removeChild(this[i]);
          }
      }
  }
  const scene = document.querySelector('a-scene');
  const shapes = ['box', 'circle', 'cone', 'dodecahedron', 'icosahedron', 'octahedron', 'ring', 'sphere', 'tetrahedron', 'torus-knot', 'torus', 'triangle']
  const entities = []

  for (i = 0; i < 100; i++) {
    entities.push(false)
  }

  const randomInt = (min, max) => {
    return parseInt((Math.random() * (max - min) + min), 10);
  }

  const randomColor = () => {
    return "#000000".replace(/0/g, () => (~~(Math.random()*16)).toString(16));
  }

  const randomShape = () => {
    return shapes[Math.floor(Math.random()*shapes.length)]
  }

  const createEntity = (id, element) => {
    const oldEntityEl = document.querySelector(`#A${id}`)
    console.log(oldEntityEl)
    if (oldEntityEl) { scene.removeChild(oldEntityEl) }
    const newEntityEl = randomEntity(id);
    scene.appendChild(newEntityEl)
    const time = randomInt(4000, 40000)
    setTimeout(() => { createEntity(id, element) }, time)
  }

  const randomCoordinate = () => {
    const
      x = randomInt(-50, 50),
      y = randomInt(-50, 50),
      z = randomInt(-50, 50);

    return `${x} ${y} ${z}`
  }

  const randomAnimation = () => {
    const x = randomInt(1, 100);
    if (x > 1 && x <= 50) {
      return "property: rotation; to: 0 360 0; loop: true; dur: 10000;"
    }
    if (x > 50 && x <= 100 ) {
      return "property: scale; dir: alternate; dur: 200; easing: easeInSine; loop: true; to: 1.2 1 1.2;"
    }
  }

  const randomEntity = (id) => {
    const shape = randomShape()
    const entityEl = document.createElement(`a-${shape}`);
    entityEl.setAttribute('id', `A${id}`)
    // TODO: Do these based on shape
    // entityEl.setAttribute('width', randomInt(1, 50))
    // entityEl.setAttribute('radius', randomInt(1, 50))
    entityEl.setAttribute('animation__2', randomAnimation())
    entityEl.setAttribute('color', randomColor())
    entityEl.setAttribute('position', randomCoordinate())
    scene.appendChild(entityEl)
    return entityEl;
  }

  entities.forEach((x, i) => {
    createEntity(i)
  })
}, 1000);
