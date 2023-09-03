const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("monstera" , "png");
  pScope.load_image("zebrina" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 245, 198, 218);  //lets us draw the whole circle background, ignoring the boundaries


  var layer1 = new PLayer(pot);
  layer1.mode(RING);
  layer1.set_boundary(0, 400);

  var layer2 = new PLayer(monstera);
  layer2.mode(SWIRL (2));
  layer2.set_boundary(200, 700);

  var layer3 = new PLayer(zebrina);
  layer3.mode (SWIRL (3))
  layer3.set_boundary (200, 700);

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