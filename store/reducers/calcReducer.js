import {ENTER_SYMBOL} from "../actions/actionTypes";

const initialState = {
    calcString: '',
};

const calcReducer =  (state = initialState, action) => {
    switch (action.type) {
        case ENTER_SYMBOL:
            return {
                ...state,
                calcString: state.calcString + action.value
            };
        default:
            return state
    }
};

export default calcReducer;
