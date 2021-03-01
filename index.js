window.onload = () => {
    document.querySelector('#tipo-izquierda, #tipo-derecha').innerHTML = randomSign();
    document.querySelector('#number').innerHTML = randomNumber();
};

function randomNumber() {
    let number = ['A', '2', '3', '4','5', '6', '7', '8','9', '10', 'J', 'Q','K'];    
    let randomNumber = Math.floor(Math.random()*number.length);
    return number[randomNumber];
}

function randomSign(){
    let sign = ['&#x2660;','&#x2663;','&#x2665;','&#x2666;'];
    let randomSign = Math.floor(Math.random()*sign.length);
    return sign[randomSign];
}