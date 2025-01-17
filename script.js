function GameController (xPlayerName = "X-player", oPlayername = "O-player") {
    function Player(name) {
        let score = 0;
        return {name, score};
    }

    function GameBoard(activePlayer) {
        let boardState = [
            null, null, null,
            null, null, null,
            null, null, null
        ]

        let activePlayer = activePlayer;

        return {boardState, activePlayer}
    }

    let xPlayer = Player(xPlayerName);
    let oPlayer = Player(oPlayername);
    let gameBoard = GameBoard(xPlayer);

}