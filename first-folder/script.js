function on() {
  document.querySelector(".out").innerHTML = `<img src="/img/android.png">`;
}
function off() {
  document.querySelector(".out").innerHTML = ``;
}

function lightOff() {
  document.querySelector("body").style = `
        background-color: black;
      `;
}
function lightOn() {
  document.querySelector("body").style = ``;
}

document.querySelector(".on").onclick = on;
document.querySelector(".off").onclick = off;
document.querySelector(".light-off").onclick = lightOff;
document.querySelector(".light-on").onclick = lightOn;
