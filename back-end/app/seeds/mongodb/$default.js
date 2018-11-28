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
            _id: dab.id('6bf5aef6859eab3befe6bd45'),
            name: 'group4Node',
            email: 'client@no-reply.com',
            client_secret: 'sstssh',
            scope: ['gatekeeper.account.create'],
        }],
        accounts:
        [{
            username: 'default',
            password: 'default',
            email: 'default@no-replay.com',
            scope: ['gatekeeper.account.create'],
            enabled: true,
        }],
        user_tokens:
        [{
            client: dab.ref('native.0'),
            account: dab.ref('accounts.0'),
            refresh_token: dab.id(),
            scope: ['gatekeeper.account.create'],
        }],
        recaptcha:
        [{
            name: 'recaptcha',
            recaptcha_secret: '6LeyznsUAAAAAJcc_aicukl3prhL81vzMQoB0Gvm',
            email: 'bmpoeppel@iu.edu',
            scope: ['gatekeeper.account.create'],
            origin: 'http://localhost',
        }],
        client_tokens:
        [{
            client: dab.ref ('native.0'),
            scope: ['gatekeeper.account.create'],
        }],
    };
  }
});
      