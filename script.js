function GameController (xPlayerName = "X-player", oPlayername = "O-player") {
    function Player(name) {
        let score = 0;
        return {name, score};
    }

    function GameBoard(activePlayer) {
        let boardState = [
            " ", " ", " ",
            " ", " ", " ",
            " ", " ", " "
        ]

        return {boardState, activePlayer}
    }

    //initialize GameController Data
    let xPlayer = Player(xPlayerName);
    let oPlayer = Player(oPlayername);
    let gameBoard = GameBoard(xPlayer);


    function printBoardState() {
        //Example printout:
        // |x| | |
        // | |o| |
        // |x| |o|
        let printOut =
            "|" + gameBoard.boardState[0] + "|" + gameBoard.boardState[1] + "|" + gameBoard.boardState[2] + "|\n" +
            "|" + gameBoard.boardState[3] + "|" + gameBoard.boardState[4] + "|" + gameBoard.boardState[5] + "|\n" +
            "|" + gameBoard.boardState[6] + "|" + gameBoard.boardState[7] + "|" + gameBoard.boardState[8] + "|";
        console.log(printOut);
    }

    return {gameBoard, printBoardState}
}