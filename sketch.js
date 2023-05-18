var pontedebambu
var galinha
var clodilde
var invisivel
var canoimg
var estrelaimg
var portalimg
var plantaimg
var hp=3
var vidaimg
var vidapretaimg
var coração1
var coração2
var coração3


function preload(){
  pontedebambu = loadImage("assets/bamboo bridge.png")
  clodilde = loadImage("assets/galinha.png")
  canoimg = loadImage("assets/cano.png")
  estrelaimg = loadImage("assets/estreconin.png")
  portalimg = loadImage("assets/portal.png")
  plantaimg = loadImage("assets/planta.png")
  vidaimg = loadImage("assets/coracão.png")
  vidapretaimg = loadImage("assets/coracão preto.png")
}
function setup(){
  createCanvas(1900,1000)
  galinha=createSprite(100,500)
  galinha.addImage(clodilde)
  invisivel=createSprite(950,725,1900,50)
  invisivel.visible=false
  coração1=createSprite(100,100);
  coração1.addImage(vidaimg)
  coração1.scale=0.6
  //coração2
  coração2=createSprite(220,100);
  coração2.addImage(vidaimg)
  coração2.scale=0.6
  //coração3
  coração3=createSprite(340,100);
  coração3.addImage(vidaimg)
  coração3.scale=0.6
}
function draw(){
  background(pontedebambu);
  canoverde()
  plantacarnivora()
  if(keyDown("w") &&galinha.y>400){
    galinha.velocityY=-20
  }
 galinha.velocityY+=0.5
 galinha.collide(invisivel)
 console.log(galinha.y)
  drawSprites();
}
function canoverde(){
  if(frameCount%150===0){
  cano = createSprite(1900, 700);
  cano.velocityX=-6
  cano.addImage(canoimg)
  cano.scale = 0.3
  }
}
function plantacarnivora(){
  if(frameCount%150===0){
  planta = createSprite(1900, 550);
  planta.velocityX=-6
  planta.addImage(plantaimg)
  planta.scale = 0.3
  }
}