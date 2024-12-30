function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computeSuggestedMinAndManx(currentAnswer, currentMin, currentMax, currentStep) {

    let suggestedMin = currentMin;
    let suggestedMax = currentMax;
    
    let interval = ((currentMax - currentMin) / currentStep) * 0.1;
    let stepToKeep = Math.ceil(interval);
    
    const upperStepsAvailable = Math.floor((currentMax - currentAnswer) / currentStep);
    const lowerStepsAvailable = Math.floor((currentAnswer - currentMin) / currentStep);
    
    var exceededUpperSteps = 0;
    var exceededLowerSteps = 0;
    
    var upperSteps = stepToKeep;
    var lowerSteps = stepToKeep;

    const randomInt = getRandomInt(0, stepToKeep);
    if (getRandomInt(0, 1) === 0) {
        upperSteps += randomInt;
        lowerSteps -= randomInt;
    } else {
        upperSteps -= randomInt;
        lowerSteps += randomInt;
    }
    
    if (upperSteps > upperStepsAvailable)
        exceededUpperSteps = upperSteps - upperStepsAvailable;
    
    if (lowerSteps > lowerStepsAvailable)
        exceededLowerSteps = lowerSteps - lowerStepsAvailable;
    
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

    return { suggestedMin, suggestedMax };
}

function getFakeAnswers(answerList, rightAnswer) {
    const fakeAnswers = [];
    const fakeAnswersToRemove = answerList.length / 2;
    answerList.forEach((answer) => {
        if (answer.answer != rightAnswer) {
            fakeAnswers.push(answer.answer);
        };
    });

    for (let i = fakeAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fakeAnswers[i], fakeAnswers[j]] = [fakeAnswers[j], fakeAnswers[i]];
    }

    return fakeAnswers.slice(0, fakeAnswersToRemove);
}


module.exports = {
    computeSuggestedMinAndManx,
    getFakeAnswers,
};