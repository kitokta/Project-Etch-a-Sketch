let container = document.querySelector('.container-box');
let clearButtom = document.getElementById("clearButtom")

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
    square.id = i;
    container.style.maxHeight = "646px";
    container.style.maxWidth = "646px";
    container.style.border = "3px solid #F5AEE8";
    container.appendChild(square);
    i++;
 }
}
makeSquares();

for (let i=0; i<256; i++) {
   let randomNumber1 = Math.floor(Math.random()*256);
   let randomNumber2 = Math.floor(Math.random()*256);
   let randomNumber3 = Math.floor(Math.random()*256);
   let randomColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`
   let divSquareColor = document.getElementById(`${i}`);

   divSquareColor.addEventListener('mouseover', function (event) {
   event.target.style.backgroundColor = `${randomColor}`;
   })
}

clearButtom.addEventListener('click', function() {
   for (let i=0; i<256; i++) {
      let divSquareColor = document.getElementById(`${i}`);
         divSquareColor.style.backgroundColor = "#F4F6F6";
   }
});




