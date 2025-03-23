import initialState from './initialState';
 
export default function ghostDataReducer(state = initialState.ghostData, action) {
    switch(action.type) {
        case "SET_RESULTS_DATA": {
            return {
                ...state,
                ghostData: action.payload,
            }
        }

        case "RESET_GHOST_DATA": {
            return {
                ...state,
                ghostData: [],
            }
        }

        case "SHOW_GHOST_MODAL": {
            return {
                ...state,
                showGhostModal: true,
            }
        }

        case "HIDE_GHOST_MODAL": {
            return {
                ...state,
                showGhostModal: false,
            }
        }

        default: return state;
    }
}