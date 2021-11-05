// faire recherche sur : tone.js
// tonejs.github.io/examples
// https://www.npmjs.com/search?q=tone

// 1. declare frequency max
let freqMax = 20000;
let init = false;
let voice;

// 3. declare ping pong delay
let pingPongDelay = new Pizzicato.Effects.PingPongDelay({
  feedback:0.6,
  time: 0.4,
  mix:0.5
});
// 4. declare low pass filter
let lowPassFilter = new Pizzicato.Effects.LowPassFilter({
  frequency:200,
  peak: 10
});
// 5. declare high pass filter
let highPassFilter = new Pizzicato.Effects.HighPassFilter({
  frequency:10,
  peak:10
});
// 7. play event listener
document.getElementById('play-button').addEventListener('click', function(event){
  //1.resume audio context
  Pizzicato.context.resume();
  console.log(Pizzicato.context);
  // 2. use microphone as audio input
  voice = new Pizzicato.Sound({source : 'input'}, function(){
    voice.play();
    // 6. add effect to microphone source
    voice.addEffect(pingPongDelay);
    voice.addEffect(lowPassFilter);
    voice.addEffect(highPassFilter);
  });
});


// 8. stop event listener
document.getElementById('stop-button').addEventListener('click', function(event){
  voice.stop()
});

document.body.addEventListener('mousemove',function(event){
  // 9. vary ping pong delay on X axis
  pingPongDelay.time = event.pageX / document.body.clientWidth;

  // 10. vary low pass filter on Y axis
  lowPassFilter.frequency = event.pageY / document.body.Height * freqMax;

  // 11. vary high pass filter on Y axis
  highPassFilter.frequency = event.pageY / document.body.Height * freqMax;

});
