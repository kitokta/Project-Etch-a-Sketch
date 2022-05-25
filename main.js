let container = document.querySelector('.container-box');

function makeSquares() {
let i =0;
 while (i<256) {
    let square = document.createElement('div');
    square.style.border = "0.1px solid #E5E8E8";
    square.style.height = "40px";
    square.style.minHeight = "40px";
    square.style.width = "40px";
    square.style.minWidth = "40px";
    square.className = "square";
    container.style.maxHeight = "646px"
    container.style.maxWidth = "646px"
    container.style.border = "3px solid #A3E4D7"
    container.appendChild(square);
    i++;
 }
}
makeSquares();

addEventListener