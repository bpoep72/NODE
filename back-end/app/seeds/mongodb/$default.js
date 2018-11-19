const { Seed } = require ('@onehilltech/blueprint-mongodb');
const dab = require ('@onehilltech/dab');

/**
 * @class
 */
module.exports = Seed.extend ({
  model () {
    return {
        native:
        [{
            name: 'group4Node',
            email: 'client@gatekeeper.com',
            client_secret: 'sstssh'
        }],
        recaptcha:
        [{
            name: 'recaptcha',
            recaptcha_secret: '6LeyznsUAAAAAJcc_aicukl3prhL81vzMQoB0Gvm',
            email: 'bmpoeppel@iu.edu',
            scope: ['gatekeeper.account.create'],
            origin: 'http://localhost'
        }],
        client_tokens:
        [{
            client: dab.ref ('native.0'), scope: ['gatekeeper.account.create']
        }],   
    };
  }
});
      