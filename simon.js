const container = document.querySelector('.container')
const red = document.querySelector('.one')
const yellow = document.querySelector('.two')
const blue = document.querySelector('.three')
const green = document.querySelector('.four')
const audio1 = document.getElementById('clip1')
const audio2 = document.getElementById('clip2')
const audio3 = document.getElementById('clip3')
const audio4 = document.getElementById('clip4')
const powerButton = document.getElementById('powerMode')
const hardButton = document.getElementById('hardMode')
const counter = document.getElementById('count')
const startButton = document.getElementById('start')


let hard = 5;
let power = false;
let playerOrder = [];
let computerOrder = [];
let flash = 0;
let round = 0;
let timeout;
let intervalId;
let good = true;
let computerTurn;
let win=false;

hardButton.addEventListener('click',()=>{
    if(hardButton.checked == true){
    hard=20;
}})

red.addEventListener("click", ()=>{
    audio1.play();
    playerOrder.push(1);
    startAgain();
})

yellow.addEventListener('click',()=>{
    audio2.play();
    playerOrder.push(2);
    startAgain();
})

blue.addEventListener('click',()=>{
    audio3.play();
    playerOrder.push(3)
    startAgain();
})

green.addEventListener('click',()=>{
    audio4.play();
    playerOrder.push(4);
    startAgain();
})

powerButton.addEventListener('click', (e) =>{
    if(powerButton.checked == true){
        power=true;
        counter.innerText="-";
    }else {
        power=false;
        counter.innerText="";
    }
});

startButton.addEventListener('click', ()=>{
    if (power){
        startGame();
    }
})

function startGame(){
    clearColor();
    win=false;
    good=true;
    intervalId=0;
    playerOrder=[]
    computerOrder=[]
    flash=0;
    round=1;
    computerTurn = true;
    for(let i =0; i<20; i++){
        computerOrder.push(Math.floor(Math.random()*4)+1);
    }
    counter.innerText=round;
    intervalId=setInterval(gameTurn,800);
}

function gameTurn(){

     if(flash == round) {
        clearInterval(intervalId);
        computerTurn=false;
        playerOrder=[];
     } else  { 
    if (computerTurn){
        if(computerOrder[flash] == 1){ redFunction();}
        if(computerOrder[flash]== 2) { yellowFunction();}
        if (computerOrder[flash] == 3) { blueFunction();}
        if (computerOrder[flash] == 4) { greenFunction();}
        flash++
    } 
}
}
function startAgain() {
    if (power) {
  if (playerOrder[playerOrder.length - 1] !== computerOrder[playerOrder.length - 1])
          good = false;

  if (playerOrder.length == `${hard}` && good){
        win = true;
         winGame();
  }

  if (good == false) {
    flashColor();
    counter.innerHTML = "NO!";
   }}

  if (round == playerOrder.length && good && !win) {
    round++;
    playerOrder = [];
    computerTurn = true;
    flash = 0;
    counter.innerHTML = round;
    intervalId = setInterval(gameTurn, 800);
  } 
         
}

function redFunction(){
    audio1.play();
    red.classList.add('active');
    timeout = setTimeout(clearColor,200);
}

function yellowFunction(){
    audio2.play();
    yellow.classList.add('active2');
    timeout = setTimeout(clearColor,200);
}

function blueFunction(){
    audio3.play();
    blue.classList.add('active3');
    timeout = setTimeout(clearColor,200);
}

function greenFunction(){
    audio4.play();
    green.classList.add('active4');
    timeout = setTimeout(clearColor,200);
}

function clearColor(){
    red.classList.remove('active');
    yellow.classList.remove('active2');
    blue.classList.remove('active3');
    green.classList.remove('active4');
}

function flashColor(){
    red.classList.add('active');
    yellow.classList.add('active2');
    blue.classList.add('active3');
    green.classList.add('active4');
}

function winGame(){
    counter.innerText ="Win!!!"
    flashColor();
    clearInterval(intervalId);
}

