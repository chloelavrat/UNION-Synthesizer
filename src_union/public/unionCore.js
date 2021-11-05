// -----------------------------------------------------------------------------
//
//
// -----------------------------------------------------------------------------
// Global variables
let mX, mY; // Positions of the mouse in the spectrum area
// -----------------------------------------------------------------------------
// P5JS : CANVAS 1 : spectrum
var spectrum = function(can1){
  // SETUP
  can1.setup = function () {
    // Get size of the window
    var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
    // set Canvas size
    let canvas1 = can1.createCanvas(x, y/3) ;
    canvas1.position(0,y*2/3)
    canvas1.id('spectrumCanvas');
    // FFT for the display
    fft = new p5.FFT();
    // set the global variables with mouse events
    spectrumCanvas.addEventListener('mousemove', function (event) {
      //console.log( can1.mouseX, can1.mouseY);
      mX = can1.mouseX;
      mY = can1.mouseY;
    }, false);
  };
  // DRAW
  can1.draw = function () {
    // color stuff
    can1.stroke('white');
    can1.background(80);
    // get the FFT output
    let spectrum = fft.analyze();
    //DRAW spectrum shape logarithmically
    can1.beginShape();
     can1.vertex(0,can1.height);
     for (let i = 0; i < spectrum.length; i++) {
       can1.vertex(
         can1.map(can1.log(i), 0, can1.log(spectrum.length), 0, can1.width), //x axis
         can1.map(spectrum[i], 0, 255, can1.height, 0) //y axis
       );
     }
     can1.vertex(can1.width, can1.height);
    can1.endShape();
  };
};
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// P5JS : CANVAS 2 : controler
var controler = function(can2){
  // Instruments
  let modulator, carrier, delay, filter;
  // Controls (IU)
  let playButton, stopButton; // IU elements
  var x,y;
  // the carrier frequency pre-modulation
  let carrierBaseFreq = 220;

  // min/max ranges for modulator
  let modMaxFreq = 112;
  let modMinFreq = 0;
  let modMaxDepth = 150;
  let modMinDepth = -150;

  //Random value
  let randCarrierMax = 0;
  let randModulatorMax = 0;

  // SETUP
  can2.setup = function () {
    // Get size of the window
    var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0];
    x = win.innerWidth || docElem.clientWidth || body.clientWidth;
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
    // set Canvas size
    let canvas2 = can2.createCanvas(x, y*17/30) ;
    canvas2.position(0,y*1/10)

    // Instruments declaration
    carrier = new p5.Oscillator('sine');
    carrier.amp(0); // set amplitude
    carrier.freq(carrierBaseFreq); // set frequency
    carrier.start(); // start oscillating

    // try changing the type to 'square', 'sine' or 'triangle'
    modulator = new p5.Oscillator('sawtooth');
    modulator.freq(carrierBaseFreq); // set frequency
    modulator.start();

    // add the modulator's output to modulate the carrier's frequency
    modulator.disconnect();
    carrier.freq(modulator);

    delay = new p5.Delay();
    delay.process(carrier, 0, 0, 5000);

    //filter = new p5.LowPass();
    //delay.connect(filter);
    //filter.set(0,5);

    // Controls
    playButton = can2.createButton('play');
    playButton.position(10, 10);
    playButton.mousePressed(()=>{carrier.start();});

    stopButton = can2.createButton('stop');
    stopButton.position(10, 40);
    stopButton.mousePressed(()=>{carrier.stop();});

    // set slider : carrier : Volume
    setCarVol = can2.createSlider(0, 5, 0, 0); // from, to, init, step
    setCarVol.size(x-120);
    setCarVol.position(10, 90).style('font-family', 'courier');
    setCarVol.input(function(){
      carrier.amp(setCarVol.value(), 0.001); //0.01 sloop : smooth the move of the silder
    });
    // set slider : carrier : frequency
    setCarFreq = can2.createSlider(0, 5000, 0, 1); // from, to, init, step
    setCarFreq.size(x-120);
    setCarFreq.position(10, 140).style('font-family', 'courier');
    setCarFreq.input(function(){
      carrier.freq(setCarFreq.value(), 0.001); //0.01 sloop : smooth the move of the silder
    });
    // set slider : modulator : Volume
    setModVol = can2.createSlider(0, 5000, 0, 1); // from, to, init, step
    setModVol.size(x-120);
    setModVol.position(10, 190).style('font-family', 'courier');
    setModVol.input(function(){
      modulator.amp(setModVol.value(), 0.001); //0.01 sloop : smooth the move of the silder
    // set text
    });
    // set slider : modulator : frequency
    setModFreq = can2.createSlider(0, 5000, 0, 1); // from, to, init, step
    setModFreq.size(x-120);
    setModFreq.position(10, 190+50).style('font-family', 'courier');
    setModFreq.input(function(){
      modulator.freq(setModFreq.value(), 0.001); //0.01 sloop : smooth the move of the silder
    // set text
    });
    // set slider : modulator : Random
    setModRand = can2.createSlider(0, 1, 0, 0); // from, to, init, step
    setModRand.size(x-120);
    setModRand.position(10, 190+50*3).style('font-family', 'courier');
    setModRand.input(function(){
      delay.feedback(setModRand.value());
    // set text
    });
    // set slider : carrier : Random
    setCarRand = can2.createSlider(0, 1, 0, 0); // from, to, init, step
    setCarRand.size(x-120);
    setCarRand.position(10, 190+50*4).style('font-family', 'courier');
    setCarRand.input(function(){
      delay.delayTime(setCarRand.value());
    // set text
    });

    //--------------------------------------------------------------------------

  };
  // DRAW
  can2.draw = function () {
    //filter.set(can2.map(mX, 0, x,0, 5000),can2.map(mY, 0, y,0, 5000));
    //map(mouseX, 0, width, 25, 75);
    //console.log(can2.map(mX, 0, x,10, 5000),can2.floor(can2.map(mY, 0, y,15, 5)));
    //filter.set(can2.map(mX, 0, x,10, 5000),can2.floor(can2.map(mY, 0, y,15, 5)));

    can2.background(150);
    can2.fill(200);
    can2.text('Amp:Car', x-100, 40);
    can2.textSize(20);
    can2.fill(200);
    can2.text('Freq:Car', x-100, 40+50);
    can2.textSize(20);
    can2.fill(200);
    can2.text('Amp:Mod', x-100, 40+50*2);
    can2.textSize(20);
    can2.fill(200);
    can2.text('Freq:Mod', x-100, 40+50*3);
    can2.textSize(20);
    can2.fill(200);
    can2.text('Feedback', x-100, 190+50*2);
    can2.textSize(20);
    can2.fill(200);
    can2.text('Delay', x-100, 190+50*3);
    can2.textSize(20);
    can2.fill(200);
  };
};

ctrl = new p5(controler, "controler");
spec = new p5(spectrum, "spectrum");
