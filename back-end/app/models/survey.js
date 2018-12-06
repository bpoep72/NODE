const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
	drinks: {type: String},
	smoker: {type: Boolean},
	recreationalDrugs: {type: Boolean},
	healthyDiet: {type: Number},
	maritalStatus: {type: String},
	children: {type: Number},
    educationalLevel: {type: String},
});

module.exports = mongodb.resource ('survey', schema);
