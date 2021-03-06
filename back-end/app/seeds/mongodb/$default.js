
/************************************************
 * Application:  $default.js
 * File:  /app/seeds/mongodb/$default.js
 * Author: Bryce Poeppel
 * Creation Date: yyyy-mmm-dd, dd mmm yyyy
 * Feature: Dummy Data generation
 * Purpose:
 *     To generate dummy data for display and use on the front
 *      end of the application.
 * Related files:
 *    /app/configs/mongodb.js - where the connections string to the server is
 *    /models/* - where the models are defined
 * Dependency:
 *    @onehilltech/blueprint-mongodb
 *    @onehilltech/dab
 *    faker
 * Licensing Information
 ***********************************************/

const { Seed } = require ('@onehilltech/blueprint-mongodb');
const dab = require ('@onehilltech/dab');
var faker = require('faker');

var number_of_accounts = 5; //default number of accounts
var number_of_posts = 80; /* number of posts to make, randomly assigned to accounts */

/* START ARRAYS FOR GENERATION */
var marital_statuses = ['Single', 'Married', 'Divorced'];
var card_issuers = ['Visa', 'Discover', 'American Express', 'Mastercard'];
var payment_types = ['Non Disclosed', 'Per Visit', 'Per Completion', 'Per Hour', 'Non Paid'];
var bank_names = ['Fifth Third', 'Chase', 'PNC', 'Bank of America', 'KeyBank'];
var drinks = ['0', '1-2', '3-6', '7+'];

var post_descriptions = [`This pilot project evaluates the effectiveness of a participatory music program for Veterans cared for in the Domiciliary Care for Homeless Veterans (DCHV) Program (Indianapolis, IN) in terms of improving quality of life. A secondary goal of this study is to evaluate the effect of the participatory music program on community reintegration and healthcare utilization.`,
                        `Prolonged alcohol use results in drinking despite resultant problems and adverse consequences. The investigators propose to test a laboratory model of human seeking despite aversion to use as an early marker of disease onset, and as a tool for study of its neural functional substrates, and identification of effective treatments.`,
                        `The purpose of this study is to prospectively follow a cohort of traumatically injured adolescents to identify patient-reported factors for sustained prescription opioid use, including chronic pain and mental health conditions by longitudinally surveying injured adolescents; and assess clinical, behavioral, and social predictors of prescription opioid misuse and nonmedical opioid use.`,
                        `The investigators propose a randomized snack study in normal to overweight adults that will test whether the consumption of different afternoon snacks will have different effects on appetite, mood, blood sugar control, and food intake.`,
                        `To decrease emotional self-awareness deficits and improve emotional self-regulation, particularly anxiety, anger, depression, and positive affect, through the treatment of alexithymia.`,
                        `Chronic pain is now widely understood to be due to central sensitization, which leads to exaggerated pain perception. There is early evidence that ActiPatch can help mitigate the sensitization of the trigeminovascular pain pathway, so this study is being conducted to determine the efficacy of ActiPatch in preventing chronic, episodic migraines.`,
                        `DDM is a study designed to Test the efficacy of personalized music therapy in reducing delirium incidence and severity among patients admitted to the Intensive Care Unit.`,
                        ];

var post_titles = [`Participatory Music Program for Homeless Veterans`,
                   `Human Alcohol Seeking Despite Aversion`,
                   `Opioid Use After Traumatic Injury in Adolescents`,
                   `The Benefits of Consuming Hummus as an Afternoon Snack`,
                   `Training to Reconnect With Emotional Awareness Therapy (TREAT)`,
                   `Migraine Prevention Using ActiPatch (PSWT)`,
                   `Decreasing Delirium Through Music (DDM)`,
                  ];

/* END OF ARRAYS FOR GENERATION */

/************************************************
 * Function:  random_nums_of_length
 * Purpose: generate a string of random numbers of the given length
 * Input Parameter(s):
 *  - length - The length of the desired output
 * Return / Output Parameter(s):
 *  - output - A String of random numbers
 ***********************************************/
function random_nums_of_length(length)
{
  var output = "";
  for(var i = 0; i < length; i++)
  {
    output += Math.floor(Math.random() * 10).toString();
  }
  return output;
}

/************************************************
 * Function:  random_date
 * Purpose: generate a random date for the endDate field
            of the post model.
 * Input Parameter(s):
 *
 * Return / Output Parameter(s):
 *  - output - An ISO date string
 ***********************************************/
