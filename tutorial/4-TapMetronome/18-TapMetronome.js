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

let elapsedTime;

function setup() {
  createCanvas(400,400);
  Tone.Transport.start(0); // 0 is here to sync clocks (js and computer)

  elapsedTime = 0;
}

function draw(){
  background(220);
  text("audio ctx clock: "+Tone.now().toFixed(3), 10, 20);
  text("Transport clock: "+Tone.Transport.seconds.toFixed(3), 10, 40);
  text("elapsedTime:"+elapsedTime, 10, 60);
  text("BPM: "+60/elapsedTime.toFixed(3), 10,80);
}

function keyPressed() {
  elapsedTime = Tone.Transport.seconds
  // stop Transport
  Tone.Transport.stop();
  // start Transport
  Tone.Transport.start();

}
