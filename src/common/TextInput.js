import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield';
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
                                justifyContent: 'center'

                            }} 
                            {...this.props}
                            ref='input' 
                            fontSize={19}
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
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1, 
    },
    groupInputStyle: {
        flexDirection: 'row',
    },
    errorStyle: {
        color: theme.TEXT_ERROR_COLOR,
        fontSize: theme.TEXT_ERROR_FONT,
    }
})

export default TextInput
