import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import theme from '../styles/theme.style'

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

    renderError() {
        if (this.props.textError === undefined || this.props.textError === '') {
            return
        }
        return (
            <Text style={styles.errorStyle}>{this.props.textError}</Text>
        )
    }

    render() {
        const { containerStyle, groupInputStyle } = styles
        return (
            <View style={{ flex: 1 }}>
                <View style={containerStyle}>
                    <View
                        style={groupInputStyle}
                    >
                        <TextField 
                            labelTextStyle={{ paddingLeft: 0 }}
                            inputContainerStyle={{ paddingLeft: 0 }}
                            {...this.props}
                            ref='input'
                            inputContainerPadding={8}
                            labelPadding={0} 
                            activeLineWidth={2}
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
                    {this.renderError()}
                </View>
            </View>

        );
    }
}

export const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 35,
        right: 0
    },
    containerStyle: {
        flex: 1,
        backgroundColor: 'white', 
    },
    groupInputStyle: {
        flexDirection: 'row', 
    },
    errorStyle: {
        color: theme.TEXT_ERROR_COLOR,
        fontSize: theme.TEXT_ERROR_FONT,
    }
});

PasswordInputText.defaultProps = {
    iconSize: 18,
}

