class MiniGranular {
  constructor(audioContext, soundFile) {
    this.audioContext = audioContext;
    this.soundFile = soundFile;

    // position (in sec.) of the grain in the given buffer
    this.position = 1;
    // period (in sec.) between to grains
    this.period = 0.02;
    // duration (in sec.) of the grains
    this.duration = 0.1;

    this.output = this.audioContext.createGain();
  }

  // mimic the API of native audio node to interface w/ "real" world
  connect(node) {
    this.output.connect(node);
  }

  // method that is called periodically by the scheduler
  // the given `time` is the logical time at which an event must be scheduled
  advanceTime(time) {
    const jit = Math.random() * 0.002;

    const env = this.audioContext.createGain();
    env.connect(this.output);
    env.gain.value = 0;
    env.gain.linearRampToValueAtTime(1, time + jit + this.duration / 2);
    env.gain.linearRampToValueAtTime(0, time + jit + this.duration);

    const source = this.audioContext.createBufferSource();
    source.connect(env);
    source.buffer = this.soundFile;
    source.start(time + jit, this.position);
    source.stop(time + jit + this.duration);

    return time + this.period;
  }
}

export default MiniGranular;
