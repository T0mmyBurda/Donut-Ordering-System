let donutsInCart = 0;
let order = []

function donutSelected(type) {
    donutsInCart++;
    order.push(type);
    console.log(order);
    // document.getElementById('d' + donutsInCart).src='img/carrossel/carrossel-' + type + '.svg';
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
    // document.getElementById('d' + btn).src='img/empty.svg';

    // for(i = btn ; i < donutsInCart + 2 ; i++) {
    //     if(order[i + 1] != undefined) {
            
    //     }
    //     document.getElementById('d' + i).src='img/empty.svg';
    // }
}

function donutHover(btn) {
    // console.log(order)
    // if(btn <= donutsInCart){
    //     document.getElementById('d' + btn).src='img/xDonuts/xDonut-' + order[btn - 1] + '.svg';
    // }
    order[btn - 1] = order[btn - 1] * -1;
    displayDonuts();
    console.log(order);
}

function donutUnhover(btn) {
    // console.log(donutsInCart);
    // console.log(btn);
    // if(btn <= donutsInCart){
    //     document.getElementById('d' + btn).src='img/carrossel/carrossel-' + order[btn - 1] + '.svg';
    // }
    //when first unhover cannot be negative
    order[btn - 1] = Math.abs(order[btn - 1]);
    displayDonuts();
    console.log(order);
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
