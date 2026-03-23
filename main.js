const GameBoard = (function(){
    let gameBoard = ["","","","","","","","",""];

    function updateBoard(index, symbol){
        if (gameBoard[index] == ''){
            gameBoard[index] = symbol;
            console.log(gameBoard);
            return true
        }
        else{
            console.log('already chosen');
            return false
            
        }
    }

    function returnBoard(){
        return gameBoard;
    }

    function resetBoard() {
        gameBoard = ["","","","","","","","",""];
    }

    return {updateBoard, returnBoard, resetBoard};
}())

function checkWinner(){
   const board = GameBoard.returnBoard();

    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    for (let combo of winCombos) {
        const [a, b, c] = combo;

        if (board[a] === board[b] && board[b] === board[c] && board[a] !== ""){
            console.log(`${board[a]} wins!`);
            return true
        }
    }

    if (!board.includes("")) {
        console.log("Tie game");
        return true
    }

    return null;
}

function createPlayer(name, symbol) {
    return {
        name: name,
        symbol: symbol,
    };
}

function checkTurn(currentPlayer){
    if (currentPlayer == player1){
        console.log(currentPlayer)
        return currentPlayer = player2
    }
    else{
        console.log(currentPlayer)
        return currentPlayer = player1
    }
}


const player1 = createPlayer("Player 1", "X");
const player2 = createPlayer("Player 2", "O");

const cells = document.querySelectorAll('.cell');
let currentPlayer = player1;
let gameOver = false;

cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            if (gameOver) return;
            e.target.innerHTML = `<h3> ${currentPlayer.symbol} </h3>`
            GameBoard.updateBoard(Number(e.target.id), currentPlayer.symbol);
            currentPlayer = checkTurn(currentPlayer);
            gameOver = checkWinner();
        });
    });

document.querySelector('#resetButton').addEventListener('click', (e)=>{
    cells.forEach(cell => {
        cell.textContent = '';
    })
    GameBoard.resetBoard();
    gameOver = false;
})