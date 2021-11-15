let donutsInCart = 0;
let order = []

function donutSelected(type) {
    donutsInCart++;
    order.push(type);
    console.log(order);
    displayDonuts();
}

function donutDeselected(btn) {
    donutsInCart--;
    console.log('H' , order);
    if((btn - 1) == donutsInCart) {
        order.pop();
    }
    else {
        order.splice(btn - 1 , 1); //need
    }
    console.log('H' , order);
    displayDonuts();
}

function donutHover(btn) {
    if(btn < donutsInCart) {
        order[btn - 1] = order[btn - 1] * -1;
        displayDonuts();
        console.log(order);
    }
}

function donutUnhover(btn) {
    if(btn < donutsInCart) {
        order[btn - 1] = Math.abs(order[btn - 1]);
        displayDonuts();
        console.log(order);
    }
}

function displayDonuts() {
    //order = [1 , 2 , 3 ,4 , 5 , 6 , 1 , 2 , 3 ,4 , 5 , 6]
    for(i = 0 ; i < 12 ; i++) {
        if(i >= order.length) {
            document.getElementById('d' + (i + 1)).src='img/empty.svg';
        }
        else if(order[i] < 0) {
            document.getElementById('d' + (i + 1)).src='img/xDonuts/xDonut-' + (order[i] * -1) + '.svg';
        }
        else {
            document.getElementById('d' + (i + 1)).src='img/carrossel/carrossel-' + order[i] + '.svg';
        }
    }
}

// $('#button1').click(function(){
//     console.log('button clicked');
//     $.ajax({url: 'test1', success:function(res){
//         console.log('server response is', res);
//     }});
// });

function placeOrder(order){
    fetch('/index/order' ,{
      method: 'post',
      headers: {'Content-Type': 'application.json'},
      body: order.toString()
    }).then(function(res) {
      if(res.status !== 200)
      console.log("Error in prof Post: " + res.status + " message: " + res.value);
      return;
    });
    console.log("Profession = " + prof);
  }
  