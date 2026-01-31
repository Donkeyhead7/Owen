// Tennis Game Scoring with Voice Control
// Points: 0, 15, 30, 40, Game
// Special: Deuce (40-40), Advantage

const POINTS = ['0', '15', '30', '40'];

let team1Points = 0;
let team2Points = 0;
let team1Games = 0;
let team2Games = 0;
let gameOver = false;

// Voice Recognition
let recognition = null;
let voiceActive = false;

function initVoiceRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        document.getElementById('voiceStatus').textContent = 'Voice: Not supported';
        document.getElementById('voiceBtn').disabled = true;
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript.toLowerCase().trim();
        handleVoiceCommand(command);
    };

    recognition.onend = function() {
        if (voiceActive) {
            recognition.start();
        }
    };

    recognition.onerror = function(event) {
        console.log('Voice error:', event.error);
        if (event.error === 'no-speech' && voiceActive) {
            recognition.start();
        }
    };
}

function handleVoiceCommand(command) {
    const statusEl = document.getElementById('voiceStatus');
    statusEl.textContent = 'Heard: "' + command + '"';

    if (command.includes('team 1') || command.includes('team one') || command.includes('t1')) {
        scorePoint(1);
    } else if (command.includes('team 2') || command.includes('team two') || command.includes('t2')) {
        scorePoint(2);
    } else if (command.includes('reset') || command.includes('new game')) {
        resetGame();
    } else if (command.includes('new match')) {
        resetMatch();
    }

    setTimeout(() => {
        if (voiceActive) {
            statusEl.textContent = 'Voice: Listening...';
        }
    }, 1500);
}

function toggleVoice() {
    const btn = document.getElementById('voiceBtn');
    const statusEl = document.getElementById('voiceStatus');

    if (!recognition) {
        initVoiceRecognition();
    }

    if (voiceActive) {
        voiceActive = false;
        recognition.stop();
        btn.textContent = 'Start Voice';
        btn.classList.remove('active');
        statusEl.textContent = 'Voice: Off';
    } else {
        voiceActive = true;
        recognition.start();
        btn.textContent = 'Stop Voice';
        btn.classList.add('active');
        statusEl.textContent = 'Voice: Listening...';
    }
}

function getScoreDisplay(teamPoints, opponentPoints) {
    if (teamPoints >= 3 && opponentPoints >= 3) {
        if (teamPoints === opponentPoints) {
            return 'Deuce';
        } else if (teamPoints > opponentPoints) {
            return 'Adv';
        } else {
            return '';
        }
    }
    return POINTS[teamPoints];
}

function updateDisplay() {
    const score1El = document.getElementById('score1');
    const score2El = document.getElementById('score2');
    const messageEl = document.getElementById('message');

    if (team1Points >= 3 && team2Points >= 3 && team1Points === team2Points) {
        score1El.textContent = 'Deuce';
        score2El.textContent = 'Deuce';
        messageEl.textContent = '';
        return;
    }

    score1El.textContent = getScoreDisplay(team1Points, team2Points);
    score2El.textContent = getScoreDisplay(team2Points, team1Points);
}

function updateGamesDisplay() {
    document.getElementById('games1').textContent = team1Games;
    document.getElementById('games2').textContent = team2Games;
}

function checkWin(scoringTeam) {
    const scorerPoints = scoringTeam === 1 ? team1Points : team2Points;
    const opponentPoints = scoringTeam === 1 ? team2Points : team1Points;

    if (scorerPoints >= 4 && scorerPoints - opponentPoints >= 2) {
        return true;
    }
    return false;
}

function scorePoint(team) {
    if (gameOver) return;

    if (team === 1) {
        team1Points++;
    } else {
        team2Points++;
    }

    if (checkWin(team)) {
        if (team === 1) {
            team1Games++;
        } else {
            team2Games++;
        }
        updateGamesDisplay();

        document.getElementById('score' + team).textContent = 'Game';
        document.getElementById('message').textContent = `Team ${team} wins the game!`;
        gameOver = true;
        return;
    }

    updateDisplay();
}

function resetGame() {
    team1Points = 0;
    team2Points = 0;
    gameOver = false;
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('message').textContent = '';
}

function resetMatch() {
    resetGame();
    team1Games = 0;
    team2Games = 0;
    updateGamesDisplay();
}

// Initialize voice on page load
document.addEventListener('DOMContentLoaded', initVoiceRecognition);
