export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const MEM_PLUS = 'MEM_PLUS';
export const MEM_ZERO = 'MEM_ZERO';
export const MEM_VALUE = 'MEM_VALUE';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (op) => {
    return({type:CHANGE_OPERATION, payload:op});
} 

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY, payload: 0});
} 

export const memPlus = (totalValue) => {
    return({type:MEM_PLUS, payload: totalValue});
} 

export const memZero = () => {
    return({type:MEM_ZERO, payload: 0});
} 

export const memValue = (number) => {
    return({type:MEM_VALUE, payload:number});
}