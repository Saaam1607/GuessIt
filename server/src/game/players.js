const players = [];

function checkIfAlreadyJoined(playerId) {
  return players.some(player => player.playerId == playerId);
}

function addPlayer(player) {
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
  checkIfAlreadyJoined,
  addPlayer,
  removePlayer,
  getAllPlayersNames,
  printPlayers,
  getPlayerName,
  updatePlayerActive,
  updatePlayerLeft,
  checkIfAllPlayersOffline
};