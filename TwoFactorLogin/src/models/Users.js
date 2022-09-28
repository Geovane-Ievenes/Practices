const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = ()=>{
    const UserSchema = new Schema({
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true
        }
    })
    
    return mongoose.model('Users', UserSchema, 'users');
}
