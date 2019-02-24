import {Alert} from 'react-native';
import {CALCULATE, CLEAR_All, ENTER_SYMBOL, CLEAR_BY_SYMBOL} from "../actions/actionTypes";

const initialState = {
    calcString: '',
    result: ''
};

const calcReducer =  (state = initialState, action) => {
    switch (action.type) {

        case ENTER_SYMBOL:
            if (state.result === '') {
                return {
                    ...state,
                    calcString: state.calcString + action.value
                };
            }

            return state;

        case CLEAR_All:
            return {
                ...initialState
            };

        case CLEAR_BY_SYMBOL:
            if (state.calcString !== '' && !state.result) {
                return {
                    ...state,
                    calcString: state.calcString.slice(0, -1)
                };
            }

            return state;

        case CALCULATE:
            let result = state.result;

                try {
                    result = eval(state.calcString);
                } catch (error) {
                    Alert.alert('', 'Incorrect value');
                }

            return {
                ...state,
                result
            };
        default:
            return state
    }
};

export default calcReducer;
