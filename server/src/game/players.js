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

function setLastResponseFromPlayer(playerId, response) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.lastResponse = response;
      console.log("SETTING LAST RESPONSE");
      console.log(player.lastResponse);
    }
  });
}

function getLastResponseFromPlayer(playerId) {
  console.log(players);
  for (let player of players) {
    if (player.playerId == playerId) {
      console.log("GETTING LAST RESPONSE");
      console.log(player.lastResponse);
      if (player.lastResponse) {
        console.log("RETURNING LAST RESPONSE: " + player.lastResponse);
        return player.lastResponse;
      }
    }
  }
  return undefined;
}

function checkIfAlreadyJoined(playerId) {
  return players.some(player => player.playerId == playerId);
}

function addPlayer(player) {
  console.log("PUSHING PLAYER");
  players.push(player);
}

function removePlayer(id) {
  players.pop(player => player.id === id);
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

function resetPoints() {
  players.forEach(player => {
    player.score = 0;
  });
}

function resetPlayers() {
  players.forEach(player => {
    if (player.x2PowersAvailable > 0) {
      player.x2PowersAvailable = 0;
    }
    if (player.ghostPowersAvailable > 0) {
      player.ghostPowersAvailable = 0;
    }
    if (player.helpPowersAvailable > 0) {
      player.helpPowersAvailable = 0;
    }
    if (player.active === false) {
      removePlayer(player.playerId);
    }
    resetPoints();
  });
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

function getClassification(prevClassification) {

  console.log("classification");
  console.log(prevClassification)
  console.log(getPlayers());


  let players = getPlayers();
  if (prevClassification) {
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < prevClassification.length; j++) {
        if (players[i].playerId == prevClassification[j].playerId) {
          if (i == j) {
            players[i].isMovedUp = false;
            players[i].isMovedDown = false;
          } else if (i < j) {
            players[i].isMovedUp = true;
          } else if (i > j) {
            players[i].isMovedDown = true;
          }
        }
      }
    }
  }
  return players;
}


module.exports = {
  getPlayers,
  resetLastPlayersResponses,
  setLastResponseFromPlayer,
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
  resetPoints,
  resetPlayers,
  getAvailableBonuses,
  addRandomPower,
  updatePlayerActive,
  updatePlayerLeft,
  checkIfAllPlayersOffline,
  getClassification
};