song1 = "";
song2 = "";
function preload(){
    song = loadSound("my_mother.mp3");
    song = loadSound("Nasheed.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose' ,getpose);
}
function draw(){
    image(video,0,0,600,500);
}