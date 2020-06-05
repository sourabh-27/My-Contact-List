const moongoose = require('mongoose');

//schema tell you the skeleton 
const contactSchema = new moongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

const Contact = moongoose.model('Contact', contactSchema);
module.exports = Contact; 