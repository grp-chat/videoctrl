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

sock.on('jumpVideo', () => {
    myvideo[0].currentTime = 66;
    myvideo[0].play();
});


