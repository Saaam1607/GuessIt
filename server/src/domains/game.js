const express = require("express");
const querystring = require('querystring');
const router = express.Router();



const gameCode = "123";
let players = [];

// per chi si aggiunge il gioco
router.post("/join/code/:id", async (req, res) => {
  // console.log(req.body.name + " has joined the game " + req.params.id);
  if (req.params.id !== gameCode) {
    return res.status(400).json({success: false, error: "Invalid game code"});
  }
  players.push(req.body.name);
  return res.status(200).json({success: true});
});

// per chi crea il gioco
router.get("/get/code", async (req, res) => {
  res.status(200).json({success: true});
});

// per chi aspetta il

module.exports = router;