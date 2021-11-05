// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 3d tutorial : Noise generator with full button
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
let playButton, stopButton, chooseNoise, setVolume; // IU elements
let toggleOnOff;

// global initializations
function setup() {

  mrNoisy = new p5.Noise('brown')
  mrNoisy.amp(0.1);

  // on and off button
  toggleOnOff = createButton("Play");
  toggleOnOff.position(10,10).style('font-family', 'courier');
  toggleOnOff.mousePressed(function(){
    if (mrNoisy.started) {
      mrNoisy.stop();
      toggleOnOff.html('Play');
    } else {
      mrNoisy.start();
      toggleOnOff.html('Stop');
    }
  });

  chooseNoise = createSelect();
  chooseNoise.position(110,10).style('font-family', 'courier');
  chooseNoise.option('white');
  chooseNoise.option('pink');
  chooseNoise.option('brown');
  chooseNoise.changed(function(){
    console.log(chooseNoise.value());
    mrNoisy.setType(chooseNoise.value());
  });

  setVolume = createSlider(0, 1, 0, 0); // from, to, init, step
  setVolume.position(110, 60).style('font-family', 'courier');
  setVolume.input(function(){
    console.log(setVolume.value());
    mrNoisy.amp(setVolume.value(), 0.001); //0.01 sloop : smooth the move of the silder
  });




}
