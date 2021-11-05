// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 17 tutorial : Tone JS
// --------------------------------
// Based on the youtube video :
// https://youtu.be/GOWj4IVpcag?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr
//
// Notes:
// ------
// tonejs.github.io

let loopBeat;
let bassSynth, cymbalSynth;
let counter;
let amSynth;
let fmSynth;
let pluckSynth;

function setup() {

  counter = 0;

  pluckSynth = new Tone.PluckSynth().toMaster();

  amSynth = new Tone.AMSynth({
    harmonicity : 1.84, // default : 3/1 : carrier signal / modulation signal
    detune : 0,
    oscillator : {
      type : "sine" // carrier signal
    },
    envelope : {
      attack : 0.01,
      decay : 0.01,
      sustain : 1,
      release : 0.5
    },
    modulation : {
      type : "square" //modulation signal
    },
    modulationEnvelope:{
      attack : 0.005,
      decay : 0,
      sustain : 1,
      release : 0.5
    }
  }).toMaster();
  fmSynth = new Tone.FMSynth({
    harmonicity : 1.1 , // mod Synth / car Synth
    modulationIndex : 10 ,
    detune : 0 ,
    oscillator : {
      type : "sine"
    },
    envelope : {
      attack : 0.01 ,
      decay : 0.01 ,
      sustain : 1 ,
      release : 0.5
    },
    modulation : {
      type : "square"
    },
    modulationEnvelope : {
      attack : 0.85 ,
      decay : 0 ,
      sustain : 1 ,
      release : 0.5
    }
  }).toMaster();

  bassSynth = new Tone.MembraneSynth().toMaster();
  cymbalSynth = new Tone.MetalSynth({
      frequency : 250,
      envelope : {
        attack : 0.001,
        decay  : 0.1,
        release : 0.01
      },
      harmonicity : 5.1,
      modulationIndex : 16,
      octaves :0.5
    }
  ).toMaster();

  loopBeat = new Tone.Loop(song, '16n'); // 4n : quater Notes

  Tone.Transport.bpm.value = 140;
  Tone.Transport.start();
  loopBeat.start(0);
}

function song(time){
  //let currentBeat = split(Tone.Transport.position, ':'); // to get each values
  if (counter%4 == 0){
    bassSynth.triggerAttackRelease('F#1', '8n', time);
  }
  if (counter%4 !== 1){
    if (counter === 3 || counter == 12){
      cymbalSynth.envelope.decay = 0.5;
    } else {
      cymbalSynth.envelope.decay = 0.01;
    }
    cymbalSynth.triggerAttackRelease('32n', time, 0.3);
  }
  if (counter === 0){
    amSynth.triggerAttackRelease('a1', '16n', time, 1);
  }
  if (counter === 10){
    amSynth.triggerAttackRelease('Bb1', '16n', time, 1);
  }

  if (counter === 0){
    fmSynth.triggerAttackRelease('a1', '16n', time, 1);
  }
  if (counter === 10){
    fmSynth.triggerAttackRelease('Bb2', '16n', time, 1);
  }
  if (counter%2 === 0){
    pluckSynth.triggerAttackRelease('Bb6', '16n', time, 1);
  } else {
    pluckSynth.triggerAttackRelease('g#6', '16n', time, 1);
  }

  //console.log(currentBeat);
  counter = (counter +1)%16
}
