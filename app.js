var shapechanger = document.getElementById("shapechanger");


function trian() {
  shapechanger.className = "trian";
}
function squ() {
  shapechanger.className = "squ";
}

function rectan() {
  shapechanger.className = "rectan";
}

function circ() {
  shapechanger.className = "circ";
  shapechanger.style.transition = "0.5s";
}



function res() {
    shapechanger.className = "res";
}