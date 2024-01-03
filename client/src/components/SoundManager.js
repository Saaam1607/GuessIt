import newQuestionUrl from "../assets/sounds/newQuestion.mp3";
import answerSentUrl from "../assets/sounds/AnswerSent.mp3";
import clockUrl from "../assets/sounds/clock.mp3";
import extremeClockUrl from "../assets/sounds/extremeClock.mp3";

const newQuestion = new Audio(newQuestionUrl);
const answerSent = new Audio(answerSentUrl);
const clock = new Audio(clockUrl);
const extremeClock = new Audio(extremeClockUrl);

function playNewQuestionSound() {
  newQuestion.play();
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

export { playNewQuestionSound, playAnswerSentSound, playClockSound, playExtremeClockSound };
