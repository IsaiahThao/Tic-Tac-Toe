const GameBoard = (function(){
    let gameBoard = ["","","","","","","","",""];

    function updateBoard(index, symbol){
        if (gameBoard[index] == ''){
            gameBoard[index] = symbol;
            console.log(gameBoard);
            return true
        }
        else{
            console.log(gameBoard)
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
    let winnerText = document.querySelector('#winner-text')
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    for (let combo of winCombos) {
        const [a, b, c] = combo;

        if (board[a] === board[b] && board[b] === board[c] && board[a] !== ""){
            winnerText.innerHTML=`${currentPlayer.name} wins!`;
            currentPlayer.wins++;
            updateWinDisplay();
            return true
        }
    }

    if (!board.includes("")) {
        winnerText.innerHTML=`Tie!`
        return true
    }

    return null;
}

function updateWinDisplay() {
    document.querySelector('#player1').textContent = `${player1.name} wins: ${player1.wins}`;
    document.querySelector('#player2').textContent = `${player2.name} wins: ${player2.wins}`;
}

function createPlayer(name, symbol) {
    return {
        name: name,
        symbol: symbol,
        wins: 0
    };
}

function checkTurn(currentPlayer){
    if (currentPlayer == player1){
        return currentPlayer = player2
    }
    else{
        return currentPlayer = player1
    }
}

const player1 = createPlayer("Player 1", "X");
const player2 = createPlayer("Player 2", "O");

updateWinDisplay();

const cells = document.querySelectorAll('.cell');
let currentPlayer = player1;
let gameOver = false;

cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            if (gameOver){
                return;}

            if (GameBoard.updateBoard(Number(e.target.id), currentPlayer.symbol))
                {e.target.innerHTML = `<h3> ${currentPlayer.symbol} </h3>`};
            gameOver = checkWinner();
            currentPlayer = checkTurn(currentPlayer);
        });
    });

document.querySelector('#resetButton').addEventListener('click', (e)=>{
    cells.forEach(cell => {
        cell.textContent = '';
    })
    document.querySelector('#winner-text').textContent=''
    GameBoard.resetBoard();
    gameOver = false;
})