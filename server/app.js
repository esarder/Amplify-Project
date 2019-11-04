
const express = require('express'); // Express web server framework
const request = require('request'); // "Request" library
const cors = require('cors');
require('dotenv').config()

const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const loginRouter = require('./routes/login')
const callbackRouter = require('./routes/callback')
const refreshRouter = require('./routes/refresh')
const metricsRouter = require('./routes/metrics')
const amplifyLoginRouter = require('./routes/amplifyLogin')
var stateKey = 'spotify_auth_state';

var app = express();
mongoose.connect('mongodb://localhost:27017/amplifyDB', {useNewUrlParser:true})

var db = mongoose.connection;
db.once('open',function(){
	console.log('connected to db')
})
app.use(express.static('./src'))
  .use(cors())
  .use(cookieParser());
  //.use(session({
  // 	secret:'test secret',
  // 	resave: true,
  // 	saveUninitialized: false
  //}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/home', function(req, res) {
  res.sendFile('views/home.html', {root: 'src'})
})

app.get('/apitest', function(req, res){
  res.sendFile('views/apitest.html', {root: 'src'})
})

app.get('/testdata', function(req, res){
  res.send({msg: 'from the server'})
})
app.get('/amplifyLogin', function(req, res){
  res.sendFile('views/login.html', {root: 'src'})
})
app.get('/register', function(req, res){
  res.sendFile('views/register.html', {root: 'src'})
})

loginRouter(app)
amplifyLoginRouter(app)
callbackRouter(app)
refreshRouter(app)
metricsRouter(app)
console.log('Listening on 3000');
console.log(process.env.REDIRECT_URI)
app.listen(3000);
