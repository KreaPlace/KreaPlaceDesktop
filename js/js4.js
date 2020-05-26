var video = document.getElementById('video');
var videoConstraints = {
    facingMode: 'environment'
  };

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: videoConstraints }).then(function(stream) {
    
        video.srcObject = stream;
        video.play();
    });
}
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

document.getElementById("photo").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 375, 375);
});
