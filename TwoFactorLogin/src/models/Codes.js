const mongoose = require('mongoose');
const Types = mongoose.Types;
const Schema = mongoose.Schema;

module.exports = ()=>{
    const CodeSchema = new Schema({
        UID: {
            type: Types.ObjectId,
            required: true,
            index: {
                unique: true
            }
        },
        code: {
            type: Number,
            required: true,
            index: {
                unque: true
            }
        }
    })
    
    return mongoose.model('Codes', CodeSchema, 'codes');
}
