export const resetAnswerData = () => {
    console.log("resetAnswerData");
    return {
        type: "RESET_ANSWER_DATA",
    }
}

export const setAnswer = (answer) => {
    console.log("setAnswer");
    return {
        type: "SET_ANSWER",
        payload: answer
    }
}

export const setHasAnswered = (hasAnswered) => {
    console.log("setHasAnswered");
    return {
        type: "SET_HAS_ANSWERED",
        payload: hasAnswered
    }
}

export const setGhostBonusUsed = (ghostBonusUsed) => {
    console.log("setGhostBonusUsed");
    return {
        type: "SET_GHOST_BONUS_USED",
        payload: ghostBonusUsed
    }
}

export const setX2BonusUsed = (x2BonusUsed) => {
    console.log("setX2BonusUsed");
    return {
        type: "SET_X2_BONUS_USED",
        payload: x2BonusUsed
    }
}

export const setHelpBonusUsed = (helpBonusUsed) => {
    console.log("setHelpBonusUsed");
    return {
        type: "SET_HELP_BONUS_USED",
        payload: helpBonusUsed
    }
}