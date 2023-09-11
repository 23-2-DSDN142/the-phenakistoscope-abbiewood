const SLICE_COUNT = 10;


function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  // pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("monstera", "png");
  pScope.load_image_sequence("watering", "png", 10)
  pScope.load_image("monsteraCentre", "png");

}

function setup_layers(pScope) {

  new PLayer(null, "#FDBCB2"); //lets us draw the whole circle background, ignoring the boundaries

  let plantPot = new PLayer(pot);
  plantPot.mode(RING);
  plantPot.set_boundary(0, 350);

  let can = new PLayer(watering)
  can.mode(RING)
  can.set_boundary(1000, 1000)

  let outerRing = new PLayer(outsideRing)
  outerRing.mode(RING)
  outerRing.set_boundary(980, 1000)

  let monsteraMiddle = new PLayer(monsteraCentre)
  monsteraMiddle.mode(RING)
  monsteraMiddle.set_boundary(0, 500)

  let monsteraPlant = new PLayer(monstera);
  monsteraPlant.mode(RING);
  monsteraPlant.set_boundary(0, 300);

  let water = new PLayer(waterdrops);
  water.mode(RING);
  water.set_boundary(500, 600);

  let flowerLayer = new PLayer(addingFlowers)
  flowerLayer.mode(RING);
  flowerLayer.set_boundary(0, 400)
}

function outsideRing(x, y, animation, pScope) {
  pScope.fill_background("#820e3f")

}

function monstera(x, y, animation, pScope) {
  scale(0.9);
  pScope.draw_image("monstera", x, -500 + animation.wave() * 100);
}

function pot(x, y, animation, pScope) {

  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill("#853225")
  arc(x, y, 800, 800, backgroundArcStart, backgroundArcEnd);
}

//watering can sequence
function watering(x, y, animation, pScope) {
  scale(0.8);
  pScope.draw_image_from_sequence("watering", 0, -980, animation.wave());

}
//centre element with monsteras and soil background
function monsteraCentre(x, y, animation, pScope) {
  scale(1);
  pScope.draw_image("monsteraCentre", 0, 0);

}
//water droplets coming out of watering can
function waterdrops(x, y, animation, pScope) {
  let mvmnt = 130 * animation.frame;
  let dropletSize = 25;

  noStroke();
  fill("#d1f7ff");
  push()
  rotate(13)
  ellipse(x, -600 + mvmnt, dropletSize, dropletSize);
  ellipse(x, -700 + mvmnt, dropletSize, dropletSize);
  ellipse(x, -500 + mvmnt, dropletSize, dropletSize);
  ellipse(x, -400 + mvmnt, dropletSize, dropletSize);
  pop()

}


function addingFlowers(x, y, animation, pScope) {
  scale(1 + animation.wave() * 0.5)
  drawFlower(2, -400 + animation.wave(1) * 100)

  if (animation.frame == 0) {
    scale(3)
    drawFlower(x - 50, y - 50);
  }

}

function drawFlower(x, y) {

  //parameters for flower
  //centre
  let centreX = x + 50 // flower centre
  let centreY = y + 50
  let centreSize = 30
  let centreColour = "#FDBCB2"


  //centre circle details
  let detailX = x + 53
  let detailY = y + 40
  let circleSize = 8 //small circles around perimeter of centre
  let circleDetailColour = "#DB652D"


  //main petals
  let petalSize = 35
  let mainpetalX = x + 50
  let mainpetalY = y + 50
  let mainPetalColour = "#CCDCD0"


  //outline around main petals
  let outlineSize = 40
  let outlineX = x + 50
  let outlineY = y + 50
  let outlineColour = "#821931"


  //outside extra petals
  let outsidePetalSize = 32
  let petalX = x + 32
  let petalY = y + 68
  let outsidePetalColour = "#fff3d4"

  strokeWeight(0.5); //line weight
  stroke(outlineColour); // colour of the line


  //outside petals
  fill(outsidePetalColour)
  circle(petalX, petalY - 39, outsidePetalSize) //top left
  circle(petalX + 37, petalY, outsidePetalSize) // bottom right
  circle(petalX, petalY + 1, outsidePetalSize) // bottom left
  circle(petalX + 37, petalY - 38, outsidePetalSize); //top right

  //petal outline
  fill(255)
  circle(outlineX, outlineY - 20, outlineSize)
  circle(outlineX - 20, outlineY, outlineSize)
  circle(outlineX + 20, outlineY, outlineSize)
  circle(outlineX, outlineY + 20, outlineSize);

  //main petals
  fill(mainPetalColour)
  circle(mainpetalX, mainpetalY - 20, petalSize) //top petal
  circle(mainpetalX - 20, mainpetalY, petalSize) //left petal
  circle(mainpetalX + 20, mainpetalY, petalSize) //right petal
  circle(mainpetalX, mainpetalY + 20, petalSize); //bottom petal

  //centre
  fill(centreColour); //yellow colour
  circle(centreX, centreY, centreSize); //centre


  //detail in centre of flower
  fill(circleDetailColour) // rusty yellow
  circle(detailX - 2, detailY - 4, circleSize)
  circle(detailX + 3, detailY - 3, circleSize)
  circle(detailX + 7, detailY, circleSize)
  circle(detailX + 10, detailY + 4, circleSize)
  circle(detailX + 11, detailY + 9, circleSize)
  circle(detailX + 11, detailY + 14, circleSize)
  circle(detailX + 9, detailY + 19, circleSize)
  circle(detailX + 5, detailY + 23, circleSize)
  circle(detailX, detailY + 25, circleSize)
  circle(detailX - 5, detailY + 25, circleSize)
  circle(detailX - 10, detailY + 23, circleSize)
  circle(detailX - 14, detailY + 20, circleSize)
  circle(detailX - 17, detailY + 16, circleSize)
  circle(detailX - 18, detailY + 11, circleSize)
  circle(detailX - 17, detailY + 6, circleSize)
  circle(detailX - 15, detailY + 1, circleSize)
  circle(detailX - 11, detailY - 2, circleSize)
  circle(detailX - 7, detailY - 4, circleSize)

}