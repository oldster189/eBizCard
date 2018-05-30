import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    View,
    StyleSheet
} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

export default class PasswordInputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icEye: 'visibility',
            password: true,
            focused: false,
            selection: null
        }
    }
  
    setFocus() {
        this.setState({
            focused: true
        });
        try {
            return this.props.onFocus();
        } catch (_error) { 
            console.log(_error)
        }
    }

    clear() {
        this.inputRef().clear();
    }

    isFocused() {
        return this.inputRef().isFocused();
    }

    focus() {
        this.inputRef().focus();
    }

    blur() {
        this.inputRef().blur();
    }

    inputRef() {
        return this.refs.input;
    }

    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility-off',
                password: false
            }
        } else {
            newState = {
                icEye: 'visibility',
                password: true
            }
        }

        // set new state value
        this.setState(newState)
    };

    unsetFocus() {
        this.setState({
            focused: false
        });
        try {
            return this.props.onBlur();
        } catch (_error) { 
            console.log(_error)
        }
    }

    render() { 
        return (
            <View
                style={{
                    flex: 1,
                    height: 45,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            >
                <FloatLabelTextInput
                    {...this.props}
                    ref='input'
                    secureTextEntry={this.state.password}
                    onFocus={() => this.setFocus()}
                    onBlur={() => this.unsetFocus()}
                />
                <Icon
                    style={styles.icon}
                    name={this.state.icEye}
                    size={this.props.iconSize}
                    color={this.props.iconColor}
                    onPress={this.changePwdType}
                />
            </View>
        );
    }
}

export const styles = StyleSheet.create({

    icon: {
        position: 'absolute',
        top: 13,
        right: 0
    }

});

PasswordInputText.defaultProps = {
    iconSize: 18,
}

