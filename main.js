let donutsInCart = 0;

function donutSelected(type) {
    donutsInCart++;
    // console.log('d' + donutsInCart)
    document.getElementById('d' + donutsInCart).src='img/carrossel/carrossel-' + type + '.svg';
}
