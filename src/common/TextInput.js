import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import theme from '../styles/theme.style';

class TextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        };
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

    render() {
        const { containerStyle, groupInputStyle } = styles
        console.log(this.props)
        return (
            <View style={containerStyle}>
                <View
                    style={groupInputStyle}
                >
                    <FloatLabelTextInput
                        {...this.props}
                        ref='input'
                        onFocus={() => this.setFocus()}
                        onBlur={() => this.unsetFocus()}
                        noBorder
                        autoCapitalize="none"
                        autoCorrect={false}
                        leftPadding={theme.MARGIN_LEFT}
                        placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        height: 68,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
    groupInputStyle: {
        flexDirection: 'row',
    }
});

export default TextInput;
