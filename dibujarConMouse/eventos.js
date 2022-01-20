var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var color = document.getElementById("color");
var tamano = document.getElementById("tamano");
var borrador = document.getElementById("borrador");
var estadoMouse = 0;
var x = 0;
var y = 0;

cuadrito.addEventListener("mousedown", presionarMouse);
cuadrito.addEventListener("mouseup", soltarMouse);
cuadrito.addEventListener("mousemove", moverMouse);
    
function presionarMouse(evento){
    estadoMouse = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function moverMouse(evento){
    if(estadoMouse == 1){
        dibujarLinea(color.value, x, y, evento.layerX, evento.layerY, tamano.value, papel);
        x = evento.layerX;
        y = evento.layerY;
    }
    else{
        x = evento.layerX;
        y = evento.layerY;
    }
}

function soltarMouse(evento){
    estadoMouse = 0;
}

borrador.onclick =  borrar;

function borrar(){
    papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
}

function dibujarLinea(color ,xInicial, yInicial, xFinal, yFinal, tamano, lienzo){
    lienzo.beginPath();
    lienzo.lineWidth = tamano;
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}