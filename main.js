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

    return {updateBoard, returnBoard};
}())

function checkWinner(){

}

function createPlayer(name, symbol) {
    return {
        name: name,
        symbol: symbol
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
let currentPlayer = player1

cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'red';
        GameBoard.updateBoard(Number(e.target.id), currentPlayer.symbol);
        currentPlayer = checkTurn(currentPlayer)
        checkWinner();
    });
});


