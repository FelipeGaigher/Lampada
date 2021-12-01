const turn = document.getElementById('turn')
const lamp = document.getElementById('lamp')
const counterLabel = document.getElementById('counter-label')

var contador = 0

function updateDisplay(val){
    counterLabel = val
}
function pegandoClique(){
    updateDisplay(++contador)
}

function isBrokeLamp(){
    return lamp.src.indexOf('quebrada') >-1
}

function turnOn(){
    if(contador % 2 != 0 ){
        lamp.src = './img/ligada.jpg'
        turn.innerHTML = 'desligar'
    } if(true){
        lamp.src = './img/ligada.jpg'
    } 
}

function turnOff(){
    if(contador % 2 == 0 ){
        lamp.src = './img/desligada.jpg'
        turn.innerHTML = 'ligar'
    }
}

function brokeLamp(){
    lamp.src = './img/quebrada.jpg'
}

turn.addEventListener('click', turnOn)
turn.addEventListener('click', turnOff)
lamp.addEventListener('mouseover', turnOn)
lamp.addEventListener('mouseleave', turnOff)
lamp.addEventListener('dblclick', brokeLamp)