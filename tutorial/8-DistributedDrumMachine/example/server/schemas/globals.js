export default {
  bpm: {
    type: 'integer',
    min: 60,
    max: 240,
    step: 1,
    default: 180,
  },
  scores: {
    type: 'any',
    default: {
      kick: [1, 0, 0, 0, 1, 0, 0, 0],
      hh: [0, 1, 0, 1, 0, 1, 0, 1],
      snare: [0, 0, 1, 0, 0, 0, 1, 0],
      clap: [0, 0, 1, 0, 0, 0, 1, 0],
    },
  },
  volume: {
    type: 'float',
    min: -80,
    max: 6,
    step: 0.1,
    default: 0,
  },
};
