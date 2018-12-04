const mongodb = require ('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {referesTo}} = Schema;

const schema = new Schema ({
    dateMade: {type: Date, required: true, default: Date.now},
    description: {type: String, required: true, trim: true },
    owner: { type: String, required: true, trim: true },
    title: {type: String, required: true, trim: true },
    comments: {type: Object },
    rating: {type: Number },
    //endDate should be required in the future just can't make it in the seed atm
    endDate: {type: Date, },
    payType: {type: String, trim: true },
    payRate: {type: String, trim: true }
    
});

module.exports = mongodb.resource ('post', schema);