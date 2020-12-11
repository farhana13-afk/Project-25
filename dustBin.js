class DustBin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=350;
		this.dustbinHeight=175;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        this.image = loadImage("pictures/dustbingreen.png");
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;
            var xBody = this.x; 
            var yBody = this.y
	
		/*	rectMode(CENTER)
			//strokeWeight(4);
		
			fill(255)
			stroke(255)
            rect(posRight.x,posRight.y,this.wallThickness, this.dustbinHeight);
			

	
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			fill(255)
            rect(posLeft.x,posLeft.y,this.wallThickness, this.dustbinHeight); 

	
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			fill(255)
            rect(posBottom.x,posBottom.y,this.dustbinWidth, this.wallThickness);
    */
            imageMode(CENTER)
            image(this.image,xBody, yBody-90, this.dustbinWidth+10, this.dustbinHeight+10);
	}

}