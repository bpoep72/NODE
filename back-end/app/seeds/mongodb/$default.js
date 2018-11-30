const { Seed } = require ('@onehilltech/blueprint-mongodb');
const dab = require ('@onehilltech/dab');

var number_of_accounts = 5;
var number_of_posts = 80; //will randomly assign owners

var maritalStatuses = ['single', 'married', 'divorced'];

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
          dab.times(number_of_accounts, function(i) {
              return {
                 username: `user${i}`,
                 password: `user${i}`,
                 email: `user${i}@email.com`,
                 scope: ['gatekeeper.account.create'],
                 enabled: true,
              };
            }),
        user_tokens:
            dab.times(number_of_accounts, function() {
              return {
                client: dab.ref('native.0'),
                account: dab.ref(dab.sample(dab.get('accounts'))),
                refresh_token: dab.id(),
                scope: ['gatekeeper.account.create'],
              };
            }),
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
        post:
          dab.times(number_of_posts, function(i) {
            return {
              content: `test post #:${i}`,
              owner: dab.ref(dab.sample(dab.get('accounts'))),
            };
          }),
        profile:
          dab.map(dab.get('accounts'), function (account, i) {
              return {
                owner: account._id,
                fname: `John${i}`,
                lname: `Doe${i}`,
                age: Math.floor(Math.random() * 115),
                ethnicity: `ethnicity${i}`,
                orientation: `orientation${i}`,
                height: Math.floor(Math.random() * 250) + "cm",
                weight: Math.floor(Math.random() * 115) + "kg",
              };
          }),
        survey:
          dab.map(dab.get('accounts'), function (account) { //map maps each account to 1 entry
            return {
              owner: account._id,
              drinker: !!Math.round(Math.random()), //!! means convert to boolean
              smoker: !!Math.round(Math.random()),  //i know js is weird
              recreationalDrugs: !!Math.round(Math.random()),
              healthyDiet: Math.floor(Math.random() * 5),
              maritalStatus: maritalStatuses[Math.floor(Math.random() * maritalStatuses.length)], //pick one at random
              children: Math.floor(Math.random() * 90),
            };
          }),
        //directDeposit:
        //  dab.map(dab.get('accounts'), function(account) {
        //    return {
        //      owner: account._id,
        //      
        //    };
        //  }),
    };
  }
});
      