//place X or O on the cells
//check the pattern for winner
//check for tie
//when someone wins reset game

const cells = document.querySelectorAll('.cell');
const result = document.querySelector('.result');
const gameOver = document.querySelector('.game-over');
const resetBtn = document.querySelector('.reset')

let player1 = true;
let count=0;

function startGame(){
    cells.forEach(cell=>{
        cell.addEventListener('click', executeGame, {once: true})
    })
}
startGame()

function executeGame(){
    this.innerText = player1 ? 'X' : 'O';
    
    count++; 

    let val1 = cells[0].innerText;
    let val2 = cells[1].innerText;
    let val3 = cells[2].innerText;
    let val4 = cells[3].innerText;
    let val5 = cells[4].innerText;
    let val6 = cells[5].innerText;
    let val7 = cells[6].innerText;
    let val8 = cells[7].innerText;
    let val9 = cells[8].innerText;
   
    if (
        (val1!=='' && val1===val2 && val2===val3) ||
        (val4!=='' && val4===val5 && val5===val6) ||
        (val7!=='' && val7===val8 && val8===val9) ||
        (val1!=='' && val1===val4 && val4===val7) ||
        (val2!=='' && val2===val5 && val5===val8) ||
        (val3!=='' && val3===val6 && val6===val9) ||
        (val1!=='' && val1===val5 && val5===val9) ||
        (val3!=='' && val3===val5 && val5===val7) 
        
        ){
            gameOver.style.display='flex';
            result.innerText = player1 ? 'Player X Won' : 'Player O Won';
        return;
    }
    if(count===9){
        console.log('tie')
    }
    player1 = !player1 
}

resetBtn.addEventListener('click', resetGame)

function resetGame(){
    gameOver.style.display='none';
    cells.forEach(cell=>cell.innerText='')
    startGame()
    player1=true;
    count=0;
}