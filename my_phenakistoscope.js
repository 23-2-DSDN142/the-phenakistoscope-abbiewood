const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  
  pScope.load_image("monstera" , "png");
  pScope.load_image("zebrina" , "png");
  pScope.load_image_sequence("watering", "png", 10)
  pScope.load_image("monsteraCentre" , "png");

}

function setup_layers(pScope){

  new PLayer(null, "#ffdee2");  //lets us draw the whole circle background, ignoring the boundaries

  let plantPot = new PLayer(pot);
  plantPot.mode(RING);
  plantPot.set_boundary(0, 400);

  let monsteraPlant = new PLayer(monstera);
  monsteraPlant.mode(SWIRL (1));
  monsteraPlant.set_boundary(200, 700);

  let zebrinaPlant = new PLayer(zebrina);
  zebrinaPlant.mode (SWIRL (1))
  zebrinaPlant.set_boundary (200, 700);

  let can = new PLayer (watering)
  can.mode (RING)
  can.set_boundary (1000, 1000)

  // let layer5 = new PLayer (water)
  // layer5.mode (SWIRL(1))
  // layer5.set_boundary (900,1000)

  let outerRing = new PLayer (outsideRing)
  outerRing.mode (RING)
  outerRing.set_boundary (980,1000)

  // let outerPot = new PLayer (outerPotRing)
  // outerPot.mode
  // outerPot.set_boundary (500,300)

  let monsteraMiddle = new PLayer (monsteraCentre)
  monsteraMiddle.mode (RING)
  monsteraMiddle.set_boundary (0,500)

}

function outerPotRing (x,y,animation,pScope){
scale(0.5)
pScope.fill_background("#3b2219")

}
function outsideRing (x,y,animation,pScope){
  pScope.fill_background("#820e3f")

}

function monstera(x, y, animation, pScope){
  scale (0.5);
  pScope.draw_image("monstera",x,y);
  
}

function pot(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill("#853225")
  arc(x,y,600,600,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
}

function zebrina(x, y, animation, pScope){

  scale (1)
  pScope.draw_image("zebrina",x,y);

}

function watering(x,y, animation, pScope){
scale (0.8);
pScope.draw_image_from_sequence("watering",0, -980, animation.frame);

}

function water (x,y,animation, pScope){
  
  fill (255)
  circle (0, 300, 80);

}

function monsteraCentre (x,y, animation, pScope) {
scale (0.5);
pScope.draw_image("monsteraCentre",0,0);


}