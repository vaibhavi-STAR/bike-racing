class Game {
  constructor() {
    this.leftKeyActive = false;   
    this.blast = false;
  }
getState() {     
  var gameStateref = database.ref("gameState");  
  gameStateref.on("value", function(data) {    
    gameState = data.val();  
    }); 
    }
    
    update(state) { 
      database.ref("/").update({   
        gameState: state    
        });  
        }
        
  start() {

      
        form = new Form();      
        form.display();     
        player = new Player();     
        player.getCount();   
        bike1=createSprite(100,200);
        bike2=createSprite(250,200);
        bike3=createSprite(400,200);
        bike4=createSprite(550,200);
      
      bike1.addImage(bike1img);
      bike2.addImage(bike2img);
      bike3.addImage(bike3img);
      bike4.addImage(bike4img);
      bike1.scale=0.1;
      bike2.scale=0.1; 
      bike3.scale=0.1;
      bike4.scale=0.1;
      bikes=[bike1,bike2,bike3,bike4];
  }
play(){
  form.hide();
  background("#263238");
  image(trackimg, 0, -height * 4, width, height * 5);   
  drawSprites()
}
}
