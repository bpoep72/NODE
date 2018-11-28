/*const mongodb = require ('@onehilltech/blueprint-mongodb');
const {schema} = mongodb;
const {Types: {refersTo}} = schema;

const profile = new schema ({
	fname: {type: String, required:true},
	lname: {type: String, required:true},
	age: {type: Number, required:false},
	ethnicity: {type: String, required:true},
	orientation: {type: String, required:false},
	height: {type: String, required:false},
    weight: {type: String, required:false},
    owner: {type: String, required: true}
});

module.exports = mongodb.resource ('profile', schema);
*/