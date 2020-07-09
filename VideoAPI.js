var vid ;

window.onload = function(){     //window.onload = init; function init(){}
    console.log("Page loaded, DOM is ready!");

    vid = document.querySelector("#myPlayer");

    vid.ontimeupdate = displayTimeWhileVideoIsPlaying;

/*
    var video = document.createElement('video');
    video.src = 'http://html5doctor.com/demos/video-canvas-magic/video.mp4';
    video.controls = true;
    document.body.appendChild(video);
*/

};

function playVideo(){
    vid.play();
    console.log(vid.duration);
}

function pauseVideo(){
    vid.pause();
}

function rewindVideo(){
    vid.currentTime = 0;
}

function displayTimeWhileVideoIsPlaying(){
    console.log(vid.currentTime);
    // vid.timeupdate();
    // if(vid.currentTime > 5){
        // vid.pause();
    // }
}