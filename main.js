//place X or O on the cells
//check the pattern for winner
//check for tie

const cells = document.querySelectorAll('.cell');

let player1 = true;

function startGame(){
    cells.forEach(cell=>{
        cell.addEventListener('click', executeGame, {once: true})
    })
}
startGame()

function executeGame(){
    this.innerText = player1 ? 'X' : 'O';
    player1 = !player1  
}