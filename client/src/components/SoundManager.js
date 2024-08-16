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



function playNewQuestionSound() {
  newQuestion.play().catch(error => {
    console.error('Playback failed:', error);
  });
}

function playAnswerSentSound() {
  answerSent.play();
}

function playClockSound() {
  clock.play();
}

function playExtremeClockSound() {
  extremeClock.play();
}

function playMenuSwoosh() {
  menuSwoosh.currentTime = 0;
  menuSwoosh.play();
}

function playMenuSelect() {
  menuSelect.currentTime = 0;
  menuSelect.play();
}

function playPowerSelection() {
  powerSelectionSound.currentTime = 0;
  powerSelectionSound.play().catch(error => {
    console.error('Playback failed:', error);
  });
}

function playGhost() {
  ghostSound.currentTime = 0;
  ghostSound.play();
}

function playX2() {
  x2Sound.currentTime = 0;
  x2Sound.play();
}

function playHelp() {
  helpSound.currentTime = 0;
  helpSound.play();
}



export { playNewQuestionSound, playAnswerSentSound, playClockSound, playExtremeClockSound, playMenuSwoosh, playMenuSelect, playPowerSelection, playGhost, playX2, playHelp }; 