const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const bodyParser = require("express").json;
const routes = require("./routes");
const cors = require("cors");

const playerManager = require("./game/players");
const tokenManager = require("./components/tokenManager");
const questionDb = require("./game/questions");

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

app.use(bodyParser());
app.use(cors(corsOptions));

app.use(routes);

let gameStarted = false;
let questionIndex = 0;
const maxQuestionIndex = questionDb.length - 1;

function getCurrentQuestion() {
  const nextQuestion = questionDb[questionIndex].question;
  return nextQuestion;
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

function updateQuestionIndex() {
  if (questionIndex >= maxQuestionIndex) {
    questionIndex = 0;
  } else {
    questionIndex++;
  }
}

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

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
      playerManager.addPlayer({ name: data.name, playerId: newPlayerId, socketId: socket.id, active: true });
      io.emit("playersList", { playersList: playerManager.getAllPlayersNames() });
    }

    // gestione giocatore già presente ma con una nuova connessione socket
    else {
      console.log("giocatore già presente")
      playerManager.updatePlayerActive(data.playerId, socket.id);
      io.emit("playersList", { playersList: playerManager.getAllPlayersNames() });
    }

    console.log("stampa aggiornata dei players: ");
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
    io.emit("nextQuestion", {question: getCurrentQuestion(), min: getCurrentMin(), max: getCurrentMax(), step: getCurrentStep(), unit: getCurrentUnit()});
    gameStarted = true;
  });

  /*
    on          <--- newAnswer
    to all      ---> newAnswer
  */
  socket.on("newAnswer", (data) => {
    const name = playerManager.getPlayerName(data.playerId);
    console.log("new answer from: " + name + " " + data.answer)
    io.emit("newAnswer", {name: name, answer: data.answer});
  });

  /*
    on          <--- nextQuestion
    to all      ---> nextQuestion
                ---> nextAnswer
  */
  socket.on("nextQuestion", (data) => {
    updateQuestionIndex();
    const answer = getCurrentAnswer();
    io.emit("nextQuestion", {question: getCurrentQuestion(), min: getCurrentMin(), max: getCurrentMax(), step: getCurrentStep(), unit: getCurrentUnit()});
    io.emit("nextAnswer", {answer: answer});
  });

  /*
    on          <--- getQuestion
    to client   ---> nextQuestion
  */
  socket.on("getQuestion", (data) => {
    socket.emit("nextQuestion", {question: getCurrentQuestion(), min: getCurrentMin(), max: getCurrentMax(), step: getCurrentStep(), unit: getCurrentUnit()});
  });

  /*
    on          <--- results
    to all      ---> results
  */
  socket.on("results", (data) => {
    io.emit("results", { playersAnswersData: data.playersAnswersData });
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
    playerManager.printPlayers();
    console.log(`User Disconnected: ${socket.id}`);
    if (playerManager.checkIfAllPlayersOffline()) {
      gameStarted = false;
      questionIndex = 0;
    }
  });
});

module.exports = { server, io };
