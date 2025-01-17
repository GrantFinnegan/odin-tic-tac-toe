function GameController (XPlayerName = "X-player", OPlayername = "O-player") {
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
}