class Paper {
    constructor(x,y,radius){
   var p_options={
       isStatic:false,
       'restitution':0.8,
       'friction':0.5,
       'density':1.2
   }
this.body = Bodies.circle(x,y,radius, p_options);
this.r = radius;
this.image = loadImage("pictures/paper2.png");
World.add(world, this.body);
    }
display(){
    var pos = this.body.position
    push ();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image,0,0, this.r);
    pop (); 
} 
}
