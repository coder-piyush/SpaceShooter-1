var playerImg, bulletImg, galagaImg, heading, lose;
var gameState = 0;
var player, gameover, galaga, title, enemyImg, enemy;

function preload() {
  playerImg = loadImage("player.png");
  bulletImg = loadImage("bullet.png");
  galagaImg = loadImage("1.png");
  heading = loadImage("2.png");
  lose = loadImage("gameover.png");
  enemyImg = loadImage("enemy.png");
}

function setup() {
  createCanvas(800, 400);

  player = createSprite(400, 310, 20, 20);
  player.addImage(playerImg);
  player.scale = 0.5;


  gameover = createSprite(400, 200, 20, 20);
  gameover.addImage(lose);
  gameover.visible = false;

  galaga = createSprite(400, 120, 20, 20);
  galaga.addImage(galagaImg);
  galaga.scale = 0.5;

  title = createSprite(400, 250, 20, 20);
  title.addImage(heading);

}

function draw() {
  background(0);
  if (gameState === 0) {
    player.visible = false;
    if (keyDown("ENTER")) {
      galaga.visible = false;
      title.visible = false;
      gameState = 1;
    }
    if (gameState === 1) {
      player.visible = true;
      enemyfunc();
      if (keyDown("left")) {
        player.x = player.x + 10;
        console.log("Working");
      }
      
    }
  }

  drawSprites();
}

function enemyfunc() {
  if (frameCount % 100 == 0) {
    var enemy = createSprite(random(50, 750), -20, 20, 20);
    enemy.addImage(enemyImg);
    enemy.scale = 0.5;
    enemy.velocityY = 3;
    enemy.lifetime = 200;
    // enemyGroup.add(enemy);
  }
}

function bullets() {
  var bullet = createSprite(player.x, player.y - 20);
  bullet.addImage(bulletImg);
  bullet.setVelocity(0, -5);
  // bulletGroup.add(bullet);
  bullet.lifetime = 200;
}

function shootbullet(enemy) {
  var bullets = createSprite(enemy.x, enemy.y, 10, 10);
  bullets.velocityY = 5;
  bullets.addImage(bulletImg);
  // enemybullet.add(bullets);
}