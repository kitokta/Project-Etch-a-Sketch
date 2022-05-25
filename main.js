let container = document.querySelector('.container-box');
let clearButtom = document.getElementById("clearButtom");
let squareChoice = document.getElementById('choiceButtom');
let content = document.querySelector('.content');
let para = document.createElement('h1');
let titulo = document.getElementById('titulo');
clearButtom.hidden = true;
para.textContent = "Passe o mouse para colorir!";

//Gerar primeira tabela
function firstTable(choice){
let i =0;
maxLenght = choice*40+6;
container.style.maxHeight = `${maxLenght}px`;
container.style.maxWidth = `${maxLenght}px`;

while (i<((choice*choice))) {
    let square = document.createElement('div');
    square.style.border = "0.1px solid #E5E8E8";
    square.style.height = "40px";
    square.style.minHeight = "40px";
    square.style.width = "40px";
    square.style.minWidth = "40px";
    square.className = "square";
    square.id = i;
    container.style.border = "3px solid #F5AEE8";
    container.appendChild(square);
    i++;
 }
 //Cores RGB aleatoria on mouse hover
 for (let i=0; i<choice*choice; i++) {
   let randomNumber1 = Math.floor(Math.random()*256);
   let randomNumber2 = Math.floor(Math.random()*256);
   let randomNumber3 = Math.floor(Math.random()*256);
   let randomColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`
   let divSquareColor = document.getElementById(`${i}`);

   divSquareColor.addEventListener('mouseover', function (event) {
   event.target.style.backgroundColor = `${randomColor}`;
   })
}}


 
//Botão de limpar
clearButtom.addEventListener('click', function() {
   for (let i=0; i<256; i++) {
      let divSquareColor = document.getElementById(`${i}`);
         divSquareColor.style.backgroundColor = "#F4F6F6";
   }
});
   

//Escolha do tamanho da nova tabela
squareChoice.addEventListener('click', function(choice) {
   choice = prompt("Escolha a quantidade de quadrados por lado desejada:");
   if (choice > 32) alert("Escolha uma quantidade menor (até 32)!");
   else {
      return firstTable(choice), 
      clearButtom.hidden = false, 
      content.removeChild(titulo),
      content.insertBefore(para, content.firstChild);
   }
})



