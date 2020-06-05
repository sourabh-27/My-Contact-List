const express = require('express');
const path = require('path');

const port = 8000;


const db = require('./config/mongoose');
const Contact = require('./models/contact')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('assets'));

//Middleware 1
// app.use(function(req, res, next){
//     console.log("Middleware 1 called");
//     next();
// });

//Miidleware 2
// app.use(function(req, res, next){
//     console.log("Middleware 2 called");
//     next();
// });

var contactList = [
    {
        name: "Sourabh",
        phone: "9889840494"
    }, 
    {
        name:"Tony",
        phone:"7942456678"
    },
    {
        name:"Prem",
        phone:"7974103549"
    }
];

app.get('/', function(req, res){
    // res.send("<h1>Cool, it is running. Is it really?</h1>");

    Contact.find({}, function(err, contacts){
        if(err){
            console.log("Error in fetching contacts from db");
            return;
        }
        return res.render('home', { 
            title: "I am groot",
            contacts_list: contacts
        });
    });
});

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Practice"
    });
});

app.post('/create-contact', function(req, res){
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){
            console.log("Error in creating a contact");
            return;
        }
        console.log('*******', newContact);
        return res.redirect('back');
    });
    
});

//for deleting a contact get the query from url which is requested and find the index and delete the contact
app.get('/delete-contact/', function(req, res){
    console.log(req.query);
    let id = req.query.id;
    // console.log("phone", phone);
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error in deleting an object from database");
            return;
        }

        return res.redirect('back');
    });

    // console.log("size", contactList.length);
});

// where is app.listen  ??
 app.listen(port,function(err){
     if(err){
         console.log(err);
     }
     console.log("Server is running",port)
 })