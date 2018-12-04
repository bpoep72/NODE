const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
	CCV: {type: String, required:true},
	cardNumber: {type: String, required:true},
    issuer: {type: String, required: true},
    routingNumber: {type: String, required: true},
});

module.exports = mongodb.resource ('directDeposit', schema);
