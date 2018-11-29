const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
    dateMade: {type: String, required: true },
    content: {type: String, required: true },
});

module.exports = mongodb.resource ('post', schema);