import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

import { createStore } from "redux";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import CustomButton from "../../components/CustomButton.js";

import AnswerBox from "../../components/AnswerBox.js";
import ChoiceAnswerBox from "../../components/ChoiceAnswerBox.js";

import QuestionBox from "../../components/QuestionBox.js";
import GhostModal from "../../components/GhostModal.js";
import Results from "../../components/Results.js";
import Classification from "../../components/Classification.js";
import GuessButton from "../../components/GuessButton.js";
import AnswersStatus from "../../components/AnswersStatus.js";

import socket from "../../assets/modules/socket";

// REDUX
import { useDispatch } from "react-redux";
import { setQuestionData } from "../../redux/actions/questionDataActions.js";
import { resetAnswerData, setAnswer, setHasAnswered, setGhostBonusUsed, setX2BonusUsed, setHelpBonusUsed } from "../../redux/actions/answerDataActions.js";
import { setBonusData } from "../../redux/actions/bonusDataActions.js";
import { setResultsData, showResults, hideResults } from "../../redux/actions/resultsDataActions.js";
import { setGhostData, resetGhostData, showGhostModal, hideGhostModal } from "../../redux/actions/ghostDataActions.js";

// CSS 
import './clientGame.css';

const SoundManager = require('../../components/SoundManager.js');

const ghost_icon = require('../../assets/images/ghost_icon.png');
const x2_icon = require('../../assets/images/x2_icon.png');
const help_icon = require('../../assets/images/help_icon.png');
const win_icon = require('../../assets/images/win_icon.png');



