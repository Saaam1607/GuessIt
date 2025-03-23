// REDUCERS
// directory che conterrà la logica dei Reducers.

import { combineReducers } from 'redux'
import questionDataReducer from './questionDataReducer';
import answerDataReducer from './answerDataReducer';
import bonusDataReducer from './bonusDataReducer';
import resultsDataReducer from './resultsDataReducer';
import ghostDataReducer from './ghostDataReducer';
 
const rootReducer = combineReducers({
    questionData: questionDataReducer,
    answerData: answerDataReducer,
    bonusData: bonusDataReducer,
    resultsData: resultsDataReducer,
    ghostData: ghostDataReducer,
});
 
export default rootReducer;