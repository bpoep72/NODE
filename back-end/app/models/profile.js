/************************************************
 * Application:  profile.js
 * File:  app/models/profile.js
 * Author: Jose
 * Purpose: To define the profile schema
 *
 * Licensing Information
 ***********************************************/

const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {refersTo}} = Schema;

const schema = new Schema ({
	fname: {type: String, required:true},
	lname: {type: String, required:true},
	age: {type: Number, required:false},
	ethnicity: {type: String, required:true},
	orientation: {type: String, required:false},
	height: {type: String, required:false},
  weight: {type: String, required:false},
});

module.exports = mongodb.resource ('profile', schema);
