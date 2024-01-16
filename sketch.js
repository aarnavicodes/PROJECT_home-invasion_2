var floor_1, floor_2, floor_3;
var soldier1, soldier2, soldier3;
var soldier1_img, soldier2_img, soldier3_img;
var gameState = 0;
var homeScreen, levelScreen, level1_img;
var level;


function preload(){
    floor_1 = loadImage("assets/ground floor.jpg");
    floor_2 = loadImage("assets/first-floor.jpg");
    floor_3 = loadImage("assets/master-bedroom.jpg");
    soldier1_img = loadImage("assets/soldier with gun.png");
    soldier2_img = loadImage("assets/top-view_holding-gun.jpg");
    soldier3_img = loadImage("assets/top-view_holding-knife.jpg");
    homeScreen = loadImage("assets/home-screen.jpg");
    levelScreen = loadImage("assets/game-levels.jpg");
    level1_img = loadImage("assets/game-levels_1.png");

}

function setup(){
    createCanvas(850, 750);
}

function draw(){
    if(gameState == 2){
        soldier1 = createSprite(520, 600);
        soldier1.addImage("soldier1", soldier1_img);
        soldier1.scale = 0.4;
        background(floor_1);
        if(keyDown("LEFT_ARROW")){
            soldier1.x -= 3;
        }
        if(keyDown("RIGHT_ARROW")){
            soldier1.x += 3;
        }
        if(keyDown("UP_ARROW")){
            soldier1.y -= 3;
        }
        if(keyDown("DOWN_ARROW")){
            soldier1.y += 3;
        }
    }



    if(gameState == 0){
        background(homeScreen);
        textSize(30);
        textStyle("bold");
        fill("white");
        text("Home Invasion", 320, 40);
        text("PLAY", 388, 400);
        
    }
    else if(gameState == 1){
        background(level1_img);
        textSize(30);
        textStyle("bold");
        fill("darkred");
        text("LEVEL 1", 50, 100);
        fill("orange");
        text("LEVEL 2", 265, 100);
        fill("brown");
        text("LEVEL 3", 475, 100);
        fill("lightgreen");
        text("LEVEL 4", 680, 100);
    }

    if(level == 2){
        background(floor_2);
    }
    else if(level == 3){
        background(floor_3);
    }
    drawSprites();
}

function mousePressed(){
    if(gameState == 0){
        gameState = 1;
        level = 0;

    }
    else if(gameState == 1){
        gameState = 2;
    }
    else if(gameState == 2){
        level   = 1;
    }
    else if(gameState == 3){
        level = 2;
    }

}