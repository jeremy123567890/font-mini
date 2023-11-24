difference = 0;
rightWristX = 0;
leftWristX =0;
function setup() {
    video = createCapture(VIDEO)
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97')
document.getElementById("font-size").innerHTML="font size of the text will be  = "+ difference+"px";
    fill('#F90093')
    text("Jeremy", 50, 400)
   textSize(difference)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    

        leftWristX = results[0].pose.leftWrist.X;
        rightWristX = results[0].pose.rightWrist.X;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + leftWristX + "rightWristX = "+ rightWristX +" difference = " + difference);
    }
}