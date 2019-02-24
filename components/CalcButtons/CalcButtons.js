import React from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from "react-native";

const CalcButtons = props => {
    const buttons = [
        ['AC', '%', '⌫', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];

    return (
        <View style={{display: 'flex'}}>
            {buttons.map((row, rowIndex) => (
                <View style={styles.keyboardRow} key={rowIndex}>
                    {row.map((btn, btnIndex) => {
                        let btnStyles = styles.button;

                        if (rowIndex === 4 && btnIndex === 2) {
                            btnStyles = styles.buttonLg;
                        }

                        return (
                            <TouchableHighlight
                                key={btn}
                                underlayColor="#ccc"
                                style={btnStyles}
                                onPress={() => props.touched(btn)}
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
