let donutsInCart = 0;
let order = []

function donutSelected(type) {
    donutsInCart++;
    order.push(type);
    console.log(order);
    document.getElementById('d' + donutsInCart).src='img/carrossel/carrossel-' + type + '.svg';
}

function donutDeselected(btn) {
    donutsInCart--;
    console.log('H' , order);
    order.pop(btn); //somthing wrong here
    console.log('H' , order);
    document.getElementById('d' + btn).src='img/empty.svg';
}

function donutHover(btn) {
    console.log(order)
    if(btn <= donutsInCart){
        document.getElementById('d' + btn).src='img/xDonuts/xDonut-' + order[btn - 1] + '.svg';
    }
}

function donutUnhover(btn) {
    console.log(donutsInCart);
    console.log(btn);
    if(btn <= donutsInCart){
        document.getElementById('d' + btn).src='img/carrossel/carrossel-' + order[btn - 1] + '.svg';
    }
}
