exports.orderInfo = function(req , res){
    console.log('backend woooo');
    //startGame.startMonth = req.body.startMonth;
    res.setHeader('Contenet-Type' , 'application/json');
    res.send(req.body);
  }