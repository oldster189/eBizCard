import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { TextField } from 'react-native-material-textfield'; 

export default class PasswordInputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icEye: 'eye',
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
                icEye: 'eye-off',
                password: false
            }
        } else {
            newState = {
                icEye: 'eye',
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
            <Text style={this.props.textErrorStyle}>{this.props.textError}</Text>
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
                            {...this.props}
                            ref='input'
                            inputContainerPadding={8} 
                            labelTextStyle={{ paddingLeft: 0 }}
                            inputContainerStyle={{ paddingLeft: 0 }}
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
        right: 0,
        color: '#5D5D5D'
    },
    containerStyle: {
        flex: 1,
        backgroundColor: 'white', 
    },
    groupInputStyle: {
        flexDirection: 'row', 
    }, 
});

PasswordInputText.defaultProps = {
    iconSize: 18, 
}

