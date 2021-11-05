// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 8 tutorial : Drum Machine
// --------------------------------
// Based on the youtube video :
// https://youtu.be/oh99SrpXrjg?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr
//
// Notes:
// ------
// Copy/paste this code in editor.p5js.org editor

let hh;       //HIHAT will serve as a container that holds a sound source
let hPat;     //HIHAT PATTERN. it will be an array of numbers that wa can manipulate to make beats
let hPhrase;  //HIHAT PHRASE. which defines how the hihat pattern is interpreted
let drums;    //PART. we will attach the phrase to the part, wich will serv as our transport to drive the phrase.

function setup() {
  createCanvas(400, 400);
  hh = loadSound('assets/drumSamples/hh_sample.mp3', () => {drums.loop()});

  hPat = [1,1,1,0,1,1,0];

  hPhrase = new p5.Phrase('hh',(time)=> {hh.play(time)}, hPat);

  drums = new p5.Part();

  drums.addPhrase(hPhrase);
}

function draw() {
  background(220);
}
