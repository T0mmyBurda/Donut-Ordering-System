const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({type: 'application/json'}));

app.use(express.static('client/public'));

app.get('/order', function(reqest, response){
    response.sendFile('order-page.html' , {root: './client/views'});
})

app.get('/landingPage', function(reqest, response){
    response.sendFile('order-page.html' , {root: './client/views'});
})

var order = require('./controllers/orderController.js');

app.route('/api/order')
    .post(order.orderInfo)

app.listen(3000 , () => console.log(`app listening on port ${3000}!`));  