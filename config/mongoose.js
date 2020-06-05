const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contact_lists_db', { useUnifiedTopology: true, useNewUrlParser: true }); //connect to the database

const db = mongoose.connection; //aquire the connection to check if it is successfull

db.on('error', console.error.bind(console, "Error connection to db")); //eror

//up and running then print this message
db.once('open', function(){ 
    console.log("Successfully connected to the database");
});

