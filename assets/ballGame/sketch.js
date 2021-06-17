let ball;
let pipes =[];

var high = getCookie();
var score = 0;
var highScore;
var frame = 70;



highScore = high || 0 ;

var dishighsc = true;

let colors = [[255,178,102],[0,128,1255],[255,51,51],[255,255,0],[255,255,255]];
function setup() {
  createCanvas(600,600);
  noLoop();
  ball = new Ball();    
  let colorIndex = Math.floor(Math.random() * 5);
  ball.color = colors[colorIndex];
  pipes.push(new Pipe());
}

function draw() {
  background(20,20,20)
  if(score > highScore)
    highScore = score; 

  if(dishighsc)
    displayHighscore();
    

  for(let i=pipes.length-1;i>=0;i--){

    if(score>=30 ){
      frame =60;
      pipes[i].speed = 4;
      if(score>=50){
        ball.speed = 7;
        frame = 50;
        pipes[i].speed = 5;
      }
    }
    
    pipes[i].show();
    pipes[i].update();
    
    if(pipes[i].offScreen()){
      pipes.splice(i,1);
    }
    if(pipes[i].hits(ball)){      
      pipes=[];
      document.cookie = "highScore" + "=" + highScore;
      window.location.reload();
    }
 
   if(pipes[i].scored && (ball.x < pipes[i].x+pipes[i].pipeWidth && ball.x > pipes[i].x ))
    {
      score++;
      pipes[i].scored = false;
    }
   
  }
  
 
  ball.update();
  ball.move();
   
  if(frameCount %frame ==0){
    pipes.push(new Pipe());
  }
  fill(240);
  textSize(60);
  text(score,width/2,100);
}
function keyPressed(){
  if(key){
    dishighsc = false;
    loop();  
    
  }
   
}
function displayHighscore(){
 
  textSize(70);
  fill(150);
  text('↑',width/2-3,height/2+120);
  text('↓',width/2-3,height/2+187);
  text('→',width/2+16,height/2+156);
  text('←',width/2-56,height/2+156); 
  text('High Score: '+highScore,width/2-220,height/2-100  );
}
function getCookie(){
  var x = document.cookie;
  var newX = x.indexOf('highScore=')
  var highSC = parseInt(x.slice(newX+10,x.length));  
  return highSC;
}
