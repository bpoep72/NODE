/************************************************
 * Application:  NOD
 * File:  app/app.js
 * Author:
 * Creation Date: 01 Nov 2018
 * Feature: [Feature number and title]
 * Purpose: Application load script
 * Modification History:
 * - 01 Nov 2018 (bwp) - Initial build (no features)
 *
 * Licensing Information
 ***********************************************/

import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
