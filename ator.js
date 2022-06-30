

// Códigos do Ator.

// Variáveis do  Ator.
var xAtor = 87;
var yAtor = 366;
var larguraAtor = 30;
var alturaAtor = 30;

// Variáveis para movimentar o Ator.
var cima = 38;
var baixo = 40;

// Variável de colisão.
var colidiu = false;

// Variável de pontos.
var meusPontos = 0;

function mostraAtor(){
  image(ator1, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor(){
  if(keyIsDown(baixo)){
    if(podeSeMover()){   
      
       yAtor += 3;
      
       }
  }
  if(keyIsDown(cima)){
     yAtor -= 3;
  }
  
}

function colisaoVacaComCarros(){
  
    for(let i = 0; i < imagemCarros.length; i++){
      colidiu = collideRectCircle(xCarros[i], yCarros[i], larguraCarros, alturaCarros, xAtor, yAtor, 15);
      
      if(colidiu){
        voltaAtorParaPosicaoInicial();
        
       if(reduzirPontuacao()){
         meusPontos -= 1;
       }
        
        somDeColisao.play();
        
      }
    }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}
  
function mostrarPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 215, 0));
  text(meusPontos, 100, 27);
}

function marcaPontos(){
  
  if(yAtor < 15){
    meusPontos++;
    somDePontuacao.play();
    voltaAtorParaPosicaoInicial();
  }
  
}

function reduzirPontuacao(){
  return meusPontos > 0;
    
}

function podeSeMover(){
  return yAtor < 366
}