// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 4d tutorial : Noise generator with full button
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
let fft;

// global initializations
function setup() {

  createCanvas(400,400);

  mrNoisy = new p5.Noise('white')
  mrNoisy.amp(0.1);

  fft = new p5.FFT();

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
  chooseNoise.position(110,10).style('font-family', 'courier');;
  chooseNoise.option('white');
  chooseNoise.option('pink');
  chooseNoise.option('brown');
  chooseNoise.changed(function(){
    console.log(chooseNoise.value());
    mrNoisy.setType(chooseNoise.value());
  });

  setVolume = createSlider(0, 1, 0, 0); // from, to, init, step
  setVolume.position(110, 60).style('font-family', 'courier');;
  setVolume.input(function(){
    console.log(setVolume.value());
    mrNoisy.amp(setVolume.value(), 0.01); //0.01 sloop : smooth the move of the silder
  });

  stroke('white');
}

function draw(){
  background(80);
  let spectrum = fft.analyze();
  for(let i = 0; i<=spectrum.length; i++){
    point(
      map(log(i), 0, log(spectrum.length), 0, width), //x axis
      map(spectrum[i], 0, 255, height, 0) //y axis
    );
  }
}
