const cellElements = document.querySelectorAll('[data-cell]');

const board=document.querySelector('#board');

const winningMessageElement = document.querySelector('#WinningMessage');

const winningMessageTextElement = document.querySelector('[data-winning-message-text]');

const restartButton = document.querySelector('#restartBtn');

const x_class ='x';

const circle_class = 'circle';

const winning_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let circleTurn

    cellElements.forEach(cell=>{
        cell.addEventListener('click', handleClick, {once : true})

    })


function handleClick(e){
    const cell = e.target;
    const currentClass = circleTurn ? circle_class : x_class;
    placeMark(cell, currentClass);
    swapTurns()
    setBoardHoverClass()
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass(){
    board.classList.remove(x_class)
    board.classList.remove(circle_class)
    if(circleTurn){
        board.classList.add(circle_class)
        }
        else{
            board.classList.add(x_class);
        }

}

