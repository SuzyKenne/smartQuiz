import { CHANGE_AMOUNT, CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_SCORE, CHANGE_TYPES } from "./actionTypes";

const initialState = {
    questionCategory: "",
    questionDifficulty: "",
    questionType: "",
    questionAmount: 50,
    score: 0

}




const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CATEGORY: 
            return {
                ...state,
                questionCategory: action.payload,
            };
        case CHANGE_DIFFICULTY: 
            return {
                ...state,
                questionDifficulty: action.payload,
            };
        case CHANGE_TYPES: 
            return {
                ...state,
                questionType: action.payload,
            };
        case CHANGE_AMOUNT: 
            return {
                ...state,
                questionAmount: action.payload,
            };
        case CHANGE_SCORE: 
            return {
                ...state,
                score: action.payload,
            };
        default: 
            return state;
    }

}

export default reducer;