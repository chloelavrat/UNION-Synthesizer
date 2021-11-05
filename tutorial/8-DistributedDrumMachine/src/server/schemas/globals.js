// type possibles
// integer
// float
// enul
// any

export default {
  bpm: {
    type: 'integer',
    min: 60,
    max: 240,
    default: 240,
  },
  scores: {
    type: 'any',
    default: {
      kick:  [1,0,1,0,1,0,1,0],
      hh:    [0,1,0,1,0,0,0,0],
      snare: [0,1,1,0,0,1,0,0],
      clap:  [0,0,0,0,1,0,0,1],
    },
  },
};
