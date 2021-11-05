// --------------------------------------------------------------------
// Autor : FouVReaux
// Date  : 22/01/2020
// Lang  : Node JS
// --------------------------------------------------------------------
// 12 tutorial : Drum Machine
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
let cnv; //canvas
let sPat;
let cursorPos;

function setup() {
  cnv = createCanvas(320, 60);
  cnv.mousePressed(canvasPressed);

  hh = loadSound('assets/drumSamples/hh_sample.mp3', () => {});
  clap = loadSound('assets/drumSamples/clap_sample.mp3', () => {});
  bass = loadSound('assets/drumSamples/bass_sample.mp3', () => {});

  beatLenght = 16;
  cellWidth = width/beatLenght;
  cursorPos = 0;

  hPat = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  cPat = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
  bPat = [1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0];
  sPat = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  hPhrase = new p5.Phrase('hh',(time)=> {hh.play(time)}, hPat);
  cPhrase = new p5.Phrase('clap',(time)=> {clap.play(time)}, cPat);
  bPhrase = new p5.Phrase('bass',(time)=> {bass.play(time)}, bPat);

  drums = new p5.Part();

  drums.addPhrase(hPhrase);
  drums.addPhrase(cPhrase);
  drums.addPhrase(bPhrase);
  drums.addPhrase("seq", sequence, sPat);

  bpmCTRL = createSlider(30,200, 80,1);
  bpmCTRL.position(10,70)
  bpmCTRL.input(() => {drums.setBPM(bpmCTRL.value())});
  drums.setBPM('80');

  drawMatrix();
}

function keyPressed(){
  if (key === " "){
    if (hh.isLoaded()&&bass.isLoaded()&&clap.isLoaded()){
      if(!drums.isPlaying){
        drums.metro.metroTicks = 0; // because drums do not like as a stop but as a pause
        drums.loop();
      } else {
        drums.stop()
      }
    } else {
      console.log("be patient as drums load...")
    }
  }
}
function canvasPressed(){
  let rowCliked = floor(3*mouseY/height);
  let indexCliked = floor(beatLenght*mouseX/width);

  if(rowCliked === 0){
    console.log("First Row "+ indexCliked);
    hPat[indexCliked] = +!hPat[indexCliked];
  } else if(rowCliked === 1){
    console.log("Second Row "+ indexCliked);
    cPat[indexCliked] = +!cPat[indexCliked];
  } else if(rowCliked === 2){
    console.log("Third Row "+ indexCliked);
    bPat[indexCliked] = +!bPat[indexCliked];
  }
  drawMatrix();
}

function drawMatrix(){
  background(80);
  stroke('gray');
  strokeWeight(2);
  fill('white');
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
    if(cPat[i]===1){
      ellipse(i*cellWidth +0.5*cellWidth, height/2, 10)
    }
    if(bPat[i]===1){
      ellipse(i*cellWidth +0.5*cellWidth, height*5/6, 10)
    }
  }
}
function sequence(time, beatIndex) {
  console.log(beatIndex);
  // to sync the drawPlayhead with beats
  setTimeout(() => {
    drawMatrix();
    drawPlayhead(beatIndex);
  }, time*1000)
}

function drawPlayhead(beatIndex) {
  stroke('red');
  fill(255,0,0,30)
  rect((beatIndex-1)*cellWidth,0, cellWidth, height);
}
