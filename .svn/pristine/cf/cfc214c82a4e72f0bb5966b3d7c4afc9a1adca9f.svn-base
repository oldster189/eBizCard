import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import theme from '../styles/theme.style';

const TextInfo = ({ source, placehoder, value }) => {
    const {
        containerStyle,
        imageIconStyle,
        textPlaceholderStyle,
        textLabelStyle
    } = styles
    return (
        <View style={containerStyle}>
            <Image
                source={source}
                style={imageIconStyle}
            />
            <View>
                <Text style={textPlaceholderStyle}>{placehoder}</Text>
                <Text style={textLabelStyle}>{value}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        height: 60,
        marginLeft: theme.MARGIN_XX,
        alignItems: 'center',
    },
    imageIconStyle: {
        height: 24,
        width: 24,
        marginRight: 16,
    },
    textPlaceholderStyle: {
        color: '#A0A0A0', 
        fontSize: 12 
    },
    textLabelStyle: {
        color: '#454545', 
        fontSize: 19 
    }
});

export default TextInfo;
