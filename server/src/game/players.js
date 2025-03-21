let players = [];

function getPlayers() {
  players.sort((a, b) => {
    return b.score - a.score;
  });
  const playersCopy = [...players];
  return playersCopy;
}

function getActivePlayers() {
  return getPlayers().filter(player => player.active === true);
}

function setPlayers(playersData) {
  players = playersData;
}

function resetLastPlayersAnswers() {
  players.forEach(player => {
    player.answer = null;
    player.hasUsedHelp = false;
    player.hasUsedX2 = false;
    player.hasUsedGhost = false;
  });
}

function setLastAnswerFromPlayer(playerId, answer) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.answer = answer;
    }
  });
}

function getLastResponseFromPlayer(playerId) {
  for (let player of players) {
    if (player.playerId == playerId) {
      if (player.answer) {
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

function resetPlayersWon() {
  players.forEach(player => {
    player.hasWon = false;
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
  players = [];
}

function consumeX2Power(playerId) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.x2PowersAvailable --;
      player.hasUsedX2 = true;
    }
  });
}

function consumeGhostPower(playerId) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.ghostPowersAvailable --;
      player.hasUsedGhost = true;
    }
  });
}

function consumeHelpPower(playerId) {
  players.forEach(player => {
    if (player.playerId == playerId) {
      player.helpPowersAvailable --;
      player.hasUsedHelp = true;
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
  var powerIndex = -1;
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
              powerIndex = 2;
            }
            break;
          case 1:
            if (player.ghostPowersAvailable < 4) {
              player.ghostPowersAvailable ++;
              hasGivenPower = true;
              powerIndex = 0;
            }
            break;
          case 2:
            if (player.helpPowersAvailable < 4) {
              player.helpPowersAvailable ++;
              hasGivenPower = true;
              powerIndex = 1;
            }
            break;
        }
      }
    }
  });
  return powerIndex;
}

function updatePlayerActive(playerId, newSocketId) {
  players.forEach(player => {
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

function getAnswersStatus() {
  const activePlayersCount = players.filter(player => player.active === true).length;
  const answersCount = players.filter(player => {player.active === true && player.answer != null && player.answer != ""}).length;
  return {
    activePlayersCount,
    answersCount
  };
}




module.exports = {
  getPlayers,
  getActivePlayers,
  setPlayers,
  resetLastPlayersAnswers,
  setLastAnswerFromPlayer,
  getLastResponseFromPlayer,
  checkIfAlreadyJoined,
  addPlayer,
  removePlayer,
  getAllPlayersNames,
  printPlayers,
  getPlayerName,
  addScore,
  resetPlayersWon,
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
  getClassification,
  getAnswersStatus
};