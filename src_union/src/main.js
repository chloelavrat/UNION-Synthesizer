import '@babel/polyfill';
import loaders from 'waves-loaders';
import masters from 'waves-masters';
import resumeContext from './resumeContext.js';

async function init() {
  const audioContext = new AudioContext();
  // resume audio context
  await resumeContext(audioContext);

  // load some sound file
  const loader = new loaders.AudioBufferLoader();
  const soundFile = await loader.load('./drum-loop.wav');

  // instanciate the granular engine and connect to audio output
  // make suer to default inside the file

  // ----------------------------------------------------------
  // add controls
  // ----------------------------------------------------------

  const controls = {
    position: {
      min: 0,
      max: soundFile.duration - 0.2,
      value: granular.position,
    },
    duration: {
      min: 0.005,
      max: 0.2,
      value: granular.duration,
    },
    period: {
      min: 0.005,
      max: 0.1,
      value: granular.period,
    },
  };

  // generate interface from controls definitions
  for (let name in controls) {
    const config = controls[name];

    const $container = document.createElement('div');
    const $label = document.createElement('label');
    $label.textContent = name;

    const $input = document.createElement('input');
    $input.type = 'range';
    $input.min = config.min;
    $input.max = config.max;
    $input.step = 0.001;
    $input.value = config.value;
    $input.addEventListener('input', e => {
      const value = parseFloat(e.target.value);
      granular[name] = value;
    });

    $container.appendChild($label);
    $container.appendChild($input);

    document.body.appendChild($container);
  }
}

// wait for the page to be fully loaded before launching app
window.addEventListener('load', init);
