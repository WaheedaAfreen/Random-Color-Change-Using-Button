console.log('js')

var btn = document.getElementById("button");
var Div = document.getElementById("mainDiv");

function onBtnClick() {
  Div.style.backgroundColor =
    "rgb(" + Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + ")"

}
btn.style.background =" rgb(122, 166, 185)"

btn.addEventListener('click', onBtnClick)

