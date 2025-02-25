function GameController (xPlayerName = "X-player", oPlayername = "O-player") {
    function Player(name, token) {
        let score = 0;
        return {name, token, score};
    }

    function GameBoard(activePlayer, inactivePlayer) {
        let boardState = [
            " ", " ", " ",
            " ", " ", " ",
            " ", " ", " "
        ]

        return {boardState, activePlayer, inactivePlayer}
    }

    //initialize GameController Data
    let xPlayer = Player(xPlayerName, "X");
    let oPlayer = Player(oPlayername, "O");
    let gameBoard = GameBoard(xPlayer, oPlayer);

    function checkIfWinner(token, boardState) {
        if (
            //rows
            (boardState[0] == token && boardState[1] == token && boardState[2] == token)
            ||
            (boardState[3] == token && boardState[4] == token && boardState[5] == token)
            ||
            (boardState[6] == token && boardState[7] == token && boardState[8] == token)
            ||
            //columns
            (boardState[0] == token && boardState[3] == token && boardState[6] == token)
            ||
            (boardState[1] == token && boardState[4] == token && boardState[7] == token)
            ||
            (boardState[2] == token && boardState[5] == token && boardState[8] == token)
            ||
            //diagonals
            (boardState[0] == token && boardState[4] == token && boardState[8] == token)
            ||
            (boardState[6] == token && boardState[4] == token && boardState[2] == token)
        ) {
            return true;
        }
        else {
            return false;
        }
    }

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

    function placeToken(position = 0) {
        //if space is open
        if (gameBoard.boardState[position] == " ") {
            //place token
            gameBoard.boardState[position] = gameBoard.activetoken;
            //swap active player
            let temp = gameBoard.activePlayer;
            gameBoard.activePlayer = gameBoard.inactivePlayer
            gameBoard.inactivePlayer = temp;

            console.log(
                `Placement Successful`
            );
        }
        else{
            console.log(
                `Placement Failed: Position already occupied.`
            );
        }

        //Display state of game
        console.log(`${gameBoard.activename} is up, playing with "${gameBoard.activetoken}"`);
        this.printBoardState();
    }

    return {gameBoard, printBoardState, placeToken, checkIfWinner}
}