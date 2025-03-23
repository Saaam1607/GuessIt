import initialState from './initialState';
 
 
export default function resultsReducer(state = initialState.resultsData, action) {
    switch(action.type) {

        case "SET_RESULTS_DATA": {
            return {
                ...state,
                playersAnswersData: action.payload,
            }
        }

        case "SHOW_RESULTS": {
            return {
                ...state,
                showResults: true,
            }
        }

        case "HIDE_RESULTS": {
            return {
                ...state,
                showResults: false,
            }
        }

        default: return state;
    }
}