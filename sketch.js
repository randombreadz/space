var issImg, iss, spacecraft;
var spacebgImg, spacebg, spacecraft_flying;
var spacecraft1Img, spacecraft1, spacecraft2Img, spacecraft2, spacecraft3Img, spacecraft3, spacecraft4Img, spacecraft4;
var scLeft, scRight, scUp, scDown;
var hasDocked;

function preload(){  
  scLeft = loadAnimation("images/spacecraft4.png");
  scRight = loadAnimation("images/spacecraft3.png");
  scUp= loadAnimation("images/spacecraft2.png");
  scDown= loadAnimation("images/spacecraft1.png");

  issImg = loadImage("images/iss.png");

  spacebgImg = loadImage("images/spacebg.jpg");
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 60);

  iss = createSprite(200, 200, 50, 50);
  iss.addImage("issShip", issImg)
  iss.scale = 0.7

  spacecraft = createSprite(1400, 700, 50, 50);
  spacecraft.scale = 0.2

  hasDocked = createSprite(170, 210, 10, 10);
  hasDocked.visible = false;

  spacecraft.addAnimation("left", scLeft);
  spacecraft.addAnimation("right", scRight);
  spacecraft.addAnimation("up", scUp);
  spacecraft.addAnimation("down", scDown);
}

function draw() {
  background(spacebgImg);  

  if(spacecraft.isTouching(hasDocked)){
    text("Docking Successful", 700, 350)
  }

  if(keyIsDown(LEFT_ARROW)) {
    spacecraft.velocityX = -5;
    spacecraft.changeAnimation("left", scLeft)
  }

  if(keyWentUp(LEFT_ARROW)) {
    spacecraft.velocityX = 0;
    spacecraft.changeAnimation("down", scDown);
  }

  if(keyIsDown(RIGHT_ARROW)) {
    spacecraft.velocityX = +5;
    spacecraft.changeAnimation("right", scRight)
  }

  if(keyWentUp(RIGHT_ARROW)) {
    spacecraft.velocityX = 0;
    spacecraft.changeAnimation("down", scDown);
  }

  if(keyIsDown(UP_ARROW)) {
    spacecraft.velocityY = -5;
    spacecraft.changeAnimation("up", scUp)
  }

  if(keyWentUp(UP_ARROW)) {
    spacecraft.velocityY = 0;
    spacecraft.changeAnimation("down", scDown);
  }

  if(keyIsDown(DOWN_ARROW)) {
    spacecraft.velocityY = +2;
    spacecraft.changeAnimation("down", scDown)
  }

  if(keyWentUp(DOWN_ARROW)) {
    spacecraft.velocityY = 0;
    spacecraft.changeAnimation("down", scDown);
  }
  drawSprites();
}