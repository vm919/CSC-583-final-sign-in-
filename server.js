var express = require('express')
var bodyParser= require('body-parser')
var app = express()
var cors = require('cors');

var mongo = require('mongodb').MongoClient
var mongoose = require('mongoose');
var User = require('./src/models/User.js');

app.use(cors())
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));



var mongoDB = 'mongodb://127.0.0.1/users';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;


app.post('/register', function (request, response) {
    console.log(request.body)
    var postUser = request.body;
    var user = new User();
    user.name = postUser.name;
    user.email = postUser.email;
    user.phone = postUser.phone;
    user.company = postUser.company;
    user.officialVisit = postUser.officialVisit;
    user.escortRequired = postUser.escortRequired;
    user.escortName = postUser.escortName;
    user.save(function(err) {
        if (err)
            response.send(err);
        response.json({ message: 'User created!' });
    });

});
app.get('/getAllUsers', function (request, response) {
    User.find({}, function(err,users){
        if (err) throw err;
        else {
            var userMap = {};
            users.forEach(function(user) {
                userMap[user._id] = user;
            });
            response.send(JSON.stringify(users));
        }
    })
});
app.listen(4000, function() {
    console.log('listening on 4000')
})