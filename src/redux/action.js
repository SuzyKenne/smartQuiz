
import {
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_TYPES,
    CHANGE_AMOUNT,
    CHANGE_SCORE
} from './actionTypes';


export const handleCategoryChange = (payload) => ({
    type: CHANGE_CATEGORY,
    payload,
});

export const handleDifficultyChange = (payload) => ({
    type: CHANGE_DIFFICULTY,
    payload,
});

export const handleTypesChange = (payload) => ({
    type: CHANGE_TYPES,
    payload,
});

export const handleAmountChange = (payload) => ({
    type: CHANGE_AMOUNT,
    payload,
});

export const handleScoreChange = (payload) => ({
    type: CHANGE_SCORE,
    payload,
});