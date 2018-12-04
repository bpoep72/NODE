const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
    dateMade: {type: Date, required: true, default: Date.now},
    desciption: {type: String, required: true, trim: true },
    owner: { type: String, required: true, trim: true },
    title: {type: String, required: true, trim: true },
    comments: {type: String, trim: true },
    rating: {type: Number },
    endDate: {type: Date, required: true, },
    payType: {type: String, trim: true },
    payRate: {type: String, trim: true }
    
});

module.exports = mongodb.resource ('post', schema);