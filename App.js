import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import Calc from "./containers/Calc/Calc";
import calcReducer from "./store/reducers/calcReducer";

const store = createStore(calcReducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Calc/>
            </Provider>
        )
    }
};

