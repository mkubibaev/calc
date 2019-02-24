import React, {Component} from 'react';
import {connect} from "react-redux";
import {StyleSheet, View} from "react-native";
import CalcDisplay from "../../components/CalcDisplay/CalcDisplay";
import CalcButtons from "../../components/CalcButtons/CalcButtons";
import {enterSymbol} from "../../store/actions/calcActions";

class Calc extends Component {
    render() {
        return (
            <View style={styles.calc}>
                <CalcDisplay value={this.props.calcString}/>
                <CalcButtons touched={this.props.enterSymbol}/>
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
});

const mapDispatchToProps = dispatch => ({
    enterSymbol: value => dispatch(enterSymbol(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
