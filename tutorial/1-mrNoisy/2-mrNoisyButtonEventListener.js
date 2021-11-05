// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 2d tutorial : Noise generator with on/off button
// --------------------------------------------------------------------
// Based on the youtube video :
// https://youtu.be/OjBcx7OVdCI?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr
//
// References from :
// https://p5js.org/reference/#/p5.Noise
//
// Notes:
// ------
// Copy/paste this code in editor.p5js.org editor

// global declarations
let mrNoisy; // noise object
let playButton, stopButton; // IU elements

// global initializations
function setup() {

  mrNoisy = new p5.Noise('brown')
  mrNoisy.amp(0.1);

  playButton = createButton('play');
  playButton.position(10, 10);
  playButton.mousePressed(()=>{mrNoisy.start();});

  stopButton = createButton('stop');
  stopButton.position(10, 40);
  stopButton.mousePressed(()=>{mrNoisy.stop();});

}
