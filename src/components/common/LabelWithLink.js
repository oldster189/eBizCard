import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const LabelWithLink = ({ textDesc, textLink, onPress }) => {
    const {
        containerStyle,
        textLinkStyle,
        textDescStyle
    } = styles;
    return (
        <View style={containerStyle}>
            <Text style={textDescStyle}>
                {textDesc}
            </Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={textLinkStyle}>
                    {textLink}
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {   
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    textDescStyle: {
        fontSize: 13,
        color: '#454545'
    },
    textLinkStyle: {
        marginLeft: 4,
        fontSize: 13,
        color: '#339CED'
    },
});

export { LabelWithLink };
