const sock = io();


const myvideo = document.getElementsByTagName('video')


const button1 = document.createElement("button");
document.body.appendChild(button1);
button1.style.width = "100px";
button1.style.height = "50px";
button1.style.display = "block";
button1.style.margin = "auto";

button1.addEventListener("click", (e)=> {
    e.preventDefault;
    sock.emit('btnpress')
}, false);

function toggleVideo() {
    var x = document.getElementById("video1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function setupVideo () {
    // get video
      var video = document.getElementById('video1')
      // Play the video, this is optional
    //   video.play();
      // Add a listener to this video, so that when the video ends, the video is "hidden".
      video.addEventListener('ended', function() {
      // hide video
        video.style.display = "none";
      })
    }

    setupVideo();

sock.on('jumpVideo', () => {
    myvideo[0].currentTime = 66;
    myvideo[0].play();
});


