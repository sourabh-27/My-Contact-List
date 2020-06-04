const express = require('express');
const path = require('path');

const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
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
        phone: "01984902"
    }, 
    {
        name:"Tony Stark",
        phone:"23456789"
    },
    {
        name:"Prem",
        phone:"797410354"
    }
];

app.get('/', function(req, res){
    // res.send("<h1>Cool, it is running. Is it really?</h1>");
    return res.render('home', { 
        title: "I am groot",
        contacts_list: contactList
    });
});

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Practice"
    });
});

app.post('/create-contact', function(req, res){
    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    });

    return res.redirect('back')
});

// where is app.listen  ??
 app.listen(port,function(err){
     if(err){
         console.log(err);
     }
     console.log("Server is running",port)
 })