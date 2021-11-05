
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
    const step = Math.round(syncTime / this.period) % this.score.length;

    // play buffer at right step
    //if (step === this.activeStep && this.score[step] === 1){
    if (this.score[step] === 1){

      const src = this.audioContext.createBufferSource();
      src.connect(this.output);
      src.buffer = this.buffer;
      src.start(audioTime);
    }

    return syncTime + this.period;
  }
}

export default StepEngine;
