const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
    email: {type: String, required:true},
    password: {type: String, required: true}
});

module.exports = mongodb.resource ('user', schema);