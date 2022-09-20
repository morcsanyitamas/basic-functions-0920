function checkMainDiagonal(board, player){
    let mainDiagonal = [];

    for(let rowIndex = 0; rowIndex < board.length; rowIndex++){
        mainDiagonal.push(board[rowIndex][rowIndex]);
    }

    console.log(mainDiagonal);
    
    for(element of mainDiagonal){
        if (element !== player){
            return false;
        }
    }
    return true;

    // if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === player){
    //     return true;
    // } else {
    //     return false;
    // }

}

function checkWinningCondition(board, player){
    // sor
    // oszlop
    // mellékátló
    if(checkMainDiagonal(board, player)){
        console.log('X win!');
    }

}




function main(){
    const board = [['X', 'X', 'X'], ['O', 'X', '.'], ['.', '.', 'X']];
    const board2 = [['X', 'X', '.'], ['O', 'X', '.'], ['.', '.', '.']];
    let player = 'X';
    
    checkWinningCondition(board, player);
}

main();

module.exports = {
    checkMainDiagonal
};
