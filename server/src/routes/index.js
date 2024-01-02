const express = require("express");
const router = express.Router();
const gameRouter = require("../domains/game");

router.use("/api/v1/game", gameRouter);

module.exports = router;
