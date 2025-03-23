import initialState from './initialState';
 
export default function bonusDataReducer(state = initialState.bonusData, action) {
    switch(action.type) {
         
        case "SET_BONUS_DATA": {
            return {
                ...state,
                ghostBonusesAvailable: action.payload.ghostBonusesAvailable,
                x2BonusesAvailable: action.payload.x2BonusesAvailable,
                helpBonusesAvailable: action.payload.helpBonusesAvailable,
                lastBonusAddedIndex: action.payload.lastBonusAddedIndex,
            }
        }

        case "RESET_LAST_BONUS_INDEX": {
            return {
                ...state,
                lastBonusAddedIndex: -1,
            }
        }

        default: return state;
    }
}