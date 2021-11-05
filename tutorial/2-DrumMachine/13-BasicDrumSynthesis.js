// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 13 tutorial : Drum Machine
// --------------------------------
// Based on the youtube video :
// https://youtu.be/GeEuRS6x6vM?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr
//
// Notes:
// ------
// Copy/paste this code in editor.p5js.org editor

let snareNoise;
let env;
let snPat;
let drums;

function setup() {

  snPat = [1,0,0,1,1,0,0];

  snareNoise = new p5.Noise();
  snareNoise.start();

  env = new p5.Envelope();
  env.set(0.0001, 1, 0.01, 0.001, 0.1, 0);
  snareNoise.amp(env);

  drums = new p5.Part();
  drums.addPhrase('snare Drum', (time)=>{env.play(snareNoise, time, 0)}, snPat);
  drums.loop();
}
