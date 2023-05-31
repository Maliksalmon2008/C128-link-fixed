rightwrist_x = 0;
rightwrist_y = 0;
leftwrist_y = 0;
leftwrist_x = 0;
score_leftwrist_y = 0;
score_rightwrist_x = 0;

function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
video.size(350,350);
video.hide();
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on("pose",getposes)
    }

    function modelloaded(){
        console.log("Model has loaded");
    }

    function getposes(Results){
        console.log(Results);
        rightwrist_x =  Results[0].pose.rightWrist.x;
       rightwrist_y =  Results[0].pose.rightWrist.y;
     
       leftwrist_x =  Results[0].pose.leftWrist.x;
       leftwrist_y =  Results[0].pose.leftWrist.y;
       score_leftwrist_y = Results[0].pose.keypoints[9].score;
       score_rightwrist_x = Results[0].pose.keypoints[10].score;
     }
     

    function draw(){
        image(video,0,0,350,350);
       
    }
