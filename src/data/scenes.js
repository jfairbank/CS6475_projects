export const scenes = [
  {
    name: 'google-back-yard',
    imageSource: '/assets/back_yard1.jpg',
    title: 'Google 360 Back Yard',
    useSphere: true,
  },

  {
    name: 'google-front-yard',
    imageSource: '/assets/front_yard1.jpg',
    title: 'Google 360 Front Yard',
    useSphere: true,
  },
];

export const scenesMap = scenes.reduce(
  (memo, sphere) => Object.assign({}, memo, {
    [sphere.name]: sphere,
  }),
  {}
);
