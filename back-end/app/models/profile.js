const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;

const schema = new Schema ({
    fname: {type: String, required:true},
    lname: {type: String, required: true},
    email: {type: String, required: true}
});

module.exports = mongodb.resource ('profile', schema);