function ClientGame() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const questionData = useSelector(state => state.questionData);
  const answerData = useSelector(state => state.answerData);
  const bonusData = useSelector(state => state.bonusData);
  const resultsData = useSelector(state => state.resultsData);
  const ghostData = useSelector(state => state.ghostData);

  // WIP
  const [activePlayersCount, setActivePlayersCount] = useState(0);
  const [answersCount, setAnswersCount] = useState(0);

  function joinGame() {
    socket.emit("join", { name: "", playerId: localStorage.getItem('playerId'), characterIndex: localStorage.getItem('characterIndex') });
  }

  function getQuestion() {
    socket.emit("getQuestion", {});
  }

  function getBonus() {
    socket.emit("getBonus", { playerId: localStorage.getItem('playerId') });
  }

  function checkIfAlreadyAnswered() {
    socket.emit("hasAnswered", { playerId: localStorage.getItem('playerId') });
  }

  function sendAnswer() {

    if (answerData.hasAnswered) {
      return;
    }

    if (answerData.answer === undefined || answerData.answer === "") {
      return;
    }

    dispatch(setHasAnswered(true));
    socket.emit("newAnswer", { playerId: localStorage.getItem('playerId'), answer: answerData.answer, hasUsedX2: answerData.x2BonusUsed, hasUsedHelp: answerData.helpBonusUsed, hasUsedGhost: answerData.ghostBonusUsed});
    SoundManager.playAnswerSentSound();
  }

  function computeTempAnswer(min, max, step) {
    min = parseInt(min);
    max = parseInt(max);
    step = parseInt(step);

    const middleValue = (min + max) / 2;
    var nearestValue = Math.round(middleValue / step) * step;
    nearestValue = Math.min(max, Math.max(min, nearestValue));

    dispatch(setAnswer(nearestValue));
  }

  function showGhostResponseSwal(response) {
    Swal.fire({
      title: "La risposta del fantasma è...",
      html: `<p style="font-size: 40px;"><strong>${response}</strong></p>`, // Styling inline
      timer: 10000
    })
  }

  function showGhostResponseEmptySwal() {
    Swal.fire({
      title: "Nessun fantasma ha risposto",
      timer: 1500,
      showConfirmButton: false,
    })
  }

  function showGhostResponseNotReadySwal() {
    Swal.fire({
      title: "Non ha ancora risposto",
      timer: 1500,
      showConfirmButton: false,
    })
  }
    

  function handleClockSound() {
    if (!answerData.hasAnswered) {
      SoundManager.playClockSound();
    }
  }

  function handleExtremeClockSound() {
    if (!answerData.hasAnswered) {
      SoundManager.playExtremeClockSound();
    }
  }

  function handleGhostIconClick() {
    if (bonusData.ghostBonusesAvailable && !answerData.ghostBonusUsed && !answerData.hasAnswered) {
      SoundManager.playPowerSelection();
      SoundManager.playGhost();
      socket.emit("ghost", {});
    }
  }

  function handleHelpIconClick() {
    if (bonusData.helpBonusesAvailable && !answerData.helpBonusUsed && !answerData.hasAnswered) {
      SoundManager.playPowerSelection();
      socket.emit("help", { playerId: localStorage.getItem('playerId') });
    }
  }


  function handleMinMaxSuggest(data) {
    SoundManager.playHelp();
    dispatch(setHelpBonusUsed(true));
    computeTempAnswer(data.suggestedMin, data.suggestedMax, data.step); //!
  }

  function handleFakeAnswersSuggest(data) {
    SoundManager.playHelp();
    dispatch(setHelpBonusUsed(true));
  }

  function handleX2IconClick() {
    if (bonusData.x2BonusesAvailable && !answerData.x2BonusUsed && !answerData.hasAnswered) {
      SoundManager.playPowerSelection();
      SoundManager.playX2();
      dispatch(setX2BonusUsed(true));
    }
  }

  function handleSendGhost(selectedPlayerId) {
    socket.emit("ghostAnswer", { selectedPlayerId });
  }



  useEffect(() => {

    joinGame();
    getQuestion();
    getBonus();

    function handleNextQuestion(data) {

      dispatch(resetAnswerData());
      dispatch(setQuestionData(data));

      switch (data.questionType) {
        case 0:
          Swal.fire({
            title: "Indovina il numero",
            icon: "question",
            showConfirmButton: false,
            timer: 1500,
          })
          computeTempAnswer(data.min, data.max, data.step);
          break;
        case 1:
          Swal.fire({
            title: "Indovina la risposta",
            icon: "info",
            showConfirmButton: false,
            timer: 1500,
          })
          break;
        default:
          break;
      }

      dispatch(hideResults());

      dispatch(resetGhostData());

      SoundManager.playNewQuestionSound();

      getBonus();

    }

    function handleResults(data) {
      dispatch(setResultsData(data.playersAnswersData));
      // setResults(data.playersAnswersData);
      dispatch(showResults());
      SoundManager.playResults();
    }

    function handleBonus(data) {
      dispatch(setBonusData({
        ghostBonusesAvailable: data.ghostAvailableBonuses,
        x2BonusesAvailable: data.x2AvailableBonuses,
        helpBonusesAvailable: data.helpAvailableBonuses,
        lastBonusAddedIndex: data.powerIndex,
      }));
    }

    function handleGhostData(data) {
      var playersData = data.playersData;

      playersData = playersData.filter(player => player.playerId != localStorage.getItem('playerId'));
      playersData = playersData.filter(player => player.active == true);
      
      if (playersData.length == 0) {
        showGhostResponseEmptySwal();
        return;
      }

      dispatch(setGhostBonusUsed(true));
      dispatch(setGhostData(playersData));
      dispatch(showGhostModal());
    }

    function handleGhostAnswer(data) {
      showGhostResponseSwal(data.playerResponse);
      dispatch(hideGhostModal());
    }

    function handleGhostAnswerNotReady(data) {
      showGhostResponseNotReadySwal();
      dispatch(setGhostBonusUsed(false));
      dispatch(hideGhostModal());
    }

    function handleHasAnswered(data) {
      if (data.hasAnswered) {
        dispatch(setAnswer(data.response));
      }
    }

    // function recover() {
    //   window.location.reload();
    // }

    function handleAnswersStatus(data) {
      setActivePlayersCount(data.answersStatus.activePlayersCount)
      setAnswersCount(data.answersStatus.answersCount)
    }

    function handleLostPlayer() {
      Swal.fire({
        title: "Sei stato disconnesso",
        text: "Riesegui il login per continuare a giocare",
        icon: "warning",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        navigate("/client");

      });
    }

    function handleReset() {
      localStorage.clear();
      navigate("/", { });
    }

    socket.on("nextQuestion", handleNextQuestion);
    socket.on("hasAnswered", handleHasAnswered);
    socket.on("answersStatus", handleAnswersStatus);

    socket.on("bonus", handleBonus);
    socket.on("minMaxSuggest", handleMinMaxSuggest);
    socket.on("fakeAnswersSuggest", handleFakeAnswersSuggest);

    socket.on("ghostData", handleGhostData);

    socket.on("ghostAnswer", handleGhostAnswer);
    socket.on("ghostAnswerNotReady", handleGhostAnswerNotReady);

    socket.on("results", handleResults);
    socket.on("clock", handleClockSound);
    socket.on("extremeClock", handleExtremeClockSound);

    socket.on("lostPlayer", handleLostPlayer);
    socket.on("reset", handleReset);

    // socket.on("recover", recover);

    return () => {
      socket.off("nextQuestion", handleNextQuestion);
      socket.off("hasAnswered", handleHasAnswered);
      socket.off("answersStatus", handleAnswersStatus);
      socket.off("bonus", handleBonus);
      socket.off("minMaxSuggest", handleMinMaxSuggest);
      socket.off("fakeAnswersSuggest", handleFakeAnswersSuggest);
      socket.off("ghostData", handleGhostData);
      socket.off("results", handleResults);
      socket.off("clock", handleClockSound);
      socket.off("extremeClock", handleExtremeClockSound);
      socket.off("lostPlayer", handleLostPlayer);
      socket.off("reset", handleReset);
      // socket.off("recover", recover);
    };


  }, [socket]);

  return (


  //   <div
  //   className="d-flex flex-column align-items-center justify-content-end"
  //   style={{ width: "100%", height: "100%", position: "relative" }}
  // >
  //   <div className="d-flex align-items-center" style={{ width: "100%", height: "64px", position: "absolute" }}>
  //     <AnswersStatus activePlayersCount={activePlayersCount} answersCount={answersCount} />
  //   </div>
  //   <div className="d-flex justify-content-center" style={{ width: "100%", position: "absolute" }}>
  //     <GuessButton type="submit" />
  //   </div>
  // </div>


    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100%", width: "100%", position: "relative" }}
    >
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100%", width: "100%", position: "absolute" }}
      >

        <GhostModal
          playerId={localStorage.getItem('playerId')}
          handleSendGhost={handleSendGhost}
        />

        <div
          className={"d-flex flex-column align-items-center justify-content-start "}
          style={{ borderRadius: "10px", width: "100%", height: "100%", overflowY: "auto" }}
        >

          <QuestionBox
            showImage={!resultsData.showResults}
            handleGhostIconClick={handleGhostIconClick}
            handleX2IconClick={handleX2IconClick}
            handleHelpIconClick={handleHelpIconClick}
          />

          { !answerData.hasAnswered && !resultsData.showResults && (
            <form
              className="d-flex flex-column align-items-center justify-content-around"
              style={{ width: "100%", height: "100%"}}
              onSubmit={(e) => {
                e.preventDefault();
                sendAnswer();
              }}
            >

              { questionData.questionType === 0 && (
                <div className="d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
                  <AnswerBox/>
                </div>
              )}
              
              { questionData.questionType === 1 && (
                <div className="d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
                  <ChoiceAnswerBox/>
                </div>
              )}

              <div
                className="d-flex flex-column align-items-center justify-content-end"
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <GuessButton type="submit"/>
              </div>

            </form>
          )}

          { answerData.hasAnswered && !resultsData.showResults && (
            <p>Aspettando le risposte degli altri giocatori...</p>
          )}

          { resultsData.showResults && (
            <Results />
          )}

        </div>
      </div>

      {/* <div className="d-flex align-items-top" style={{ width: "100%", position: "absolute", bottom: "0" }}>
        <AnswersStatus activePlayersCount={activePlayersCount} answersCount={answersCount} />
      </div> */}

    </div>
  );
}

export default ClientGame;