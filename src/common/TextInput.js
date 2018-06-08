import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield'
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
        })
        try {
            return this.props.onBlur()
        } catch (_error) {
            console.log(_error)
        }
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
        if (this.props.textError === undefined || this.props.textError === '') {
            return
        }
        return (
            <Text style={this.props.textErrorStyle}>{this.props.textError}</Text>
        )
    }

    render() {
        const { groupInputStyle } = styles
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'white', }}>
                    <View style={groupInputStyle} >
                        <TextField
                            {...this.props}
                            ref='input'
                            activeLineWidth={2}
                            labelPadding={0}
                            onFocus={() => this.setFocus()}
                            onBlur={() => this.unsetFocus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                    {this.renderError()}
                </View>
            </View>
        )
    }
}

TextInput.defaultProps = {
    lineWidth: 1,
    fontSize: theme.TEXT_FONT,
    inputContainerPadding: 16,
    labelTextStyle: { paddingLeft: theme.MARGIN_LEFT },
    inputContainerStyle: { paddingLeft: theme.PADDING_LEFT },
    returnKeyType: 'next'
}

const styles = StyleSheet.create({
    groupInputStyle: {
        flexDirection: 'row',
    }
})

export default TextInput
