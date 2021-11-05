function decibelToLinear(val) {
  return Math.exp(0.11512925464970229 * val); // pow(10, val / 20)
};

class AudioBus {
  constructor(audioContext) {
    this.audioContext = audioContext;

  }

  connect(destination) {

  }

  get input() {

  }

  set volume(db) {

  }
}

export default AudioBus;
