let cor;
let posicaoHorizontal;
let posicaoVertical; 

function setup() {
    createCanvas(1000, 800);
    background(color(100, 200, 600));
    cor = "color(random(0, 1000), random(0, 1000), random(0,1000))";
    posicaoHorizontal = 200;
    posicaoVertical = 200;
    }

function draw() {
     fill(cor);
    circle(posicaoHorizontal, posicaoVertical, 50);
    
    if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
}
    if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
}
if(mouseY < posicaoVertical) {
    posicaoVertical--;
}

if(mouseY > posicaoVertical) {
    posicaoVertical++;
}
  
    if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255),
random(0, 100));
}
  
}
  
