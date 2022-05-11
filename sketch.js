var database;
var form,
  game,
  player,
  playerCount = 0;
 
var gameState = 0;
var bgImg;
var bike1,bike2,bike3,bike4,bikes=[];
var trackImg,bike1img,bike2img,bike3img,bike4img;

function preload() {
  bgimg = loadImage("images/background1.png");
  bike1img = loadImage("images/bike1.png");
  bike2img =loadImage("images/bike2.png");
  bike3img = loadImage("images/bike3.png");
  bike4img =loadImage("images/bike4.png");
  trackImg = loadImage("images/track.png");
}

function setup() {
 database=firebase.database();
  canvas = createCanvas(950, 470);

  game = new Game();
  game.gameState();
  game.start();
}

function draw() {
  if (gameState === 0) {
    background(bgimg);
  }
  if(playCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
}

