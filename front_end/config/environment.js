'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'groupapp',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true

        // This must be enabled for account adapter to work.
        'ds-improved-ajax': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    gatekeeper: {
      baseUrl: 'localhost:5000/',

      tokeOptions: {
        client_id: 'group4Node',
        client_secret: 'sstssh'
      }
    },
    
    'ember-cli-google': {
        recaptcha: {
          siteKey: '6LeyznsUAAAAAKAF-CJ-nswi_0338P2dPsmULUdz'
        }
    },
    
    contentSecurityPolicyHeader: 'Content-Security-Policy',

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
