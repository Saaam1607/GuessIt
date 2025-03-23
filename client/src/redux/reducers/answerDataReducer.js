import initialState from './initialState';
 
export default function answerDataReducer(state = initialState.answerData, action) {
    switch(action.type) {
         
        case "RESET_ANSWER_DATA": {
            return {
                ...state,
                answer: '',
                hasAnswered: false,
                ghostBonusUsed: false,
                x2BonusUsed: false,
                helpBonusUsed: false,
            }
        }
        
        case "SET_ANSWER": {
            return {
                ...state,
                answer: action.payload,
            }
        }

        case "SET_HAS_ANSWERED": {
            return {
                ...state,
                hasAnswered: action.payload,
            }
        }

        case "SET_GHOST_BONUS_USED": {
            return {
                ...state,
                ghostBonusUsed: action.payload,
            }
        }

        case "SET_X2_BONUS_USED": {
            return {
                ...state,
                x2BonusUsed: action.payload,
            }
        }

        case "SET_HELP_BONUS_USED": {
            return {
                ...state,
                helpBonusUsed: action.payload,
            }
        }

        default: return state;
    }
}