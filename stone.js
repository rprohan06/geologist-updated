class Stone
{
    constructor(x,y,h,angle){
var options={
    friction:0.9,
    density:17,restitution:0.8
}
   this.body=Bodies.rectangle(x,y,20,h,options);
   this.w=20;
   this.h=h;
   World.add(world,this.body);
Matter .Body.setAngle(this.body,angle)
    }

    display()
    {
        var angle=this.body.angle;
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("red");
        fill ("black")
        strokeWeight(4);
        rect(0,0,this.w,this.h);
        pop();
    }
}