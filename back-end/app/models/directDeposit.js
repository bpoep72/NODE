const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
	bankName: {type: String, required:true},
	accountNumber: {type: String, required:true},
    routingNumber: {type: String, required: true},
});

module.exports = mongodb.resource ('directDeposit', schema);
