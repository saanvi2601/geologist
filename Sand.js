class Sand {
    constructor(x, y,r) {
      var options = {
          'restitution':1.0,
          'friction':4,
          'density':0.5
      }
      this.body = Bodies.circle(x, y, r/2, options);
      this.r = r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("red");
      stroke("orange");
      strokeWeight(4);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };