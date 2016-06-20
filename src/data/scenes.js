export const scenes = [
  {
    name: 'google-back-yard',
    imageSource: '/assets/back_yard1.jpg',
    title: 'Google 360 Back Yard',
  },

  {
    name: 'google-front-yard',
    imageSource: '/assets/front_yard1.jpg',
    title: 'Google 360 Front Yard',
  },

  {
    name: 'dslr-front-yard-sphere',
    imageSource: '/assets/front_yard2.jpg',
    title: 'DSLR Front Yard in Sphere',
  },

  {
    name: 'dslr-front-yard-cylinder',
    imageSource: '/assets/front_yard2.jpg',
    title: 'DSLR Front Yard in Cylinder',
    useCylinder: true,
  },

  {
    name: 'dslr-pond-sphere',
    imageSource: '/assets/pond1.jpg',
    title: 'DSLR Pond in Sphere',
  },

  {
    name: 'dslr-pond-cylinder',
    imageSource: '/assets/pond1.jpg',
    title: 'DSLR Pond in Cylinder',
    useCylinder: true,
  },
];

export const scenesMap = scenes.reduce(
  (memo, sphere) => Object.assign({}, memo, {
    [sphere.name]: sphere,
  }),
  {}
);
