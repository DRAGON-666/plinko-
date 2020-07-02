class Particle{
    constructor(x,y,r){

        var option ={
            restitution:0.4,
        }
        this.r=r;
        
        this.body=Bodies.circle(x,ythis.r,optons);
        this.color=color(random(0,255),random(0,255) ,random(0,255));
        world.add(world.this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        Push ();
        translate(pos.x,posy);
        rotate (angle);

        noStroke();
        Fill (this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop ()
    } 

    
}