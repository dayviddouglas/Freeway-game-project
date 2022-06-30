





function setup() {
  createCanvas(500, 400);
  trilhaDoJogo.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarros();
  movimentaCarros();
  movimentaAtor();
  voltaCarrosParaOInico();
  colisaoVacaComCarros();
  mostrarPontos();
  marcaPontos();
  
  
}






