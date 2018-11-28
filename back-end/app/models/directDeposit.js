
const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
	CCV: {type: Number, required:true},
    cardNumber: {type: Number, required:true},
    issuer: {type: String, required: true},
    routingNumber: {type: Number, required: true},
    owner: {type: String, required: true}
});

module.exports = mongodb.resource ('directDeposit', schema);