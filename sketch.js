var sword, sword_image;
var alien, alien_image, alien_image2;
var fruits, fruit_image1, fruit_image2, fruit_image3, fruit_image4, fruitgroup;
var r;

function preload() {
  sword_image = loadImage("sword.png");

  alien_image = loadImage("alien1.png");
  alien_image2 = loadImage("alien2.png");

  fruit_image1 = loadImage("fruit1.png");
  fruit_image2 = loadImage("fruit2.png");
  fruit_image3 = loadImage("fruit3.png");
  fruit_image4 = loadImage("fruit4.png");
}

function setup() {
  createCanvas(1200, 800);
  sword = createSprite(width / 2, height - 35, 30, 30);
  sword.addImage(sword_image);
  sword.scale = 0.75;

  fruitgroup = new Group();
  enemygroup = new Group();
}

function draw() {
  background("Lavender");

  sword.y = World.mouseY;
  sword.x = World.mouseX;

  makefruits();

  enemies();

  drawSprites();
}

function makefruits() {
  if (World.frameCount % 80 === 0) {
    fruits = createSprite(1200, 200, 20, 20);
    fruits.scale = 0.2;

    r = Math.round(random(1, 4));
    if (r == 1) {
      fruits.addImage(fruit_image1);
    }
    if (r == 2) {
      fruits.addImage(fruit_image2);
    }
    if (r == 3) {
      fruits.addImage(fruit_image3);
    } else {
      fruits.addImage(fruit_image4);
    }

    fruits.y = Math.round(random(50, 340));

    fruits.velocityX = -7;
    fruits.setLifetime = 100;

    fruitgroup.add(fruits);
  }
}

function enemies() {
  if (World.frameCount % 160 === 0) {
    alien = createSprite(1200, 200, 20, 20);
    alien.scale = 1;

    r = Math.round(random(1, 2));
    if (r == 1) {
      alien.addImage(alien_image);
    } else {
      alien.addImage(alien_image2);
    }

    alien.y = Math.round(random(50, 340));

    alien.velocityX = -7;
    alien.setLifetime = 100;

    enemygroup.add(alien);
  }
}
