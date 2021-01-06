class Paper{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r);
        pop();
      }
    }