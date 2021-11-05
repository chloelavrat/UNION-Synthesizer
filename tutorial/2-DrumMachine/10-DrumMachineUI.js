// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 10 tutorial : Drum Machine
// --------------------------------
// Based on the youtube video :
// https://youtu.be/Oe375jjE-q8?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr
//
// Notes:
// ------
// Copy/paste this code in editor.p5js.org editor

let hh, clap, bass;       //INSTRUMENT will serve as a container that holds a sound source
let hPat, cPat, bPat;     //INSTRUMENT PATTERN. it will be an array of numbers that wa can manipulate to make beats
let hPhrase, cPhrase, bPhrase;  //INSTRUMENT PHRASE. which defines how the hihat pattern is interpreted
let drums;    //PART. we will attach the phrase to the part, wich will serv as our transport to drive the phrase.
let bpmCTRL;
let beatLenght;
let cellWidth;

function setup() {
  createCanvas(320, 60);
  hh = loadSound('assets/drumSamples/hh_sample.mp3', () => {});
  clap = loadSound('assets/drumSamples/clap_sample.mp3', () => {});
  bass = loadSound('assets/drumSamples/bass_sample.mp3', () => {});

  beatLenght = 16;
  cellWidth = width/beatLenght;

  hPat = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  cPat = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
  bPat = [1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0];

  hPhrase = new p5.Phrase('hh',(time)=> {hh.play(time)}, hPat);
  cPhrase = new p5.Phrase('clap',(time)=> {clap.play(time)}, cPat);
  bPhrase = new p5.Phrase('bass',(time)=> {bass.play(time)}, bPat);

  drums = new p5.Part();

  drums.addPhrase(hPhrase);
  drums.addPhrase(cPhrase);
  drums.addPhrase(bPhrase);

  bpmCTRL = createSlider(30,600, 80,1);
  bpmCTRL.position(10,70)
  bpmCTRL.input(() => {drums.setBPM(bpmCTRL.value())});
  drums.setBPM('80');

  background(80);
  stroke('gray');
  strokeWeight(2);
  for (let i=0; i< beatLenght+1; i++){
    //startx, starty endx endy
    line(i*cellWidth, 0,i*cellWidth,height);
  }
  for (let i=0; i< 4; i++){
    //startx, starty endx endy
    line(0, i*height/3, width,i*height/3);
  }
  noStroke();
  for (let i=0; i< beatLenght; i++){
    if(hPat[i]===1){
      ellipse(i*cellWidth +0.5*cellWidth, height/6, 10)
    }
    if(cPat[i]===1){}
      ellipse(i*cellWidth +0.5*cellWidth, height/2, 10)
    }
    if(bPat[i]===1){
      ellipse(i*cellWidth +0.5*cellWidth, height*5/6, 10)
    }
  }
}

function keyPressed(){
  if (key === " "){
    if (hh.isLoaded()&&bass.isLoaded()&&clap.isLoaded()){
      if(!drums.isPlaying){
        drums.loop();
      } else {
        drums.stop()
      }
    } else {
      console.log("be patient as drums load...")
    }
  }
}
