const GameBoard = (function(){
    let gameBoard = ["","","","","","","","",""];

    function updateBoard(index){
        gameBoard[index] = 'X';
        console.log(gameBoard);
    }

    return {updateBoard};
}())

function checkWinner(){

}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'red';
        console.log(e.target.id);
        GameBoard.updateBoard(Number(e.target.id));
        checkWinner();
    });
});

