// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 16 tutorial : Tone JS
// --------------------------------
// Based on the youtube video :
// https://youtu.be/W3--FZ8X9lM?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr
//
// Notes:
// ------
// tonejs.github.io

let loopBeat;
let bassSynth, cymbalSynth;
let counter;

function setup() {

  counter = 0;

  bassSynth = new Tone.MembraneSynth().toMaster();
  cymbalSynth = new Tone.MetalSynth({
      "frequency" : 250,
      "envelope" : {
        "attack" : 0.001,
        "decay"  : 0.1,
        "release" : 0.01
      },
      "harmonicity" : 5.1,
      "modulationIndex" : 16,
      "octaves" :0.5
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
    if (counter == 3 || counter == 12){
      cymbalSynth.envelope.decay = 0.5;
    } else {
      cymbalSynth.envelope.decay = 0.01;
    }
    cymbalSynth.triggerAttackRelease('32n', time, 0.3);
  }
  //console.log(currentBeat);
  counter = (counter +1)%16
}
