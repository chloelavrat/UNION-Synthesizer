import '@babel/polyfill';
import 'source-map-support/register';

import { Server } from '@soundworks/core/server';
import getConfig from './utils/getConfig';
import path from 'path';
import serveStatic from 'serve-static';
import compile from 'template-literal';

import servicePlatformFactory from '@soundworks/service-platform/server';
import serviceSyncFactory from '@soundworks/service-sync/server';
import serviceAudioBufferLoaderFactory from '@soundworks/service-audio-buffer-loader/server';
import serviceCheckinFactory from '@soundworks/service-checkin/server';

// import services
import PlayerExperience from './PlayerExperience';

import globalsSchema from './schemas/globals';

const ENV = process.env.ENV || 'default';
const config = getConfig(ENV);

console.log(`
--------------------------------------------------------
- running "${config.app.name}" in "${ENV}" environment -
--------------------------------------------------------
`);

(async function launch() {
  try {
    const server = new Server();

    // -------------------------------------------------------------------
    // register services
    // -------------------------------------------------------------------

    server.registerService('platform', servicePlatformFactory, {}, []);
    server.registerService('sync', serviceSyncFactory, {}, ['platform']);
    server.registerService('checkin', serviceCheckinFactory, {}, []);
    server.registerService('audio-buffer-loader', serviceAudioBufferLoaderFactory, {}, []);

    // -------------------------------------------------------------------
    // launch application
    // -------------------------------------------------------------------

    await server.init(config, (clientType, config, httpRequest) => {
      return {
        clientType: clientType,
        app: {
          name: config.app.name,
          author: config.app.author,
        },
        env: {
          type: config.env.type,
          websockets: config.env.websockets,
          assetsDomain: config.env.assetsDomain,
        }
      };
    });

    // register schemas and init shared states
    server.stateManager.registerSchema('globals', globalsSchema);
    const globals = server.stateManager.create('globals');

    // html template and static files (in most case, this should not be modified)
    server.configureHtmlTemplates({ compile }, path.join('.build', 'server', 'tmpl'))
    server.router.use(serveStatic('public'));
    server.router.use('build', serveStatic(path.join('.build', 'public')));

    const playerExperience = new PlayerExperience(server, 'player');

    await server.start();
    playerExperience.start();

  } catch (err) {
    console.error(err.stack);
  }
})();

process.on('unhandledRejection', (reason, p) => {
  console.log('> Unhandled Promise Rejection');
  console.log(reason);
});
