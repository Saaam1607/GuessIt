const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const bodyParser = require("express").json;
const routes = require("./routes");
const cors = require("cors");

const playerManager = require("./game/players");
const tokenManager = require("./components/tokenManager");
const helperManager = require("./game/helperManager");
const logsManager = require("./game/logsManager");
var questionDb = require("./game/questions");
const characters = require("./game/characters");

const corsOptions = {
  origin: ["http://localhost:3000", "https://guessitclient.onrender.com"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: ["http://localhost:3000", "https://guessitclient.onrender.com"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

app.use(bodyParser());
app.use(cors(corsOptions));

app.use(routes);

let gameStarted = false;
let questionIndex = 0;
let prevClassification = null;

const maxQuestionIndex = questionDb.length - 1;
questionDb = shuffleArray(questionDb);

function getCurrentQuestionType() {
  return  questionDb[questionIndex].questionType;
}

function getCurrentQuestion() {
  const nextQuestion = questionDb[questionIndex].question;
  return nextQuestion;
}

function getCurrentImagePath() {
  const imagePath = questionDb[questionIndex].image;
  return imagePath;
}

function getCurrentMin() {
  return questionDb[questionIndex].min;
}

function getCurrentMax() {
  return questionDb[questionIndex].max;
}

function getCurrentStep() {
  return questionDb[questionIndex].step;
}

function getCurrentUnit() {
  return questionDb[questionIndex].unit;
}

function getCurrentAnswer() {
  return questionDb[questionIndex].answer;
}

function getAvailableAnswers() {
  return questionDb[questionIndex].availableAnswers;
}


function updateQuestionIndex() {
  if (questionIndex >= maxQuestionIndex) {
    questionIndex = 0;
  } else {
    questionIndex++;
  }
}

function ioEmitNextQuestion() {
  var questionType = getCurrentQuestionType();
  switch (questionType) {
    case 0:
      io.emit("nextQuestion", {questionType: questionType, question: getCurrentQuestion(), min: getCurrentMin(), max: getCurrentMax(), step: getCurrentStep(), unit: getCurrentUnit(), image: getCurrentImagePath()});
      break;
    case 1: 
      io.emit("nextQuestion", {questionType: questionType, question: getCurrentQuestion(), availableAnswers: getAvailableAnswers(), image: getCurrentImagePath()});
      break;
    default:
      break;
  }
}

function socketEmitNextQuestion(socket) {
  var questionType = getCurrentQuestionType();
  switch (questionType) {
    case 0:
      socket.emit("nextQuestion", {questionType: questionType, question: getCurrentQuestion(), min: getCurrentMin(), max: getCurrentMax(), step: getCurrentStep(), unit: getCurrentUnit(), image: getCurrentImagePath()});
      break;
    case 1: 
      socket.emit("nextQuestion", {questionType: questionType, question: getCurrentQuestion(), availableAnswers: getAvailableAnswers(), image: getCurrentImagePath()});
      break;
    default:
      break;
  }
}



io.on("connection", (socket) => {

  console.log(`User Connected: ${socket.id}`);

  socket.on("characters", (data) => {
    socket.emit("characters", { characters: characters });
  });

  /*
    on          <--- playersList
    to client   ---> playersList
  */
  socket.on("playersList", (data) => {
    socket.emit("playersList", { playersList: playerManager.getAllPlayersNames() });
  });

  /*
    on          <--- join
    if (new player)
    to client   ---> newPlayerId
    to all      ---> playersList
    if (old player)
    to all      ---> playersList
    if (gameStarted)
    to client   ---> gameStarted
  */
  socket.on("join", (data) => {

    console.log("new join request: " + data.name + " " + data.playerId + " " + socket.id);
    console.log("stampa iniziale dei players: ");
    playerManager.printPlayers();
    
    // gestione nuovo giocatore: aggiunta e invio di un nuovo token
    if (data.playerId === null || playerManager.checkIfAlreadyJoined(data.playerId) === false) { 
      console.log("nuovo giocatore")
      const newPlayerId = tokenManager.generatePlayerId();
      socket.emit("newPlayerId", { newPlayerId });

      var ghostPowersAvailable = 0;
      var helpPowersAvailable = 0;
      var x2PowersAvailable = 0;


      characters.forEach(character => {
        if (character.id == data.characterIndex) {
          ghostPowersAvailable = character.ghostPowers;
          helpPowersAvailable = character.helpPowers;
          x2PowersAvailable = character.x2Powers;
        }
      });

      playerManager.addPlayer({
        name: data.name,
        playerId: newPlayerId,
        socketId: socket.id,
        active: true,
        ghostPowersAvailable: ghostPowersAvailable,
        helpPowersAvailable: helpPowersAvailable,
        x2PowersAvailable: x2PowersAvailable,
        score: 0
      });
      io.emit("playersList", { playersList: playerManager.getAllPlayersNames() });


      //! TMP
      const obj = {
        "playersAnswersData": [
          {
            "active": true,
            "answer": "iPhone 15",
            "ghostPowersAvailable": 1,
            "hasUsedGhost": false,
            "hasUsedHelp": false,
            "hasUsedX2": false,
            "hasWon": true,
            "helpPowersAvailable": 4,
            "isMovedDown": false,
            "isMovedUp": true,
            "name": "sam",
            "playerId": 1731754747642,
            "score": 2,
            "socketId": "WqB0sMRjWAlqs68RAAAD",
            "x2PowersAvailable": 4
          },
          {
            "active": true,
            "answer": "Samsung Galaxy A14",
            "ghostPowersAvailable": 1,
            "hasUsedGhost": false,
            "hasUsedHelp": true,
            "hasUsedX2": false,
            "hasWon": false,
            "helpPowersAvailable": 4,
            "isMovedDown": true,
            "isMovedUp": false,
            "name": "luigi",
            "playerId": 1731754747642,
            "score": 3,
            "socketId": "WqB0sMRjWAlqs68RAAAD",
            "x2PowersAvailable": 4
          },
          {
            "answer": "iPhone 15",
            "isAnswer": true
          }
        ],
      }

      // console.log("REdS")
      // setTimeout(() => {
      //   io.emit("results", { playersAnswersData: obj.playersAnswersData });      
      // }, 300); 

    }

    // gestione giocatore già presente ma con una nuova connessione socket
    else {
      console.log("giocatore già presente")
      playerManager.updatePlayerActive(data.playerId, socket.id);
      io.emit("playersList", { playersList: playerManager.getAllPlayersNames() });
    }

    console.log("stampa aggiornata dei players: ");
    io.emit("answersStatus", { answersStatus: playerManager.getAnswersStatus() });
    playerManager.printPlayers();

    if (gameStarted) {
      socket.emit("gameStarted", {});
    }
  });

  /*
    on          <--- startGame
    to all      ---> gameStarted
                ---> nextQuestion
  */
  socket.on("startGame", (data) => {
    io.emit("gameStarted", {});
    ioEmitNextQuestion();
    gameStarted = true;
  });

  socket.on("addPower", () => {
    const playersData = playerManager.getPlayers();
    playersData.forEach(player => {
      const powerIndex = playerManager.addRandomPower(player.playerId);
      var bonusData = playerManager.getAvailableBonuses(player.playerId);
      bonusData.powerIndex = powerIndex;
      io.to(player.socketId).emit("bonus", bonusData);
    });
  });

  socket.on("resetPoints", () => {
    playerManager.resetPoints();
  });

  socket.on("resetPlayers", () => {
    playerManager.resetPlayers();
    questionDb = shuffleArray(questionDb);
    questionIndex = 0;
  });

  socket.on("help", (data) => {
    switch(getCurrentQuestionType()) {
      case 0:
        const {suggestedMin, suggestedMax} = helperManager.computeSuggestedMinAndManx(getCurrentAnswer(), getCurrentMin(), getCurrentMax(), getCurrentStep());
        socket.emit("minMaxSuggest", {suggestedMin: suggestedMin, suggestedMax: suggestedMax, step: getCurrentStep()} );
        break;
      case 1:
        const fakeAnswers = helperManager.getFakeAnswers(getAvailableAnswers(), getCurrentAnswer());
        socket.emit("fakeAnswersSuggest", {fakeAnswers: fakeAnswers} );
        break;
      default:
        break;
    }
  });

  socket.on("ghost", (data) => {
    const playersData = playerManager.getActivePlayers();
    socket.emit("ghostData", {playersData: playersData} );
  });

  socket.on("ghostAnswer", (data) => {
    console.log(data)
    const playerResponse = playerManager.getLastResponseFromPlayer(data.selectedPlayerId);
    console.log(playerResponse);
    console.log("response: " + playerResponse);
    if (playerResponse != undefined) {
      socket.emit("ghostAnswer", {playerResponse: playerResponse} );
    } else {
      socket.emit("ghostAnswerNotReady", {} );
    }
  });

  /*
    on          <--- newAnswer
    to all      ---> newAnswerFromPlayer
  */
  socket.on("newAnswer", (data) => {
    console.log("newAnswer from playerID: " + data.playerId);

    if (playerManager.checkIfAlreadyJoined(data.playerId)) { // player presente
      const playerName = playerManager.getPlayerName(data.playerId);
      playerManager.updatePlayerActive(data.playerId, socket.id); // non fa male anche se non serve se è già attivo
    } else { // player non presente
      socket.emit("lostPlayer");
      return;
    }

    const name = playerManager.getPlayerName(data.playerId);

    if (playerManager.getLastResponseFromPlayer(data.playerId) != undefined) {
      console.log("player already answered");
      return;
    }

    if (data.hasUsedHelp)
      playerManager.consumeHelpPower(data.playerId);

    if (data.hasUsedGhost)
      playerManager.consumeGhostPower(data.playerId);

    if (data.hasUsedX2)
      playerManager.consumeX2Power(data.playerId);

    if (getCurrentQuestionType() === 0)
      data.answer = parseInt(data.answer);

    playerManager.setLastAnswerFromPlayer(data.playerId, data.answer);

    // io.emit("answersStatus", { answersStatus: playerManager.getAnswersStatus() });
    io.emit("newAnswerFromPlayer", {name: name, answer: data.answer, playerId: data.playerId, hasUsedX2: data.hasUsedX2, hasUsedHelp: data.hasUsedHelp, hasUsedGhost: data.hasUsedGhost});
  });

  /*
    on          <--- nextQuestion
    to all      ---> nextQuestion
                ---> nextAnswer
  */
  socket.on("nextQuestion", (data) => {
    updateQuestionIndex();
    logsManager.writeQuestionIndexLog(questionIndex)
    const answer = getCurrentAnswer();
    playerManager.resetLastPlayersAnswers();
    logsManager.writePlayersLog( playerManager.getPlayers())
    io.emit("gameStarted", {});
    ioEmitNextQuestion();
    io.emit("nextAnswer", {answer: answer});
  });

  socket.on("getBonus", (data) => {
    const availableBonusesData = playerManager.getAvailableBonuses(data.playerId);
    socket.emit("bonus", availableBonusesData);
  });

  /*
    on          <--- getQuestion
    to client   ---> nextQuestion
  */
  socket.on("getQuestion", (data) => {
    const answer = getCurrentAnswer();
    socketEmitNextQuestion(socket);
    io.emit("nextAnswer", {answer: answer});
  });

  socket.on("hasAnswered", (data) => {
    const response = playerManager.getLastResponseFromPlayer(data.playerId);
    if (response != undefined)
      socket.emit("hasAnswered", { hasAnswered: true, response: response});
    else
      socket.emit("hasAnswered", { hasAnswered: false });
  });

  /*
    on          <--- results
    to all      ---> results
  */
  socket.on("results", async (data) =>  {

    const answer = getCurrentAnswer();
    var playersAnswersData = playerManager.getPlayers();

    playerManager.resetPlayersWon();

    switch (getCurrentQuestionType()) {
      
      case 0:
        let minDistance = Math.abs(playersAnswersData[0]?.answer - answer);
        let maxDistance = 0;
    
        playersAnswersData.forEach(player => {
          if (Math.abs(player.answer - answer) < minDistance) {
            minDistance = Math.abs(player.answer - answer);
          }
          if (Math.abs(player.answer - answer) > maxDistance) {
            maxDistance = Math.abs(player.answer - answer);
          }
        });
    
        playersAnswersData.forEach(player => {
          if (parseInt(parseInt(player.answer) + minDistance) === parseInt(answer) || parseInt(parseInt(player.answer) - minDistance) === parseInt(answer)) {
    
            if (data.computeScore) {
              playerManager.addScore(player.playerId);
              if (player.hasUsedX2) {
                playerManager.addScore(player.playerId);
              }
            }
            playerManager.setPlayerWon(player.playerId);
          } else {

          }
        });
        break;

      case 1:
        playersAnswersData.forEach(player => {
          if (player.answer == answer) {
            if (data.computeScore) {
              playerManager.addScore(player.playerId);
              if (player.hasUsedX2) {
                playerManager.addScore(player.playerId);
              }
            }
            playerManager.setPlayerWon(player.playerId);
          }
        });
        break;

      default:
        break;
    }

    logsManager.writePlayersLog(playersAnswersData)
      .then(() => {

        playersAnswersData.push({ answer: answer, isAnswer: true });
        playersAnswersData.sort((a, b) => {
          return b.answer - a.answer;
        });

        // const classificationData = playerManager.getClassification(prevClassification);
        // prevClassification = JSON.parse(JSON.stringify(classificationData));

        playersAnswersData = playersAnswersData.filter(player => (player.answer !== "" && player.answer !== null));
    
        console.log("Logging players answers data: ");
        console.log(playersAnswersData);
    
        // io.emit("results", { playersAnswersData: playersAnswersData, classificationData: prevClassification });
        io.emit("results", { playersAnswersData: playersAnswersData });

      })
  });

  socket.on("recoverPlayers", async () => {
    const playersData = await logsManager.readPlayersLog();
    questionIndex = await logsManager.readQuestionsLog();
    
    playersData.forEach(player => {
      player.answer = "";
    });
    playerManager.setPlayers(playersData);

  });

  /*
    on          <--- hurryUp
    to all      ---> clock
  */
  socket.on("hurryUp", (data) => {
    io.emit("clock", {});
  });

  /*
    on          <--- extremeHurryUp
    to all      ---> extremeClock
  */
  socket.on("extremeHurryUp", (data) => {
    io.emit("extremeClock", {});
  });

  socket.on("disconnect", () => {
    playerManager.updatePlayerLeft(socket.id);
    io.emit("playersList", { playersList: playerManager.getAllPlayersNames() });
    // io.emit("answersStatus", { answersStatus: playerManager.getAnswersStatus() });
    playerManager.printPlayers();
    console.log(`User Disconnected: ${socket.id}`);
    if (playerManager.checkIfAllPlayersOffline()) {
      gameStarted = false;
      questionIndex = 0;
    }
  });

  // socket.on('pong', () => {
  //   // Aggiorna il timestamp del ping per questo client
  //   clients.set(socket.id, Date.now());
  // });

});

// function pingClients() {
//   // const now = Date.now();
//   // io.emit('ping');
//   io.emit("playersList", { playersList: playerManager.getAllPlayersNames() });

//   // clients.forEach((lastPing, clientId) => {
//   //     // Se un client non ha risposto negli ultimi 10 secondi, viene considerato inattivo
//   //     if (now - lastPing > 10000) {
//   //         console.log(`Client ${clientId} non risponde, verrà rimosso.`);
//   //         io.sockets.sockets.get(clientId)?.disconnect(true); // Disconnette il client
//   //         clients.delete(clientId);
//   //     }
//   // });

//   // console.log(`Client attivi: ${clients.size}`);
// }

// setInterval(pingClients, 5000);

module.exports = { server, io };
