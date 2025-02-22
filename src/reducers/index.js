import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEM_PLUS, MEM_ZERO, MEM_VALUE } from './../actions';

export const initialState = {
    total: 100,
    operation: "+",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {

    console.log(num1, num2, operation)
    switch(operation) {
        case("+"):
        console.log(num1 + num2)
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {

    console.log(action);
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, parseInt(action.payload), state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

            case(CLEAR_DISPLAY):
            console.log(state, action.payload);
            return ({
                ...state,
                
                total: parseInt(action.payload)
            });
            
            case(MEM_PLUS):
            console.log(action.payload);
            return ({
                ...state,
                
                memory: parseInt(action.payload)
            });

            case(MEM_ZERO):
            console.log(action.payload);
            return ({
                ...state,
                
                memory: parseInt(action.payload)
            });

            case(MEM_VALUE):
            return ({ 
                ...state, 
                total: calculateResult(state.total, parseInt(action.payload), state.operation)
            });
        default:
            return state;
    }
}

export default reducer;