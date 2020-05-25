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

const select = document.getElementById('select');

function gotDevices(mediaDevices) {
  select.innerHTML = '';
  select.appendChild(document.createElement('option'));
  let count = 1;
  mediaDevices.forEach(mediaDevice => {
    if (mediaDevice.kind === 'videoinput') {
      const option = document.createElement('option');
      option.value = mediaDevice.deviceId;
      const label = mediaDevice.label || `Camera ${count++}`;
      const textNode = document.createTextNode(label);
      option.appendChild(textNode);
      select.appendChild(option);
    }
  });
}
navigator.mediaDevices.enumerateDevices().then(gotDevices);