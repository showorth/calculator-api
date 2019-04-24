var express = require('express');
var app = express();



// allow CORS from dev client
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/add', function (req, res) {
    var firstNumber = req.query.firstNumber || 0;
    var secondNumber = req.query.secondNumber || 0;
    var result = Number(firstNumber) + Number(secondNumber);
    res.send({result})

})

app.get('/subtract', function (req, res) {
    var firstNumber = req.query.firstNumber || 0;
    var secondNumber = req.query.secondNumber || 0;
    var result = Number(firstNumber) - Number(secondNumber);
    res.send({result})

})

app.get('/multiply', function (req, res) {
    var firstNumber = req.query.firstNumber || 0;
    var secondNumber = req.query.secondNumber || 0;
    var result = Number(firstNumber) * Number(secondNumber);
    res.send({result})

})

app.get('/divide', function (req, res) {
    var firstNumber = req.query.firstNumber || 0;
    var secondNumber = req.query.secondNumber || 0;
    var result = Number(firstNumber) / Number(secondNumber);
    res.send({result})

})

module.exports = app;