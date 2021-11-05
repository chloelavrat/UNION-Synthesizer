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
      toggleStep: (scoreName, index) => {
        //console.log(scoreName, index);
        const scores = this.globals.get('scores');
        const score  = scores[scoreName];
        score[index]= 1 - score[index];

        this.globals.set({'scores': scores});
      },
    };

    const scheduler = new masters.Scheduler(() => this.sync.getSyncTime(), {
      currentTimeToAudioTimeFunction: syncTime => {
        return this.sync.getLocalTime(syncTime);
      },
    });

    // init engines according to score
    const bpm = this.globals.get('bpm');
    const scores = this.globals.get('scores');
    const buffers = this.audioBufferLoader.data;
    const period = 60 / bpm;

    const syncTime = this.sync.getSyncTime();
    const nextStepTime = Math.floor(syncTime/period)*period + period;

    for (let name in scores){
      const score = scores[name];
      const buffer = buffers[name];
      const activeStep = this.checkin.state.get('index')%score.length;
      const engine = new StepEngine(this.audioContext, period, buffer, activeStep);
      engine.connect(this.audioContext.destination);
      engine.score = score;

      scheduler.add(engine, nextStepTime);

      this.engines[name]=engine;
    };

    // wait for state updates
    this.globals.subscribe(updates => {
      for(let name in updates){
        switch (name) {
          case 'scores':
          const scores = updates['scores']
            for(let instr in scores){
              this.engines[instr].score=scores[instr]
            }
            break;
          default:

        }
      }

      this.renderApp();
    });

    this.renderApp();
  }

  renderApp() {
    const scores = this.globals.get('scores');
    const clientIndex = this.checkin.state.get('index');

    render(html`
      <div class="screen" style="box-sizing: border-box; padding: 20px">
        <h1 class="title">index: ${clientIndex}</h1>

        <!-- display score and bind events -->
        ${Object.keys(scores).map(name=>{
          const score = scores[name];

          return html`
            <div>
              <label style="display:inline-block; width: 50px;">
                ${name}
              </label>
              ${score.map((value, index)=> {
                return html`
                  <input
                    type="checkbox"
                    .checked="${value === 1}"
                    @click="${e => this.listeners.toggleStep(name, index)}"
                  />
                `;
              })}
            </div>
          `;
        })}
      </div>
    `, this.$container);
  }
}

export default PlayerExperience;
