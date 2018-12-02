const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
	drinker: {type: Boolean},
	smoker: {type: Boolean},
	recreationalDrugs: {type: Boolean},
	healthyDiet: {type: Number},
	maritalStatus: {type: String},
	children: {type: Number},
    educationalLevel: {type: String},
    owner: {type: String, required: true}
});

module.exports = mongodb.resource ('survey', schema);
