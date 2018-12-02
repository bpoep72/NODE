const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
    dateMade: {type: String, required: true, default: Date.now },
    content: {type: String, required: true },
    owner: {type: String, required: true },
});

module.exports = mongodb.resource ('post', schema);