
var wall,wall2,wall3,thickness;
var bullet1,bullet2,bullet3,speed, weight;

function setup() {
  createCanvas(1600, 800);

  speed=random(223,321)
  weight=random(30,52)
  speed1=random(20,50)
  speed2=random(40,60)
  thickness=random(22,83)
  thickness1=random(30,60)
  thickness2=random(35,90)


  
    bullet1=createSprite(30, 200, 50,5);  
    bullet1.velocityX = speed;
    bullet1.shapeColor=color(255);
    
    bullet2=createSprite(30, 400, 50,5);  
    bullet2.velocityX = speed1;
    bullet2.shapeColor=color(255);
    
    
    bullet3=createSprite(30, 600, 50,5);  
    bullet3.velocityX = speed2;
    bullet3.shapeColor=color(255);
    
  	
    
    wall=createSprite(1080, 200, thickness, 150);  
	wall2=createSprite(1080, 400, thickness1, 150);  
	wall3=createSprite(1080, 600, thickness2, 150);

	wall.shapeColor=color(230,230,230);
	wall2.shapeColor="cyan";
	wall3.shapeColor="yellow";
  //wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet1, wall))
  {
  	bullet1.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }

  if(hasCollided(bullet2, wall2))
  {
  	bullet2.velocityX=0;
  	var damage=0.5 * weight * speed1* speed1/(thickness1 *thickness1 *thickness1);

  	
	if(damage>10)
	{
		wall2.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall2.shapeColor=color(0,255,0);
	}
	
  }

  if(hasCollided(bullet3, wall3))
  {
  	bullet3.velocityX=0;
  	var damage=0.5 * weight * speed2* speed2/(thickness2 *thickness2 *thickness2);

  	
	if(damage>10)
	{
		wall3.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall3.shapeColor=color(0,255,0);
	}
	
  }
  drawSprites();
 
}


function hasCollided(lbullet1, lwall)
{
	bullet1RightEdge=lbullet1.x +lbullet1.width;
	wallLeftEdge=lwall.x;
	if (bullet1RightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
 
function hasCollided(lbullet2, lwall2)
{
	bullet2RightEdge=lbullet2.x +lbullet2.width;
	wall2LeftEdge=lwall2.x;
	if (bullet2RightEdge>=wall2LeftEdge)
	{
		return true
	}
	return false;
}

function hasCollided(lbullet3, lwall3)
{
	bullet3RightEdge=lbullet3.x +lbullet3.width;
	wall3LeftEdge=lwall3.x;
	if (bullet3RightEdge>=wall3LeftEdge)
	{
		return true
	}
	return false;
}


