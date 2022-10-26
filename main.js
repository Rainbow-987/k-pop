/* 
○ Means variableName.setVolume(0.1) - Very low
○ Means variableName.setVolume(0.3) - Little low
○ Means variableName.setVolume(0.5) - Medium
○ Means variableName.setVolume(0.7) - Little high
○ Means variableName.setVolume(0.9) - High
○ Means variableName.setVolume(1) - Full volume



○ Means variableName.rate(0.5) - Very slow
○ Means variableName.rate(1) - Normal
○ Means variableName.rate(1.5) - Little fast
○ Means variableName.rate(2) - Twice as fast
○ Means variableName.rate(2.5) - Very fast







*/

var sound = "";
var left_Wrist_x = 0;

var left_Wrist_y = 0;

var right_Wrist_x = 0;
var right_Wrist_y = 0;

function preload() {
    Shut_Down = loadSound("Shut_Down.mp3");
    Dynamite = loadSound("Dynamite.mp3");
}


function setup() {
    canvas = createCanvas(350, 300);
    canvas.position(700, 200);
    background("teal");

    video = createCapture(VIDEO);
    video.hide();
    

    my_posenet = ml5.poseNet(video, model_loaded);
    my_posenet.on('pose', got_Poses);
}


function draw() {

    image(video, 0, 0, 350, 300);
    if(left_Wrist_y<150){
        Shut_Down.play();
        Dynamite.stop();
    }
    else if (right_Wrist_y<150){
        Shut_Down.stop();
        Dynamite.play();
    }


}




function model_loaded() {

    console.log("PoseNet is loaded");

}

function got_Poses(results) {
 if(results.length>0){
    console.log(results);

    left_Wrist_x = results[0].pose.leftWrist.x;
    left_Wrist_y = results[0].pose.leftWrist.y;


    right_Wrist_x = results[0].pose.rightWrist.x;
    
    right_Wrist_y = results[0].pose.rightWrist.y;
 }

}