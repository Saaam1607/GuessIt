import initialState from './initialState';
 
 
export default function questionDataReducer(state = initialState.questionData, action) {
    switch(action.type) {
        case "SET_QUESTION_DATA": {
            return {
                ...state,
                question: action.payload.question,
                questionType: action.payload.questionType,
                image: action.payload.image,
                showImage: action.payload.showImage,
                explanation: action.payload.explanation,

                min: action.payload.min,
                max: action.payload.max,
                step: action.payload.step,
                unit: action.payload.unit,
                bonusMin: action.payload.bonusMin,
                bonusMax: action.payload.bonusMax,

                availableAnswers: action.payload.availableAnswers,
                fakeAnswers: action.payload.fakeAnswers,

            }
        }
 
        default: return state;
    }
}