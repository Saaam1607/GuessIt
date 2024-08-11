function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const currentAnswer = 25;
const currentMin = 10;
const currentMax = 170;
const currentStep = 5;

let suggestedMin = currentMin;
let suggestedMax = currentMax;

let interval = ((currentMax - currentMin) / currentStep) * 0.15;
let stepToKeep = Math.ceil(interval);



console.log(stepToKeep)

const upperStepsAvailable = Math.floor((currentMax - currentAnswer) / currentStep);
const lowerStepsAvailable = Math.floor((currentAnswer - currentMin) / currentStep);

console.log("available upper steps: " + upperStepsAvailable + " available lower steps: " + lowerStepsAvailable)

var exceededUpperSteps = 0;
var exceededLowerSteps = 0;

var upperSteps = stepToKeep;
var lowerSteps = stepToKeep;

const randomInt = getRandomInt(0, stepToKeep);
if (getRandomInt(0, 1) === 0) {
    (console.log("upper"))
    upperSteps += randomInt;
    lowerSteps -= randomInt;
} else {
    (console.log("lower"))
    upperSteps -= randomInt;
    lowerSteps += randomInt;
}

console.log("upper steps: " + upperSteps + " lower steps: " + lowerSteps)

console.log("random: " + randomInt)

if (upperSteps > upperStepsAvailable) {
    exceededUpperSteps = upperSteps - upperStepsAvailable;
    console.log("exceeded upper steps: " + exceededUpperSteps)
}

if (lowerSteps > lowerStepsAvailable) {
    exceededLowerSteps = lowerSteps - lowerStepsAvailable;
    console.log("exceeded lower steps: " + exceededUpperSteps)

}

if (exceededUpperSteps > 0 && exceededLowerSteps > 0) {
    // ..................
} else if (exceededUpperSteps > 0) {
    upperSteps = upperStepsAvailable;
    lowerSteps = lowerSteps + exceededUpperSteps;
} else if (exceededLowerSteps > 0) {
    upperSteps = upperSteps + exceededLowerSteps;
    lowerSteps = lowerStepsAvailable;
}

suggestedMin = currentAnswer - (lowerSteps * currentStep);
suggestedMax = currentAnswer + (upperSteps * currentStep);

console.log("suggestedMin: " + suggestedMin + " suggestedMax: " + suggestedMax)







