window.onload = init;

function init() {

    navigator.mediaDevices.getUserMedia({audio:true, video:true}).then(function (stream){
        var video = document.querySelector('#video');
        video.src = URL.createObjectURL(stream);
        video.play();
    }).catch(function(err){
        alert("something went wrong: "+err)
    });
}