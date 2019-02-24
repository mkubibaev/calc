import React from 'react';
import {Text} from 'react-native';

const CalcDisplay = props => {
    return (
        <Text style={{
            color: '#000',
            fontSize: 36,
            paddingHorizontal: 5,
            paddingVertical: 10,
            textAlign: 'right',
            backgroundColor: '#fff',
            marginBottom: 10
        }}>
            {props.value ? props.value : 0}
        </Text>
    );
};

export default CalcDisplay;
