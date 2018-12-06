/************************************************
 * Application:  directDeposit.js
 * File:  app/models/directDeposit.js
 * Author: Jose
 * Purpose:
 *	To define the direct deposit schema for mongodb
 *
 * Licensing Information
 ***********************************************/

const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
	CCV: {type: String, required:true},
	cardNumber: {type: String, required:true},
  issuer: {type: String, required: true},
	cardNumber: {type: String, required: true},
  routingNumber: {type: String, required: true},
	bankName: {type: String, required: true},
});

module.exports = mongodb.resource ('directDeposit', schema);
