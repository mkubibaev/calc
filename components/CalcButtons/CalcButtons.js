import React from 'react';
import {View, TouchableHighlight, Text, StyleSheet, Alert} from "react-native";

const CalcButtons = props => {
    const buttons = [
        ['AC', '%', '⌫', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];

    return (
        <View style={{display: 'flex'}}>
            {buttons.map((row, rowIndex) => (
                <View style={styles.keyboardRow} key={rowIndex}>
                    {row.map(btn => {

                        let btnStyles = styles.button;
                        let pressAction = props.onEnterSymbol;

                        switch (btn) {
                            case 'AC':
                                pressAction = props.onClear;
                                break;
                            case '⌫':
                                pressAction = props.onClearBySymbol;
                                break;
                            case '%':
                                pressAction = () => Alert.alert('', 'Coming soon!');
                                break;
                            case '=':
                                pressAction = props.onCalculate;
                                btnStyles = styles.buttonLg;
                        }

                        return (
                            <TouchableHighlight
                                key={btn}
                                underlayColor="#ccc"
                                style={btnStyles}
                                onPress={() => pressAction(btn)}
                            >
                                <Text style={styles.buttonText}>{btn}</Text>
                            </TouchableHighlight>
                        )
                    })}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    keyboardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        flexGrow: 1,
        flexBasis: 1,
        paddingVertical: 20,
        margin: 2,
        backgroundColor: '#fff'
    },
    buttonLg: {
        flexGrow: 1.9,
        margin: 2,
        paddingVertical: 20,
        backgroundColor: 'orange',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,
    }
});

export default CalcButtons;
