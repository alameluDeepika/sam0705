function preload(){ } 
function setup(){ 
  var canvas=createCanvas(350,350);
canvas.center(); 
video=createCapture(VIDEO); 
  video.size(350,350); 
video.hide();

poseNet=ml5.poseNet(video,modelLoaded); 
poseNet.on('pose',gotPoses); 
} 
function modelLoaded(){ 
  console.log("model is loaded"); } 
function gotPoses(results){ 
if(results.length > 0){ 
console.log(results); } 
} 
function draw(){ } 
function take_snapshot(){ 
save("clownfilter.png"); 
}
