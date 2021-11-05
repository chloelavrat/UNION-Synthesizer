// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 15 tutorial : Tone JS
// --------------------------------
// Based on the youtube video :
// https://youtu.be/8u1aQdG5Nrk?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr
//
// Notes:
// ------
// tonejs.github.io

let loopBeat;
let bassSynth;

function setup() {

  bassSynth = new Tone.MembraneSynth().toMaster();

  loopBeat = new Tone.Loop(song, '4n'); // 4n : quater Notes

  Tone.Transport.bpm.value = 140;
  Tone.Transport.start();
  loopBeat.start(0);
}

function song(time){
  bassSynth.triggerAttackRelease('c1', '8n', time);
  console.log(time);
}
