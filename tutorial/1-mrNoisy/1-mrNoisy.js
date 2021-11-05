// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// First tutorial : Noise generator
// --------------------------------
// Based on the youtube video :
// https://youtu.be/Rpl2-BEsX5M?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr
//
// References from :
// https://p5js.org/reference/#/p5.Noise
//
// Notes:
// ------
// Copy/paste this code in editor.p5js.org editor

// calling a new instance of the p5 noise generator
// with assignment
let  mrNoisy = new p5.Noise();

function setup() {
  createCanvas(400, 400);
  // set the amplitude of mrNoisy (can be 0 to 1)
  mrNoisy.amp(0.1);
  // ste the color of the noise
  mrNoisy.setType('pink'); // 'white', 'pink' or 'brown'.
  // start the noise generator
  mrNoisy.start();
}

function draw() {
  background(220);
}
