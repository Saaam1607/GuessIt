const initialState = {
    questionData: {
        questionType: -1,
        question: '',
        image: '',
        explanation: '',
        
        min: 0,
        max: 0,
        step: 0,
        unit: '',
        bonusMin: 0,
        bonusMax: 0,

        availableAnswers: [],
        fakeAnswers: [],
    },

    answerData: {
        answer: '',
        hasAnswered: false,
        ghostBonusUsed: false,
        x2BonusUsed: false,
        helpBonusUsed: false,
    },

    bonusData: {
        ghostBonusesAvailable: 0,
        x2BonusesAvailable: 0,
        helpBonusesAvailable: 0,
        lastBonusAddedIndex: -1,
    },

    resultsData: {
        playersAnswersData: [],
        showResults: false,
    },

    ghostData: {
        ghostData: [],
        showGhostModal: false,
    },

    // [
    //     {
    //       name: 'sam',
    //       playerId: 1742762292932,
    //       characterIndex: 0,
    //       socketId: 'cX3bVUgv7vFr7ip0AAAD',
    //       active: true,
    //       ghostPowersAvailable: 4,
    //       helpPowersAvailable: 0,
    //       x2PowersAvailable: 2,
    //       score: 1,
    //       answer: 'Diadema di Priscilla Corvonero',
    //       hasUsedHelp: false,
    //       hasUsedX2: false,
    //       hasUsedGhost: false,
    //       hasWon: false,
    //       isMovedUp: false,
    //       isMovedDown: false
    //     },
    //     { answer: 'Bacchetta di Narciso', isAnswer: true }
    //   ]



}
 
export default initialState;