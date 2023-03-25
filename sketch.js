// variáveis da bolinha
let xBoll = 300;
let yBoll = 200;
let diametro = 20;
let raio = diametro / 2 ;

// velocidade da bolinha
let velocidadeX = 5.6;
let velocidadeY = -5.6;
let widthDaRaquete = 10;
let heightDaRaquete = 90;

// variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

let colidiu = false;


// variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velelocidadeYOponente;
let chanceDeErrar = 0;

// placar do jogo 
let meusPontos = 0;
let pontosDoOponente = 0;

// sons do jogo
let raquetada;
let ponto;
let trilha;

//function preload(){
  //trilha = loadSaund ('trilha.mp3')
 // ponto = loadSaund ('ponto.mp3')
  //raquetada = loadSaund ('raquetada.mp3')
//}

function setup() {
  createCanvas(600, 400);
  //trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  velocidadeDaBolinha();
  colisaoDaBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  moveMyRaquete();
  moveRaqueteOponente();
  colisaoDaRaquete(xRaquete, yRaquete);
  colisaoDaRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}


function mostraBolinha(){
  circle(xBoll, yBoll, diametro);
}

function velocidadeDaBolinha(){
  xBoll += velocidadeX;
  yBoll += velocidadeY;
}

function colisaoDaBolinha(){
  if (xBoll + raio > width ||
      xBoll - raio < 0){
    velocidadeX *= -1;
  }
  
  if (yBoll + raio > height ||
      yBoll - raio < 0){
    velocidadeY *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, widthDaRaquete, heightDaRaquete);
}

function moveMyRaquete(){
  
  if (keyIsDown(UP_ARROW)){
      
      yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    
      yRaquete += 10;
  }
}

//function moveRaqueteOponente(){
  //if (keyIsDown(87)){
      
      //yRaqueteOponente -= 10;
  //}
  
  //if (keyIsDown(83)){
    
      //yRaqueteOponente += 10;
  //}
//}

function moveRaqueteOponente(){
  velocidadeYOponente = yBoll- yRaqueteOponente - widthDaRaquete / 2 - 35;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

//function colisaoDaRaquete(){
  
  //if (xBoll - raio < xRaquete + widthDaRaquete && yBoll - raio < yRaquete + heightDaRaquete && yBoll + raio > yRaquete){
    //velocidadeX *= -1;
 // }
//}

function colisaoDaRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, widthDaRaquete, heightDaRaquete, xBoll, yBoll, raio);
  if (colidiu){
    velocidadeX *= -1;
    //raquetada.play();
  }
}

function incluiPlacar(){
  textSize(18);
  textAlign(CENTER);
  stroke(255)
  
  // meu placar
  fill(color(51, 187, 255 ));
  rect(140, 10 , 40, 20);
  fill(255);
  text(meusPontos, 160, 26);
  
  // placar do oponente
  fill(color(51, 187, 255 ));
  rect(440, 10 , 40, 20);
  fill(255);
  text(pontosDoOponente, 460, 26);
}

function marcaPonto(){
  if(xBoll > 590){
    meusPontos += 1;
   // ponto.play();
  }
  if(xBoll - raio < 1){
    pontosDoOponente += 1;
    //ponto.play();
  }
}