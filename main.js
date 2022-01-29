leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
InnumberlleftwristY = 0;
volume = 0;
scoreleftwrist = 0;
song="";
function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(700, 300);
    video=createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}
function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftwrist);
        leftwristX = results[0]. pose.leftWrist.x;
        leftwristY = results[0]. pose.leftWrist.y;
        console.log(" leftwristX = " + leftwristX + " leftwristY = " + leftwristY);
        rightwristX = results[0]. pose.rightWrist.x;
        rightwristY = results[0]. pose.rightWrist.y;
        console.log(" rightwristX = " + rightwristX + " rightwristY = " + leftwristY);
    }
}
function modelLoaded()
{
    console.log("posenet is initilized");
}
function draw()
{
    image(video, 0,0,600,500);
    fill("420CF8");
    stroke("3F16C7");
    if (scoreleftwrist > 0.2)
    {
    circle(leftwristX, leftwristY, 20);
    InnumberlleftwristY = Number(leftwristY);
    remove_decimal = floor(InnumberlleftwristY);
    volume = remove_decimal/500;
    document.getElementById("volume").innerHTML = "volume is"+volume;
    song.setVolume(volume);
}
}
function play1()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}