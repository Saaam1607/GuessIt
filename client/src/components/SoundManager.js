import newQuestionUrl from "../assets/sounds/newQuestion.mp3";
import answerSentUrl from "../assets/sounds/AnswerSent.mp3";
import clockUrl from "../assets/sounds/clock.mp3";
import extremeClockUrl from "../assets/sounds/extremeClock.mp3";

import menu_swoosh from "../assets/sounds/menu_swoosh.mp3";
import menu_select from "../assets/sounds/menu_select.mp3";

import powerSelection from "../assets/sounds/powerSelection.mp3";
import ghost from "../assets/sounds/ghost.mp3";
import x2 from "../assets/sounds/x2.mp3";
import help from "../assets/sounds/help.mp3";

import results from "../assets/sounds/results.mp3";
import classification from "../assets/sounds/classification.mp3";



const newQuestion = new Audio(newQuestionUrl);
const answerSent = new Audio(answerSentUrl);
const clock = new Audio(clockUrl);
const extremeClock = new Audio(extremeClockUrl);

const menuSwoosh = new Audio(menu_swoosh);
const menuSelect = new Audio(menu_select);

const powerSelectionSound = new Audio(powerSelection);
const ghostSound = new Audio(ghost);
const x2Sound = new Audio(x2);
const helpSound = new Audio(help);

const resultsSound = new Audio(results);
const classificationSound = new Audio(classification);



function playNewQuestionSound() {
  newQuestion.play().catch(error => {});
}

function playAnswerSentSound() {
  answerSent.play().catch(error => {});
}

function playClockSound() {
  clock.play().catch(error => {});
}

function playExtremeClockSound() {
  extremeClock.play().catch(error => {});
}

function playMenuSwoosh() {
  menuSwoosh.currentTime = 0;
  menuSwoosh.play().catch(error => {});
}

function playMenuSelect() {
  menuSelect.currentTime = 0;
  menuSelect.play().catch(error => {});
}

function playPowerSelection() {
  powerSelectionSound.currentTime = 0;
  powerSelectionSound.play().catch(error => {});
}

function playGhost() {
  ghostSound.currentTime = 0;
  ghostSound.play().catch(error => {});
}

function playX2() {
  x2Sound.currentTime = 0;
  x2Sound.play().catch(error => {});
}

function playHelp() {
  helpSound.currentTime = 0;
  helpSound.play().catch(error => {});
}

function playResults() {
  resultsSound.currentTime = 0;
  resultsSound.play().catch(error => {});
}

function playClassification() {
  classificationSound.currentTime = 0;
  classificationSound.play().catch(error => {});
}



export { playNewQuestionSound, playAnswerSentSound, playClockSound, playExtremeClockSound, playMenuSwoosh, playMenuSelect, playPowerSelection, playGhost, playX2, playHelp, playResults, playClassification }; 