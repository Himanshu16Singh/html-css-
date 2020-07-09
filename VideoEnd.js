var vid = document.querySelector('#myVideo');
vid.addEventListener('ended',playNextVideo,false);

function playNextVideo(e){
    //Whatever you want to do after the event(play another video,
    //for example),change the src attribute,of the video element,etc.
    vid.src = "http://techslides.com/demos/sample-videos/small.mp4";
}