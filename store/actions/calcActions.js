import {CALCULATE, CLEAR_All, ENTER_SYMBOL, CLEAR_BY_SYMBOL} from "./actionTypes";


export const enterSymbol = value => ({type: ENTER_SYMBOL, value});

export const clearAll = () => ({type: CLEAR_All});

export const clearBySymbol = () => ({type: CLEAR_BY_SYMBOL});

export const calculate = () => ({type: CALCULATE});
