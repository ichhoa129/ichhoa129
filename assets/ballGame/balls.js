
class Ball { 
  constructor(){
      this.x = width/2+15;
      this.y = height/2;
      this.speed = 5;
      this.d = 30;
  }
  move(){
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
  
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
  
    fill(this.color[0],this.color[1],this.color[2]);
    // fill(255);
    noStroke();
    ellipse(this.x,this.y,this.d,this.d);
  }
  
  update(){

    if(this.y>height-15){
        this.y=height-15;
        
    }
    if(this.y<this.d/2){
        this.y=this.d/2;
    }
    if(this.x>width-this.d/2){
      this.x = width-this.d/2;
    }
    if(this.x<this.d/2){
      this.x = this.d/2;
    }
    }
    

  }
