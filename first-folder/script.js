function on() {
  document.querySelector(".out").innerHTML = `<img src="/img/android.png">`;
}
function off() {
  document.querySelector(".out").innerHTML = ``;
}

document.querySelector(".on").onclick = on;
document.querySelector(".off").onclick = off;
