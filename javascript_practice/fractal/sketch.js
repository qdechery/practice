var cnv;
var tree = [];
var leaves = [];

var counter = 0;

function setup() {
  cnv = createCanvas(800, 800);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  //slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height-200);
  var core = new Branch(a, b);
  tree[0] = core;
}
 
function mousePressed() {
  for (var i = tree.length-1;i>=0;i--){
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }  
    tree[i].finished = true;
  }
  counter++;

  if (counter>=5){
    for(var i=0;i<tree.length;i++){
      if(!tree[i].finished){
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(51);
  //core.show();
  //angle = slider.value();
  
  for (var i = 0; i < tree.length; i++){
    tree[i].show();
    // tree[i].jitter();
  }

  for (var i = 0; i < leaves.length; i++){
    noStroke();
    fill(255, 0, 100,100)
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].y += random(0,2)
  }

}

// function branch(len) {
//   strokeWeight(5);
//   line(0, 0, 0, -len);
//   translate(0, -len);
//   if (len > 4) {
//     push();
//     rotate(angle);
//     branch(len * 0.67);
//     pop();
//     push();
//     rotate(-angle);
//     branch(len * 0.67);
//     pop();
//   }

//   //line(0, 0, 0, -len * 0.67);
// }