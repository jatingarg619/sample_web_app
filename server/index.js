var express = require('express');
var jsonfile = require('jsonfile');

var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

    next();
});

var file_1 = './db_json/cardBasic.json'
var file_2 = './db_json/cardPage.json'
var file_3 = './db_json/cardPage2.json'

var basicData = jsonfile.readFileSync(file_1)
var cardPage = jsonfile.readFileSync(file_2)
var cardPage2 = jsonfile.readFileSync(file_3)

// cards basic data

app.get('/basicData', function (req, res) {
    res.json(basicData);
    res.end();
})

// cards Page1 data

app.get('/Pagedata/:id', function(req, res){
	var requestId = req.params.id;
	let card = cardPage.cards.filter(card => {
        return card.id == requestId
    })[0]
    let index = cardPage.cards.indexOf(card)
    
	res.json(cardPage.cards[index]);

})

app.put('/updateCard/:id',function(req,res){
    var requestId = req.params.id;
    let card = cardPage.cards.filter(card => {
        return card.id == requestId
    })[0]
    let index = cardPage.cards.indexOf(card)
    cardPage.cards.splice(index,1)
    cardPage.cards.splice(index,0,req.body);
    jsonfile.writeFileSync(file_2, cardPage);

    res.json(cardPage.cards[index]);
})

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});

