/************************************************
 * Application:  address.js
 * File:  app/models/address
 * Author: Jose
 * Purpose: To define the address schema
 *
 * Licensing Information
 ***********************************************/

const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
    home: {type: String, required:true},
    city: {type: String, required: true},
    state: {type: String, required: true},
});

module.exports = mongodb.resource ('address', schema);
