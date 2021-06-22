class paper{
    constructor(x,y,r){
        var options ={
            isStatic : false,
            restitution: 0.3,
            friction:0,
            density: 1.2
        }
        
        this.image = loadImage("paper.png");
        this.x = x;
        this.y = y;
        this.r = r;
        this.body=Bodies.circle(this.x, this.y, (50-20)/5, options)
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var paperpos = this.body.position;
        push();
        translate(paperpos.x, paperpos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0);
        pop();
    }
}

/*var rubberpos=this.body.position;		
push()
translate(rubberpos.x, rubberpos.y);
rectMode(CENTER)
strokeWeight(4);
stroke("black");
fill("darkblue");
//draw the ellipse here to display the rubber ball
ellipse(0,0,this.r,this.r);
pop()*/

/*class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}*/

/*class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'restitution':0.3,
		'friction':5,
		'density':1
	}
	
	this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);
			pop()
	}

}*/