function random_date()
{
  var output = new Date();
  output.setYear(2018 + Math.floor(Math.random() * 3));
  output.setDate(Math.floor(Math.random() * 28));
  output.setMonth(Math.floor(Math.random() * 12));
  return output.toISOString();
}

/**
 * @class
 */
module.exports = Seed.extend ({
  model () {
    return {
        //default token generator client
        native:
        [{
            _id: dab.id('6bf5aef6859eab3befe6bd45'),
            name: 'group4Node',
            email: 'client@no-reply.com',
            client_secret: 'sstssh',
            scope: ['gatekeeper.account.create'],
        }],
        //the default accounts
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
        //defines how access tokens should look
        user_tokens:
            dab.map(dab.get('accounts'), function(account) {
              return {
                client: dab.ref('native.0'),
                account: account._id,
                refresh_token: dab.id(),
                scope: ['gatekeeper.account.create'],
              };
            }),
        //for google recaptcha (not implemented)
        recaptcha:
        [{
            name: 'recaptcha',
            recaptcha_secret: '6LeyznsUAAAAAJcc_aicukl3prhL81vzMQoB0Gvm',
            email: 'bmpoeppel@iu.edu',
            scope: ['gatekeeper.account.create'],
            origin: 'http://localhost',
        }],
        //needed for token generator
        client_tokens:
        [{
            client: dab.ref ('native.0'),
            scope: ['gatekeeper.account.create'],
        }],
        post:
          //generate number_of_posts random posts and assign them owners randomly
          dab.times(number_of_posts, function() {
            //the post that this db entry will use
            post_number = Math.floor(Math.random() * post_descriptions.length);
            //the string describing the type of payment
            var payment = payment_types[Math.floor(Math.random() * payment_types.length)];
            var pay_amount;
            if(payment === "Non Paid" || payment === "Non Disclosed")
            {
                pay_amount = 0;
            }
            else
            {
              pay_amount = Math.floor(Math.random() * 40);
            }
            return {
              description: post_descriptions[post_number],
              owner: dab.ref(dab.sample(dab.get('accounts'))),
              title: post_titles[post_number],
              payType: payment,
              payRate: pay_amount,
              rating: Math.floor(Math.random() * 5),
              endDate: random_date(),
            };
          }),
        profile:
          //for each account map a random profile document
          dab.map(dab.get('accounts'), function (account, i) {
              return {
                _id: account._id,
                fname: faker.fake("{{name.firstName}}"),
                lname: faker.fake("{{name.lastName}}"),
                age: Math.floor(Math.random() * 115),
                ethnicity: `ethnicity${i}`,
                orientation: `orientation${i}`,
                height: 32 + Math.floor(Math.random() * 68) + " in",
                weight: 40 + Math.floor(Math.random() * 210) + " lbs",
              };
          }),
        survey:
          //for each account map a random survey document
          dab.map(dab.get('accounts'), function (account) { //map maps each account to 1 entry
            return {
              _id: account._id,
              drinks: drinks[Math.floor(Math.random() * drinks.length)], //!! means convert to boolean
              smoker: !!Math.round(Math.random()),  //i know js is weird
              recreationalDrugs: !!Math.round(Math.random()),
              healthyDiet: Math.floor(Math.random() * 5),
              maritalStatus: marital_statuses[Math.floor(Math.random() * marital_statuses.length)], //pick one at random
              children: Math.floor(Math.random() * 16),
            };
          }),
        directDeposit:
        //for each account map a random direct deposit document
          dab.map(dab.get('accounts'), function(account) {
            return {
              _id: account._id,
              CCV: random_nums_of_length(3),
              accountNumber: random_nums_of_length(10),
              routingNumber: random_nums_of_length(9),
              cardNumber: random_nums_of_length(16),
              issuer: card_issuers[Math.floor(Math.random() * card_issuers.length)],
              bankName: bank_names[Math.floor(Math.random() * bank_names.length)],
            };
          }),
        //for each account map a random address document
        address:
          dab.map(dab.get('accounts'), function(account, i) {
            return {
              _id: account._id,
              home: random_nums_of_length(4) + faker.fake(" {{address.streetName}} {{address.streetSuffix}}"),
              city: faker.fake("{{address.city}}"),
              state: faker.fake("{{address.state}}"),
            };
          }),
    };
  }
});
