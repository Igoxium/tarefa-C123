leftWristX = 0
rightWristX = 0
difference = 0

function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw(){
    background('green');    
    document.getElementById("font_size").innerHTML = "tamanho da fonte será = " + difference +"px";
    textSize(difference);
    fill('blue');
    stroke('#F90093');
    text("João", 50, 400);

}

function modelLoaded(){
    console.log('PoseNet Is Initialied');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    console.log("leftWristX = " + leftWristX +" rightWristX = " + rightWristX);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}