const sock = io();


const myvideo = document.getElementsByTagName('video')


const button1 = document.createElement("button");
document.body.appendChild(button1)
button1.addEventListener("click", (e)=> {
    e.preventDefault;
    myvideo[0].currentTime = 66;
    myvideo[0].play();
}, false);


