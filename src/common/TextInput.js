import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FloatLabelTextInput from 'react-native-floating-label-text-input'
import { TextField } from 'react-native-material-textfield';
import SeparatorLine from '../common/SeparatorLine'
import theme from '../styles/theme.style'

class TextInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            focused: false,
        }
    }

    setFocus() {
        this.setState({
            focused: true
        })
        try {
            return this.props.onFocus()
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
        } catch (_error) { }
    }


    clear() {
        this.inputRef().clear()
    }

    isFocused() {
        return this.inputRef().isFocused()
    }

    focus() {
        this.inputRef().focus()
    }

    blur() {
        this.inputRef().blur()
    }

    inputRef() {
        return this.refs.input
    }

    renderError() { 
        if (this.props.textError === '') {
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
                    <View style={groupInputStyle} >
                        <TextField
                            containerStyle={{
                                flex: 1,
                                height: 70,
                                padding: 0,
                                justifyContent: 'center'
                            }} 
                            {...this.props}
                            ref='input'
                            activeLineWidth={2}
                            onFocus={() => this.setFocus()}
                            onBlur={() => this.unsetFocus()}
                            noBorder
                            autoCapitalize="none"
                            autoCorrect={false}
                            leftPadding={theme.MARGIN_LEFT}
                            placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
                        />
                    </View>
                    {this.renderError()}
                </View> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    groupInputStyle: {
        flexDirection: 'row',
    },
    errorStyle: {
        marginLeft: theme.MARGIN_LEFT,
        color: theme.TEXT_ERROR_COLOR,
        fontSize: theme.TEXT_ERROR_FONT,
    }
})

export default TextInput
