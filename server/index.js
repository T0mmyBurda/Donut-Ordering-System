var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

//var setUp = require('./main');

app.route('/index/order')
  .post(index.order)

app.listen(3000);

















// const express = require('express');
// const app = express();
// var bodyParser = require('body-parser');

// app.use(bodyParser.json({type: 'application/json'}));

// app.use(express.static('client/public'));

// // const express = require('express');
// // var router = express.Router();


// app.get('/' , function(request , response) {
//     response.sendFile('index.html' , {root: './client'});
// }); 



// app.get('/' , (request , response) => {
//     readFile('./index.html' , 'utf-8' , (err , html) => {
//         if(err) {
//             response.status(500).send('not working, go away');
//         }

//         response.send(html);
//     })
// }); 

// app.listen(process.env.PORT || 3000 , () => console.log('app on port http://localhost:3000'));

// // function buttonAction1(res){
// //     res.send('ok');
// // }
// // router.get("/test1", function (req, res) {
// //     buttonAction1(res);
// });