class Bottle{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:1,
            density:0.8
        }
        this.image = loadImage("images/bottle.png");
        this.body = Bodies.rectangle(x,y,70,90,options);
        this.width = 70;
        this.height = 90;
        World.add(world,this.body);
    }
    display(){
        var p = this.body.position;
        push();
         imageMode(CENTER);
        translate(p.x,p.y);
        rotate(this.body.angle);
       
        image(this.image,0,0,this.width+10,this.height+10);
        pop();
    }
}