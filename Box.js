class Box {
    constructor (x,y, width, height) {
        var box_options = {
            restitution : 0.8
          }
          this.width = width ;
          this.height = height ;
          this.body = Bodies.rectangle (x,y,this.width,this.height, box_options);
          World.add (myWorld, this.body);
          console.log (this.body);

    }

    display () {
        var Pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(Pos.x, Pos.y);
        angleMode (RADIANS)
        rotate(angle);
        rectMode (CENTER);
        fill("lightPink");
        rect (0, 0, this.width,this.heigh);
        pop();
    }
}