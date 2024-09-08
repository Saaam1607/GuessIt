let players = [];

function getPlayers() {
  players.sort((a, b) => {
    return b.score - a.score;
  });
  const playersCopy = [...players];
  return playersCopy;
}

function setPlayers(playersData) {
  players = playersData;
}

function resetLastPlayersResponses() {
  players.forEach(player => {
    player.answer = null;
  });
}

function setLastResponseFromPlayer(playerId, answer) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.answer = answer;
      console.log("SETTING LAST ANSWER");
      console.log(player.answer);
    }
  });
}

function getLastResponseFromPlayer(playerId) {
  console.log(players);
  for (let player of players) {
    if (player.playerId == playerId) {
      if (player.answer) {
        console.log("RETURNING LAST RESPONSE: " + player.answer);
        return player.answer;
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

function setPlayerWon(playerId) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.hasWon = true;
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
  players.forEach(player => {
    if (player.playerId == playerId) {
      var hasGivenPower = false;

      if (player.x2PowersAvailable == 4 && player.ghostPowersAvailable == 4 && player.helpPowersAvailable == 4)
        hasGivenPower = true;

      while (!hasGivenPower) {
        const randomPower = Math.floor(Math.random() * 3);
        switch (randomPower) {
          case 0:
            if (player.x2PowersAvailable < 4) {
              player.x2PowersAvailable ++;
              hasGivenPower = true;
            }
            break;
          case 1:
            if (player.ghostPowersAvailable < 4) {
              player.ghostPowersAvailable ++;
              hasGivenPower = true;
            }
            break;
          case 2:
            if (player.helpPowersAvailable < 4) {
              player.helpPowersAvailable ++;
              hasGivenPower = true;
            }
            break;
        }
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

  players.sort((a, b) => {
    return b.score - a.score;
  });

  let tmpPlayers = players;

  if (prevClassification) {
    for (let i = 0; i < tmpPlayers.length; i++) {
      for (let j = 0; j < prevClassification.length; j++) {
        if (tmpPlayers[i].playerId == prevClassification[j].playerId) {
          if (i == j) {
            tmpPlayers[i].isMovedUp = false;
            tmpPlayers[i].isMovedDown = false;
          } else if (i < j) {
            tmpPlayers[i].isMovedUp = true;
          } else if (i > j) {
            tmpPlayers[i].isMovedDown = true;
          }
        }
      }
    }
  }
  return tmpPlayers;
}




module.exports = {
  getPlayers,
  setPlayers,
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
  setPlayerWon,
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