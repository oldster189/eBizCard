import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    TextField
} from 'react-native-material-textfield';
class PasswordInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icEye: 'visibility-off',
            password: true
        }
    }

    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility',
                password: false
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                password: true
            }
        }

        // set new state value
        this.setState(newState)

    };
    render() {
        return (
            <View>
                <TextField {...this.props}
                    autoCorrect={false}
                    autoCapitalize='none'
                    secureTextEntry={this.state.password}
                    label="Password" />
                <Icon style={styles.icon}
                    name={this.state.icEye}
                    size={this.props.iconSize}
                    color={this.props.iconColor}
                    onPress={this.changePwdType}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    icon: {
        position: 'absolute',
        top: 33,
        right: 0
    }

});

PasswordInput.defaultProps = {
    iconSize: 25,
}

export default PasswordInput;
