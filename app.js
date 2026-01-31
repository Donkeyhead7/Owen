// Tennis Game Scoring
// Points: 0, 15, 30, 40, Game
// Special: Deuce (40-40), Advantage

const POINTS = ['0', '15', '30', '40'];

let player1Points = 0;
let player2Points = 0;
let gameOver = false;

function getScoreDisplay(playerPoints, opponentPoints) {
    // Handle deuce and advantage situations
    if (playerPoints >= 3 && opponentPoints >= 3) {
        if (playerPoints === opponentPoints) {
            return 'Deuce';
        } else if (playerPoints > opponentPoints) {
            return 'Adv';
        } else {
            return '';
        }
    }
    return POINTS[playerPoints];
}

function updateDisplay() {
    const score1El = document.getElementById('score1');
    const score2El = document.getElementById('score2');
    const messageEl = document.getElementById('message');

    // Check for deuce
    if (player1Points >= 3 && player2Points >= 3 && player1Points === player2Points) {
        score1El.textContent = 'Deuce';
        score2El.textContent = 'Deuce';
        messageEl.textContent = '';
        return;
    }

    score1El.textContent = getScoreDisplay(player1Points, player2Points);
    score2El.textContent = getScoreDisplay(player2Points, player1Points);
}

function checkWin(scoringPlayer) {
    const scorerPoints = scoringPlayer === 1 ? player1Points : player2Points;
    const opponentPoints = scoringPlayer === 1 ? player2Points : player1Points;

    // Need at least 4 points (past 40) and 2 point lead to win
    if (scorerPoints >= 4 && scorerPoints - opponentPoints >= 2) {
        return true;
    }
    return false;
}

function scorePoint(player) {
    if (gameOver) return;

    if (player === 1) {
        player1Points++;
    } else {
        player2Points++;
    }

    if (checkWin(player)) {
        gameOver = true;
        document.getElementById('score' + player).textContent = 'Game';
        document.getElementById('message').textContent = `Player ${player} wins the game!`;
        return;
    }

    updateDisplay();
}

function resetGame() {
    player1Points = 0;
    player2Points = 0;
    gameOver = false;
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('message').textContent = '';
}
