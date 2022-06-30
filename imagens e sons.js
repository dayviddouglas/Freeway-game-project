// Imagens e sons do Jogo.



// Usado para Criação das imagens.
var ator1;
var imagemDaEstrada;
var imagemDoCarro1;
var imagemDoCarro2;
var imagemDoCarro3;
var imagemCarros;

// Usado para Criação dos Sons.

var trilhaDoJogo;
var somDePontuacao;
var somDeColisao;

function preload(){
  ator1 = loadImage("Imagens do Jogo/ator-1.png");
  imagemDaEstrada =loadImage("Imagens do Jogo/estrada.png");
  imagemDoCarro1 = loadImage("Imagens do Jogo/carro-1.png");
  imagemDoCarro2 = loadImage("Imagens do Jogo/carro-2.png");
  imagemDoCarro3 = loadImage("Imagens do Jogo/carro-3.png");
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3 ];
  
  trilhaDoJogo = loadSound("Sons do Jogo/trilha.mp3");
  somDePontuacao = loadSound("Sons do Jogo/pontos.wav");
  somDeColisao = loadSound("Sons do Jogo/colidiu.mp3");
}

 