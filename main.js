let container = document.createElement('div');
let buttomContainer = document.querySelector('.buttom-container')
let clearButtom = document.getElementById("clearButtom");
let squareChoice = document.getElementById('choiceButtom');
let eraseButtom = document.getElementById('eraseButtom');
let colorButtom = document.getElementById('rcolorButtom');
let blackButtom = document.getElementById('blackColorButtom')
let content = document.querySelector('.content');
let titulo = document.getElementById('titulo');
clearButtom.hidden = true;
eraseButtom.hidden = true;
blackButtom.hidden = true;
colorButtom.hidden = true;
container.className = "container-box";
content.insertBefore(container, buttomContainer);

//Gerar primeira tabela
function firstTable(choice){
let i =0;
let containerSize = "600px"
let squareSize = (parseInt(containerSize)-6)/choice;
content.insertBefore(container, buttomContainer);
container.style.maxHeight = `${containerSize}`;
container.style.maxWidth = `${containerSize}`;
while (i<((choice*choice))) {
    let square = document.createElement('div');
    square.style.height = `${squareSize}px`;
    square.style.minHeight = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
    square.style.minWidth = `${squareSize}px`;
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


let clear = 0;
//Botão de limpar
clearButtom.addEventListener('click', function() {
   for (let i=0; i<clear*clear; i++) {
      let divSquareColor = document.getElementById(`${i}`);
         divSquareColor.style.backgroundColor = "#fff";
   }
});

//Botão apagar
eraseButtom.addEventListener('click', function() {
   for (let i=0; i<clear*clear; i++) {
      let divSquareColor = document.getElementById(`${i}`);
      
      divSquareColor.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = `#fff`;
      })
   }});

//Botão preto
blackButtom.addEventListener('click', function() {
   for (let i=0; i<clear*clear; i++) {
      let divSquareColor = document.getElementById(`${i}`);
      
      divSquareColor.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = `#000`;
      })
   }});

//Botão colorido
colorButtom.addEventListener('click', function() {
   for (let i=0; i<clear*clear; i++) {
   let randomNumber1 = Math.floor(Math.random()*256);
   let randomNumber2 = Math.floor(Math.random()*256);
   let randomNumber3 = Math.floor(Math.random()*256);
   let randomColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`
   let divSquareColor = document.getElementById(`${i}`);
   divSquareColor.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = `${randomColor}`;
   })
    }});

//Escolha do tamanho da nova tabela
squareChoice.addEventListener('click', function(choice) {
   choice = prompt("Escolha a quantidade de quadrados por lado desejada (ex: 16 = 16x16):");
   clear = choice;
   if (choice > 100) alert("Escolha uma quantidade menor que 100!");
   else {
      return clear,
      clearButtom.hidden = false, 
      eraseButtom.hidden = false, 
      squareChoice.hidden = true,
      blackButtom.hidden = false,
      colorButtom.hidden = false,
      titulo.textContent = "Passe o mouse para colorir!",
      firstTable(choice);
   }
})



