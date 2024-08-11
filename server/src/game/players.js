const players = [];

function getPlayers() {
  players.sort((a, b) => {
    return b.score - a.score;
  });
  return players;
}

function resetLastPlayersResponses() {
  players.forEach(player => {
    player.lastResponse = null;
  });
}

function getLastResponseFromPlayer(playerId) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      if (player.lastResponse) {
        return player.lastResponse;
      }
    }
  });
}

function checkIfAlreadyJoined(playerId) {
  return players.some(player => player.playerId == playerId);
}

function addPlayer(player) {
  console.log("PUSHING PLAYER");
  players.push(player);
}

function removePlayer(id) {
  console.log(players);
  players.pop(player => player.id === id);
  console.log(players);
}

function getAllPlayersNames() {
  const activePlayers = players.filter(player => player.active === true);
  return activePlayers.map(player => player.name);
}

function printPlayers() {
  console.log(players);
}

function getPlayerName(playerId) {
  let playerName = "";
  players.forEach(player => {
    if (player.playerId == playerId) {
      playerName = player.name;
    }
  });
  return playerName;
}

function addScore(playerId) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.score += 1;
    }
  });
}

function getScore(playerId) {
  let score = 0;
  players.forEach(player => {
    if (player.playerId == playerId) {
      score = player.score;
    }
  });
  return score;
}

function consumeX2Power(playerId) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.x2PowersAvailable --;
    }
  });
}

function consumeGhostPower(playerId) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.ghostPowersAvailable --;
    }
  });
}

function consumeHelpPower(playerId) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.helpPowersAvailable --;
    }
  });
}

function getAvailableBonuses(playerId) {
  let x2Available = 0;
  let ghostAvailable = 0;
  let helpAvailable = 0;
  players.forEach(player => {
    if (player.playerId == playerId) {
      x2Available = player.x2PowersAvailable;
      ghostAvailable = player.ghostPowersAvailable;
      helpAvailable = player.helpPowersAvailable;
    }
  });
  return { x2AvailableBonuses: x2Available, ghostAvailableBonuses: ghostAvailable, helpAvailableBonuses: helpAvailable };
}

function addRandomPower(playerId) {
  const randomPower = Math.floor(Math.random() * 3);
  players.forEach(player => {
    if (player.playerId == playerId) {
      switch (randomPower) {
        case 0:
          player.x2PowersAvailable ++;
          break;
        case 1:
          player.ghostPowersAvailable ++;
          break;
        case 2:
          player.helpPowersAvailable ++;
          break;
      }
    }
  });
}

function updatePlayerActive(playerId, newSocketId) {
  players.forEach(player => {
    console.log(player)
    if (player.playerId == playerId) {
      player.socketId = newSocketId;
      player.active = true;
    }
  });
}

function updatePlayerLeft(socketId) {
  players.forEach(player => {
    if (player.socketId === socketId) {
      player.active = false;
    }
  });
}

function checkIfAllPlayersOffline() {
  return players.every(player => player.active === false);
}

module.exports = {
  getPlayers,
  resetLastPlayersResponses,
  getLastResponseFromPlayer,
  checkIfAlreadyJoined,
  addPlayer,
  removePlayer,
  getAllPlayersNames,
  printPlayers,
  getPlayerName,
  addScore,
  consumeX2Power,
  consumeGhostPower,
  consumeHelpPower,
  getScore,
  getAvailableBonuses,
  addRandomPower,
  updatePlayerActive,
  updatePlayerLeft,
  checkIfAllPlayersOffline
};