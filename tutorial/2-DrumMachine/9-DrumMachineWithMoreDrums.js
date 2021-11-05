// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 9 tutorial : Drum Machine
// --------------------------------
// Based on the youtube video :
// https://youtu.be/eomGEYs-J08?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr
//
// Notes:
// ------
// Copy/paste this code in editor.p5js.org editor

let hh, clap, bass;       //INSTRUMENT will serve as a container that holds a sound source
let hPat, cPat, bPat;     //INSTRUMENT PATTERN. it will be an array of numbers that wa can manipulate to make beats
let hPhrase, cPhrase, bPhrase;  //INSTRUMENT PHRASE. which defines how the hihat pattern is interpreted
let drums;    //PART. we will attach the phrase to the part, wich will serv as our transport to drive the phrase.

function setup() {
  createCanvas(400, 400);
  hh = loadSound('assets/drumSamples/hh_sample.mp3', () => {});
  clap = loadSound('assets/drumSamples/clap_sample.mp3', () => {});
  bass = loadSound('assets/drumSamples/bass_sample.mp3', () => {});


  hPat = [1,0,1,1];
  cPat = [1,0,0,0];
  bPat = [1,0,1,0];

  hPhrase = new p5.Phrase('hh',(time)=> {hh.play(time)}, hPat);
  cPhrase = new p5.Phrase('clap',(time)=> {clap.play(time)}, cPat);
  bPhrase = new p5.Phrase('bass',(time)=> {bass.play(time)}, bPat);

  drums = new p5.Part();

  drums.addPhrase(hPhrase);
  drums.addPhrase(cPhrase);
  drums.addPhrase(bPhrase);
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
