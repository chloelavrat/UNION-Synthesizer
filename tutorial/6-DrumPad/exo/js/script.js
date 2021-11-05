
// For Firefox :
// In order to allow acces to audio file that are out of this directory
// DO the following
// about:config
// privacy.file_unique_origin
// set it to false

let context = null; // the Web Audio "context" object
let midiAccess = null; // the MIDIAccess object.
let bufferLoader; // buffer
let filter; // biquad filter
let filterDefault = 5000; // default value
let freqMax = 20000; // frequency max

// 0. Resume audio context
document.getElementById('button-resume').addEventListener('click', function () {
  context.resume().then(()=>{
    console.log("Audio Context resumed!");
  });
});

// when document is ready
window.addEventListener('load', function () {
    // 1. Init AudioContext
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
        context,
        [
            './samples/Crash1.wav',
            './samples/Crash2.wav',
            './samples/HHC.wav',
            './samples/HHO.wav',
            './samples/Ride.wav',
            './samples/Kick.wav',
            './samples/Snare.wav',
            './samples/Tom1.wav',
            './samples/Tom2.wav',
            './samples/Tom3.wav'
        ],
        finishedLoading
    );
    bufferLoader.load();
    // 2. Init Web Midi
    if (navigator.requestMIDIAccess){
      navigator.requestMIDIAccess().then(onMIDIInit, onMIDIReject);
    } else {
      console.log("WARNING: No Midi in your browser");
    }

});

// 3. Midi callback is called if Midi is accessible
function onMIDIInit (midi) {
    console.log('MIDI ready!');

    let init = false;
    let inputs = midi.inputs.values();

    for (let input of inputs){
      console.log(input);
      input.onmidimessage = midiMessageEventHandler;
      init = true;
    }
    if (!init){
      console.log('no mini input :(')
    }
}

// Reject Midi
function onMIDIReject (err) {
    console.log(`The MIDI system failed to start.    You're gonna have a bad time. ${err}`);
}

// 4. Event handler which receive all Midi Messages
function midiMessageEventHandler (event) {
  let str = 'Midi message in[]'+event.data.length+'bytes]:';
  for (let i=0; i<event.data.length; i++){
    str += event.data[i]+' ';
  }
  console.log(str);

  // selection of the message type
  switch (event.data[0]&240) {
    case 144: // note one in midi
      if(event.data[2] > 0){
        noteOn(event.data[1],event.data[2]);
      }
      break;
    default:

  }
}

// 6. Add filter
function continuousController (ctrlNumber, value) {
    // ...
}

// 4. play sound when note on
function noteOn (noteNumber, velocity) {
    console.log('note on', noteNumber,velocity);
    if (noteNumber === 48){
      playSound(bufferLoader.bufferList[0])
    }
}

function noteOff (noteNumber) {
    console.log('note off', noteNumber);
}

function finishedLoading (bufferList) {
    console.log('Buffer loaded !');
}

// 5. Create Web Audio Graph
function playSound (buffer) {
    let source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start();
}

class BufferLoader {
    context;
    urlList;
    onload;
    bufferList = [];
    loadCount = 0;

    constructor(context, urlList, callback) {
        this.context = context;
        this.urlList = urlList;
        this.onload = callback;
    }

    loadBuffer(url, index) {
        // Load buffer asynchronously
        let loader = this; // set loader
        let request = new XMLHttpRequest(); // create asynchronous request
        request.open('GET', url, true); // init request
        request.responseType = 'arraybuffer'; // type of response: arraybuffer

        // success transaction = 200 from server
        request.onload = function () {
            // Asynchronously decode the audio file data contained in ArrayBuffer in request.response
            // baseAudioContext.decodeAudioData(ArrayBuffer, successCallback, errorCallback);
            loader.context.decodeAudioData(
                request.response,
                function (buffer) {
                    if (!buffer) {
                        console.log('error decoding file data: ' + url);
                        return;
                    }
                    loader.bufferList[index] = buffer;
                    if (++loader.loadCount === loader.urlList.length) { loader.onload(loader.bufferList); }
                },
                function (error) {
                    console.error('decodeAudioData error', error);
                }
            );
        };

        request.onerror = function () {
            console.log('BufferLoader: XHR error');
        };

        // send request to server
        request.send();
    };

    load() {
        for (let i = 0; i < this.urlList.length; ++i) { this.loadBuffer(this.urlList[i], i); }
    };

}
