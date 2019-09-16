let container = document.querySelector("#container");
let userInput = prompt("What size should your grid have?", 16);
let size = parseInt(userInput);
let refreshButton = document.getElementById("gridButton");

//let blackButton = document.getElementById("blackButton");
   


function createDivs(size){
    container.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + size + ', 1fr)';
    
    
    for (let i = 1; i <= size*size; i++) {   
        const newDiv = document.createElement("div");
        newDiv.className = "square";
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', turnBlack);
    }
    
   
    }

    function turnBlack(e) {
        e.target.classList.add('black') ;
    }



createDivs(size);

let refreshPage = function(){
  location.reload()};

refreshButton.addEventListener('click', refreshPage);


// change colors of squares from black to random

let rainbowButton = document.getElementById("colorButton");
let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';



rainbowButton.addEventListener('click', makeRainbow);
let squares = document.querySelectorAll(".square");

function makeRainbow () {
    
    
    squares.forEach(cell => {
                cell.addEventListener('mouseover', (e) => {
                    let option = "0123456789ABCDEF";
                    let col = ""
                    for(let i = 0; i < 6; i++){
                        col += option[Math.floor(Math.random() * 16)]
                    }
                    let color = "#";
                    let value = color + col;
                    e.target.style.backgroundColor = value;
                });
            });
        }

blackButton.addEventListener('click', getBlack);

function getBlack () {
    squares.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "black";
        });
    });
}







