const { Seed } = require ('@onehilltech/blueprint-mongodb');
const dab = require ('@onehilltech/dab');

var number_of_accounts = 5;
var number_of_posts = 80; //will randomly assign owners

var marital_statuses = ['single', 'married', 'divorced'];
var card_issuer = ['Visa', 'Discover', 'American Express', 'Mastercard'];


/* Purpose: generates a random string of numbers 0-9 of the input lenght.
 * Helpful for generating fake data in the directDeposit and address models.
 * Also I looked for a library for 5secs didn't find one, thus I made this
 * as is the js way.
 * Params:
 *  {int} length :
 *    the desired output length
 * Returns:
 *  {string} output :
 *    the generated output
 */
function random_nums_of_length(length)
{
  var output = "";
  for(var i = 0; i < length; i++)
  {
    output += Math.floor(Math.random() * 10).toString();
  }
  return output;
}

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
            dab.map(dab.get('accounts'), function(account) {
              return {
                client: dab.ref('native.0'),
                account: account._id,
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
              description: `test post descption #${i}`,
              owner: dab.ref(dab.sample(dab.get('accounts'))),
              title: `Test Post Title #${i}`,
            };
          }),
        profile:
          dab.map(dab.get('accounts'), function (account, i) {
              return {
                _id: account._id,
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
              _id: account._id,
              drinker: !!Math.round(Math.random()), //!! means convert to boolean
              smoker: !!Math.round(Math.random()),  //i know js is weird
              recreationalDrugs: !!Math.round(Math.random()),
              healthyDiet: Math.floor(Math.random() * 5),
              maritalStatus: marital_statuses[Math.floor(Math.random() * marital_statuses.length)], //pick one at random
              children: Math.floor(Math.random() * 90),
            };
          }),
        directDeposit:
          dab.map(dab.get('accounts'), function(account) {
            return {
              _id: account._id,
              CCV: random_nums_of_length(3),
              cardNumber: random_nums_of_length(16),
              routingNumber: random_nums_of_length(9),
              issuer: card_issuer[Math.floor(Math.random() * card_issuer.length)],
            };
          }),
        address:
          dab.map(dab.get('accounts'), function(account, i) {
            return {
              _id: account._id,
              home: random_nums_of_length(4) + ' street name ' + i,
              city: `city${i}`,
              state: `state${i}`,
            };
          }),
    };
  }
});
      