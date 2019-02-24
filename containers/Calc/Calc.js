import React, {Component} from 'react';
import {connect} from "react-redux";
import {StyleSheet, View} from "react-native";
import CalcDisplay from "../../components/CalcDisplay/CalcDisplay";
import CalcButtons from "../../components/CalcButtons/CalcButtons";
import {calculate, clearAll, clearBySymbol, enterSymbol} from "../../store/actions/calcActions";

class Calc extends Component {
    render() {
        return (
            <View style={styles.calc}>
                <CalcDisplay
                    calcString={this.props.calcString}
                    result={this.props.result}
                />
                <CalcButtons
                    onEnterSymbol={this.props.enterSymbol}
                    onClear={this.props.clearAll}
                    onClearBySymbol={this.props.clearBySymbol}
                    onCalculate={this.props.calculate}
                />
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
    }
});

const mapStateToProps = state => ({
    calcString: state.calcString,
    result: state.result
});

const mapDispatchToProps = dispatch => ({
    enterSymbol: value => dispatch(enterSymbol(value)),
    clearAll: () => dispatch(clearAll()),
    clearBySymbol: () => dispatch(clearBySymbol()),
    calculate: () => dispatch(calculate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
