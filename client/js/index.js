const sock = io();

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");



const myvideo = document.getElementsByTagName('video');
const jumpVideo = document.getElementById('video1');


const button1 = document.createElement("button");
document.body.appendChild(button1);
button1.style.width = "100px";
button1.style.height = "50px";
button1.style.display = "block";
button1.style.margin = "auto";
button1.style.backgroundColor = "black";
button1.style.border = "none";
// button1.style.borderColor = "black";
// button1.style.borderWidth = "0.1px";

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

if(isAndroid) {

    const img = document.getElementsByClassName("imgcenter");
    img[0].style.display = "none";
    myvideo[0].style.display = "none";

    button1.style.width = "500px";
    button1.style.height = "800px";
    button1.style.backgroundColor = "black";
    button1.style.borderStyle = "dotted";
    button1.style.borderColor = "indigo";
    button1.style.borderWidth = "0.1px";
  };

sock.on('jumpVideo', () => {

    if(isAndroid) {return};
    if(myvideo[0].currentTime === 0){alert ("AI standing by... Awaiting Game Start" ); return;};
    if(myvideo[0].paused && !myvideo[0].ended){alert ("AI standing by... Awaiting Game Start"); return};
    // if(myvideo[0].readyState < 2){return};

    myvideo[0].style.display = "none";
    myvideo[0].pause();
    
    // 
    jumpVideo.style.display = "block";
    jumpVideo.play();

    setTimeout(() => {
        myvideo[0].currentTime = 0;
        jumpVideo.style.display = "none";
        myvideo[0].style.display = "block";
    }, 4800);
    
});


