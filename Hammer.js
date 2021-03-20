class Hammer {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':1,
    }
    this.body = Bodies.rectangle(x, y, 40, 120, options);
    this.width = 40;
    this.height = 120;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke("blue");
    strokeWeight(4);
    fill("orange");
    rect(0, 0, this.width, this.height);
    pop();
  }
};


