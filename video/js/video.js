const video = document.getElementById("video");

function play(){
    if (video.paused){
        video.play();        
    }else{
        video.pause();
    }
}

function makeBig(){
    video.width +=50; 
}

function makeSmall(){
    video.width -=50;
}


/* EVENTS */
