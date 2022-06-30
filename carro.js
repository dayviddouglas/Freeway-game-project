// Códigos do Carro.

 // Listas 
var yCarros = [40, 100, 150, 210, 270, 318];
var velocidadeDosCarros = [2, 3, 5, 2.5, 2.7, 7];
var xCarros = [600, 600, 600, 600, 600, 600];
var larguraCarros = 35;
var alturaCarros = 35;

// Variáveis do Carro1.
//var xCarro1 = 600;
//var yCarro1 = 40;
var larguraCarro1 = 40;
var alturaCarro1 = 40;
//var velocidadeDoCarro1 = 2;

// Variáveis do Carro2.
//var xCarro2 = 600;
//var yCarro2 = 100;
var larguraCarro2 = 40;
var alturaCarro2 = 40;
//var velocidadeDoCarro2 = 3;

// Variáveis do Carro3.
//var xCarro3 = -100;
//var yCarro3 = 150;
var larguraCarro3 = 40;
var alturaCarro3 = 40;
//var velocidadeDoCarro3 = 5;



function mostraCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros, alturaCarros);
  }
  
  
  
}



function movimentaCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeDosCarros[i];
  }
  
}



function voltaCarrosParaOInico(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;  
    } 
  }
}

  function passouTodaATela(xCarro){
    return xCarro < -50;
}



