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
    name: 'dslr-front-yard',
    imageSource: '/assets/front_yard2.jpg',
    title: 'DSLR Front Yard',
    useCylinder: true,
  },
];

export const scenesMap = scenes.reduce(
  (memo, sphere) => Object.assign({}, memo, {
    [sphere.name]: sphere,
  }),
  {}
);
