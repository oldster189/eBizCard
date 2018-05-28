import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import theme from '../styles/theme.style';

class SeparatorHeader extends Component {
    render() {
        const { containerStyle, textStyle } = styles
        const { source, title } = this.props;
        return (
            <View style={containerStyle}>
                <Image
                    source={source}
                    style={{ height: 14, width: 14, marginLeft: theme.MARGIN_LEFT, }}
                />
                <Text style={textStyle}>
                    {title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 38,
    },
    textStyle: {
        color: theme.TEXT_COLOR,
        marginLeft: theme.MARGIN_LEFT,
        fontWeight: 'bold'
    }
});

export default SeparatorHeader;
