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
            gameBoard.boardState[position] = gameBoard.activePlayer.token;
            //swap active player
            let temp = gameBoard.activePlayer;
            gameBoard.activePlayer = gameBoard.inactivePlayer
            gameBoard.inactivePlayer = temp;
        }
        else{
            console.log(
                `Position already occupied, placement failed.\n${gameBoard.activePlayer.name} is still up, playing with "${gameBoard.activePlayer.token}".`
            );
        }
    }

    return {gameBoard, printBoardState, placeToken}
}