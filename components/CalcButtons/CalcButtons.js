import React from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from "react-native";

const CalcButtons = props => {
    return (
        <View style={{display: 'flex'}}>
            <View style={styles.keyboardRow}>
                <TouchableHighlight underlayColor="#ccc" style={styles.button} onPress={props.inc}>
                    <Text style={{...styles.buttonText}}>AC</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>%</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>⌫</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.keyboardRow}>
                <TouchableHighlight underlayColor="#ccc" style={styles.button} onPress={props.inc}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>x</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.keyboardRow}>
                <TouchableHighlight underlayColor="#ccc" style={styles.button} onPress={props.inc}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.keyboardRow}>
                <TouchableHighlight underlayColor="#ccc" style={styles.button} onPress={props.inc}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.keyboardRow}>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>.</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    ...styles.button,
                    backgroundColor: 'darkorange',
                    flexGrow: 1.9,
                    flexBasis: 'auto',
                }}>
                    <Text style={{...styles.buttonText, color: '#fff'}}>=</Text>
                </TouchableHighlight>
            </View>
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
        paddingVertical:  20,
        margin: 2,
        backgroundColor: '#fff'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,
    }
});

export default CalcButtons;
