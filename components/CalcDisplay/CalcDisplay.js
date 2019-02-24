import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CalcDisplay = props => {
    return (
        <View style={styles.display}>
            <Text style={styles.result}>
                {props.result}
            </Text>
            <Text style={styles.operand}>
                {props.calcString ? props.calcString : 0}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    display: {
        display: 'flex',
        flexDirection: 'column-reverse',
        marginBottom: 5,
        paddingHorizontal: 5,
    },
    operand: {
        fontSize: 38,
        textAlign: 'right',
    },
    result: {
        fontSize: 46,
        textAlign: 'right',
    }
});

export default CalcDisplay;
