const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
    home: {type: String, required:true},
    city: {type: String, required: true},
    state: {type: String, required: true},
});

module.exports = mongodb.resource ('address', schema);
