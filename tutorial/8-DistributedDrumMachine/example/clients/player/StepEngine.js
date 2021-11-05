
class StepEngine {
  constructor(audioContext, period, buffer, activeStep) {
    this.audioContext = audioContext;
    this.period = period;
    this.buffer = buffer;
    this.activeStep = activeStep;
    this.score = [];

    this.output = this.audioContext.createGain();
  }

  connect(node) {
    this.output.connect(node);
  }

  advanceTime(syncTime) {
    const audioTime = this.master.audioTime;
    // console.

    const step = Math.round(syncTime / this.period) % this.score.length;

    if (step === this.activeStep && this.score[step] === 1) {
      const src = this.audioContext.createBufferSource();
      src.buffer = this.buffer;
      src.connect(this.output);
      src.start(audioTime);
    }

    return syncTime + this.period;
  }
}

export default StepEngine;
