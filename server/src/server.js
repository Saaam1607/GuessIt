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

  socket.on("playersList", (data) => {
    socket.emit("playersList", { playersList: playerManager.getAllPlayersNames() });
  });

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

  socket.on("startGame", (data) => {
    io.emit("gameStarted", {});
    io.emit("nextQuestion", {question: getCurrentQuestion()});
    gameStarted = true;

  });

  socket.on("newAnswer", (data) => {
    const name = playerManager.getPlayerName(data.playerId);
    console.log("new answer from: " + name + " " + data.answer)
    io.emit("newAnswer", {name: name, answer: data.answer});
  });

  socket.on("nextQuestion", (data) => {
    updateQuestionIndex();
    const question = getCurrentQuestion();
    const answer = getCurrentAnswer();
    io.emit("nextQuestion", {question: question});
    io.emit("nextAnswer", {answer: answer});
  });

  socket.on("getQuestion", (data) => {
    const question = getCurrentQuestion();
    socket.emit("nextQuestion", {question: question});
  });

  socket.on("results", (data) => {
    io.emit("results", { playersAnswersData: data.playersAnswersData });
  });

  socket.on("hurryUp", (data) => {
    io.emit("clock", {});
  });

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
