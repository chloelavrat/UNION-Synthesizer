import { Experience } from '@soundworks/core/client';
import { render, html } from 'lit-html';
import renderAppInitialization from '../views/renderAppInitialization';
import StepEngine from './StepEngine';
import AudioBus from './AudioBus';
import masters from 'waves-masters';

class PlayerExperience extends Experience {
  constructor(client, config = {}, $container, audioContext) {
    super(client);

    this.config = config;
    this.$container = $container;
    this.audioContext = audioContext;

    // require services
    this.sync = this.require('sync');
    this.audioBufferLoader = this.require('audio-buffer-loader');
    this.checkin = this.require('checkin');
    this.platform = this.require('platform');

    this.engines = {};

    // default initialization views
    renderAppInitialization(client, config, $container);
  }

  async start() {
    super.start();

    this.globals = await this.client.stateManager.attach('globals');

    this.listeners = {
      toggleStep: (name, index) => {
        const scores = this.globals.get('scores');
        const score = scores[name];
        score[index] = 1 - score[index];

        this.globals.set({ 'scores': scores });
      },
    };

    const scheduler = new masters.Scheduler(() => this.sync.getSyncTime(), {
      currentTimeToAudioTimeFunction: syncTime => {
        return this.sync.getLocalTime(syncTime);
      },
    });

    const audioBus = new AudioBus(this.audioContext);
    audioBus.connect(this.audioContext.destination);

    const volume = this.globals.get('volume');
    audioBus.volume = volume;

    const bpm = this.globals.get('bpm');
    const scores = this.globals.get('scores');
    const buffers = this.audioBufferLoader.data;
    const clientIndex = this.checkin.state.get('index');
    const period = 60 / bpm;
    const syncTime = this.sync.getSyncTime();

    for (let name in scores) {
      const score = scores[name];
      const buffer = buffers[name];
      const activeStep = clientIndex % score.length;
      const engine = new StepEngine(this.audioContext, period, buffer, activeStep);
      engine.score = scores[name];
      engine.connect(audioBus.input);

      const nextStepTime = Math.floor(syncTime / period) * period + period;
      scheduler.add(engine, nextStepTime);

      this.engines[name] = engine;
    }

        // wait for state updates
    this.globals.subscribe(updates => {
      for (let name in updates) {
        switch (name) {
          case 'scores':
            const scores = updates['scores'];

            for (let name in scores) {
              this.engines[name].score = scores[name];
            }
            break;
          case 'volume':
            audioBus.volume = updates['volume'];
            break;
        }
      }

      this.renderApp();
    });

    this.renderApp();
  }

  renderApp() {
    const scores = this.globals.get('scores');

    render(html`
      <div class="screen" style="box-sizing: border-box; padding: 20px">
        <h1 class="title">index: ${this.checkin.state.get('index')}</h1>
        <div>
          <h2>scores</h2>
          ${Object.keys(scores).map(name => {
            const score = scores[name];

            return html`
              <div>
                <label style="display: inline-block; width: 50px">${name}</label>
                ${score.map((value, index) => {
                  return html`
                    <input
                      type="checkbox"
                      ?checked="${value === 1}"
                      @click=${e => this.listeners.toggleStep(name, index)}
                    />
                  `
                })}
              </div>
            `
          })}
        </div>
      </div>
    `, this.$container);
  }
}

export default PlayerExperience;
