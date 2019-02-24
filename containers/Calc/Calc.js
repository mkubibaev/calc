import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import CalcDisplay from "../../components/CalcDisplay/CalcDisplay";
import CalcButtons from "../../components/CalcButtons/CalcButtons";

export default class Calc extends Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState({count: this.state.count + 1})
    };

    render() {
        return (
            <View style={styles.calc}>
                <CalcDisplay value={this.state.count}/>
                <CalcButtons inc={this.increment}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    calc: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    button: {
        color: 'red',
    }
});
