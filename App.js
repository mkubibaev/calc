import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";

import Calc from "./containers/Calc/Calc";

export default class App extends React.Component {
    render() {
        return (
            <Provider>
                <Calc/>
            </Provider>
        )
    }
};

