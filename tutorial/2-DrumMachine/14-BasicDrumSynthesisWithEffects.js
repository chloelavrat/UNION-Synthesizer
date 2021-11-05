// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 14 tutorial : Drum Machine
// --------------------------------
// Based on the youtube video :
// https://youtu.be/DZlQLRps1r8?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr
//
// Notes:
// ------
// Copy/paste this code in editor.p5js.org editor

let snareNoise;
let env;
let snPat;
let drums;
let bpFilter;
let rev;
let dis;

function setup() {

  snPat = [1,0,0,1,1,0,0];

  bpFilter = new p5.BandPass();
  bpFilter.freq(500);
  bpFilter.res(3);

  rev = new p5.Reverb();
  dis = new p5.Distortion();

  snareNoise = new p5.Noise();
  snareNoise.start();

  snareNoise.disconnect(); // to not connect snareNoise directly to the speaker

  snareNoise.connect(bpFilter);

  rev.process(bpFilter, 0.5, 1);

  env = new p5.Envelope();
  env.set(0.0001, 5, 0.01, 0.001, 0.1, 0);
  snareNoise.amp(env);

  drums = new p5.Part();
  drums.addPhrase('snare Drum', (time)=>{env.play(snareNoise, time, 0)}, snPat);
  drums.loop();
}
