const fs = require('fs');

const playerDatabase = './src/logs/playerDatabase.json';
const questionDatabase = './src/logs/questionDatabase.json';


async function resetLog() {
  fs.writeFile(playerDatabase, JSON.stringify({}, null, 2), (err) => {
    if (err) throw err;
    console.log('playerDatabase.json has been reset!');
  });
  fs.writeFile(questionDatabase, JSON.stringify({}, null, 2), (err) => {
    if (err) throw err;
    console.log('questionDatabase.json has been reset!');
  });
}

async function writePlayersLog(gameData) {
  fs.writeFile(playerDatabase, JSON.stringify(gameData, null, 2), (err) => {
    if (err) throw err;
    console.log('Game data has been written to playerDatabase.json');
  });
}

async function writeQuestionIndexLog(currentQuestionIndex) {
  fs.writeFile(questionDatabase, JSON.stringify(currentQuestionIndex, null, 2), (err) => {
    if (err) throw err;
    console.log('Game data has been written to questionDatabase.json');
  });
}

async function readPlayersLog() {
  const data = fs.readFileSync(playerDatabase, 'utf8');
  return JSON.parse(data);
}

async function readQuestionsLog() {
  const data = fs.readFileSync(questionDatabase, 'utf8');
  return JSON.parse(data);
}

module.exports = {
  resetLog,
  writePlayersLog,
  writeQuestionIndexLog,
  readPlayersLog,
  readQuestionsLog
};
