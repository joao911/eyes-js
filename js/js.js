let ball = document.getElementsByClassName("ball");
let body =document.querySelector("body");
body.onmousemove = mover;
function mover(event) {
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";
    for (var i = 0; i < 2; i++) {
        ball[i].style.left = x;
        ball[i].style.top = y;
    }
}